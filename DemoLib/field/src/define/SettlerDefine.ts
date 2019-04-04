import { Settle } from "../decorator/SettleDecorator";
import { PropData, EventData } from "../base/SettleBase";
import { GetFieldList } from "../decorator/FieldDecorator";
import { SettlerEnum } from "../enum/SettleEnum";
import { Vector2 } from "../base/VectorBase";
import { Long } from "peng-converter";
import { GetConverter } from "../decorator/ConvertDecorator";
import { GetCtorByValue, GetSerial, GetCtor } from "../decorator/TypeDecorator";
import { NumberAttribute, Integer, Float, CustomNumber, INumber } from "../base/NumberBase";
import { IOperate, IOperateArray, ISettler, IEvent, IValue } from "../interface/Interface";
import { ExtendsException } from "../util/Exception";
import { StatusAttribute } from "../base/StatusBase";
import { BehaviorAttribute } from "../base/BehaviorBase";
import { BehaviorInject } from "../decorator/BehavDecorator";
import { RootSettler } from "./ObjectDefine";


/**************************@see 基础类型结算规则 ************************************/
/**默认基础转换器 */
export class Settler<T> implements IOperate<T>{
    cls: new (...arg: any) => T;
    /**类型序列号 */
    serial: number;
    parent: ISettler<T>;
    index: number;

    private events: Array<(value: IValue<T>, old?: T) => void> = [];

    on(caller: any, listener: (value: IValue<T>, old?: T) => void) {
        this.events.push((value: IValue<T>, old?: T) => { listener.call(caller, value, old) });
    }
    off(){
        this.events = [];
    }
    /** @see 因为获取到数据时还没有结算完毕，所以需要在下一帧再进行回调*/
    report(serial: number, value: IValue<T>, old: T, arr?: number[]) {
        //逐层上报并附加上每层在父级中的索引
        if (this.parent) {
            if (arr == null) arr = [];
            arr.push(this.index);
            this.parent.report(serial, value, old, arr);
        }
    }
    public emit(value: EventData<T>) {
        if (!value) return;
        let child: EventData<T>;
        let settle: IOperate<any>;
        //如果存在改变的值
        if (value.newValue != value.oldValue) {
            //遍历所有注册的事件并执行回调
            for (let i = 0; i < this.events.length; i++) {
                let event = this.events[i];
                if (event) this.events[i](this, value.oldValue);
            }
        }
        if (value.children.length != 0) {
            let list = GetFieldList(this.value.constructor);
            //检索子节点
            for (let i = 0; i < value.children.length; i++) {
                //缓存操作
                child = value.children[i];
                if (child == null) continue;
                //获取结算属性
                settle = this.value[list[i].property];
                if (settle == null) continue;
                settle.emit(child);
            }
        }
    }
    /**监听所有子属性是否发生改变 */
    public change<T>(converter: number, arr?: number[]): PropData<T> {
        if (this.parent) {
            if (arr == null) arr = [];
            arr.push(this.index);
            return this.parent.change(converter, arr);
        }
    }
    /**@see 如果需要拦截设置和获取方法，则可以在这里定义get和set方法 */
    value: T;
    /*     public get value() {
            return this.get();
        }
        public set value(value) {
            this.data = this.set(value);
        } */
    /**默认的获取携带数值的方法 */
    /*     protected get(): T {
            return this.data;
        } */
    /**默认的设置携带数值的方法 */
    /*     protected set(value: T): T {
            return value;
        } */
    /**默认的加法 */
    public add(value?: T): IOperate<T> {
        throw Error("[继承类必须实现细节部分]");
    }
    public mul(value?: T): IOperate<T> {
        throw Error("[继承类必须实现细节部分]");
    }
    public sub(value?: T): IOperate<T> {
        throw Error("[继承类必须实现细节部分]");
    }
    public div(value?: T): IOperate<T> {
        throw Error("[继承类必须实现细节部分]");
    }
    public eq(value?: T): IOperate<T> {
        throw Error("[继承类必须实现细节部分]");
    }
    /**合并操作依据优先级进行，在处理异步的操作过程时，可以使用一个值作为优先级判定标准，一般推荐使用UUID值 */
    public merge(data: PropData<T>, cache?: PropData<T>) {
        debugger;
        let arr = data.children;
        if (arr == null) return;
        let propList = GetFieldList(this.constructor);
        for (let i = 0; i < arr.length; i++) {
            let value = cache[i];
            if (value == null) {
                cache[i] = arr[i];
            } else {
                let binding = propList[i];
                //获取结算属性
                let settle: IOperate<any> = this[binding.property];
                if (settle == null) continue;
                //合并结算数据
                settle.merge(arr[i], cache[i]);
            }
        }
    }
    public inspect(/**操作缓存数组 */value: PropData<T>) {
        //如果执行的指令为空则跳过
        if (!value) return;
        //以结算对象存储的数据作为入口
        let settle: IOperate<any>;
        let child: PropData<T>;
        if (value.cache.length != 0) {
            this.execute(value.cache);
        }
        if (value.children.length != 0) {
            let list = GetFieldList(this.value.constructor);
            //检索子节点
            for (let i = 0; i < value.children.length; i++) {
                //缓存操作
                child = value.children[i];
                if (child == null) continue;
                //获取结算属性
                settle = this.value[list[i].property];
                if (settle == null) continue;
                settle.inspect(child);
            }
        }
    }

    /**解析执行方法 */
    public execute(/**操作缓存数组 */cache?: T[]) {
        throw ExtendsException;
    }
    public init() {

    }
    /**重写字符串转换方法 */
    public toString() {
        if (this.value != null) {
            return this.value.toString();
        } else {
            return null;
        }
    }
    constructor(value: T, index: number, parent: ISettler<T>) {
        this.value = value;
        this.index = index;
        this.parent = parent;
    }

}
export class BaseSettler<T> extends Settler<T>{
    /**实现加法的细节 */
    protected toAdd(a: T, b: T): T {
        throw Error("[继承类必须实现细节部分]");
    }
    protected toSub(a: T, b: T): T {
        throw Error("[继承类必须实现细节部分]");
    }
    /**实现乘法的细节 */
    protected toMul(a: T, b: T): T {
        throw Error("[继承类必须实现细节部分]");
    }
    protected toDiv(a: T, b: T): T {
        throw Error("[继承类必须实现细节部分]");
    }
    /**实现零值判断的细节 */
    protected isZero(v: T): boolean {
        throw Error("[继承类必须实现细节部分]");
    }
    /**实现一值判断的细节 */
    protected isOne(v: T): boolean {
        throw Error("[继承类必须实现细节部分]");
    }
    /**默认的加法 */
    public add(value: T): IOperate<T> {
        //这里可以获取到缓存内本属性所在的数组
        let arr = this.change<T>(this.serial);
        if (arr.cache[SettlerEnum.EQ] == null) {
            if (arr.cache[SettlerEnum.ADD] == null) {
                arr.cache[SettlerEnum.ADD] = this.toAdd(null, value);
            }
            else {
                arr.cache[SettlerEnum.ADD] = this.toAdd(arr.cache[SettlerEnum.ADD], value);
                //如果归零则重置为空
                if (this.isZero(arr.cache[SettlerEnum.ADD])) arr.cache[SettlerEnum.ADD] = null;
            }
        }
        return this;
    }
    /**默认的减法 */
    public sub(value: T): IOperate<T> {
        //这里可以获取到缓存内本属性所在的数组
        let arr = this.change<T>(this.serial);
        if (arr.cache[SettlerEnum.EQ] == null) {
            if (arr.cache[SettlerEnum.ADD] == null) {
                arr.cache[SettlerEnum.ADD] = this.toSub(null, value);
            }
            else {
                arr.cache[SettlerEnum.ADD] = this.toSub(arr.cache[SettlerEnum.ADD], value);
                //如果归零则重置为空
                if (this.isZero(arr.cache[SettlerEnum.ADD])) arr.cache[SettlerEnum.ADD] = null;
            }
        }
        return this;
    }
    /**默认的乘法 */
    public mul(value: T): IOperate<T> {
        //这里可以获取到缓存内本属性所在的数组
        let arr = this.change<T>(this.serial);
        if (arr.cache[SettlerEnum.EQ] == null) {
            if (arr.cache[SettlerEnum.MUL] == null) {
                arr.cache[SettlerEnum.MUL] = this.toAdd(null, value);
            }
            else {
                arr.cache[SettlerEnum.MUL] = this.toMul(arr.cache[SettlerEnum.MUL], value);
                //如果归1则重置为空
                if (this.isOne(arr.cache[SettlerEnum.MUL])) arr.cache[SettlerEnum.MUL] = null;
            }
        }
        return this;
    }
    /**默认的除法 */
    public div(value: T): IOperate<T> {
        //这里可以获取到缓存内本属性所在的数组
        let arr = this.change<T>(this.serial);
        if (arr.cache[SettlerEnum.EQ] == null) {
            if (arr.cache[SettlerEnum.MUL] == null) {
                arr.cache[SettlerEnum.MUL] = this.toDiv(null, value);
            }
            else {
                arr.cache[SettlerEnum.MUL] = this.toDiv(arr.cache[SettlerEnum.MUL], value);
                //如果归1则重置为空
                if (this.isOne(arr.cache[SettlerEnum.MUL])) arr.cache[SettlerEnum.MUL] = null;
            }
        }
        return this;
    }
    public eq(value: T): IOperate<T> {
        let arr = this.change<T>(this.serial);
        arr.cache[SettlerEnum.MUL] = null;
        arr.cache[SettlerEnum.ADD] = null;
        arr.cache[SettlerEnum.EQ] = value;
        return this;
    }
    /**@see 这里负责处理统一的结算规则 */
    public merge(data: PropData<T>, cache?: PropData<T>) {
        debugger;
    }
    //执行操作缓存
    public execute(cache: T[]) {
        //记录原值
        let oldValue = this.value;
        for (let i = 0; i < cache.length; i++) {
            //跳过为空值的部分，EQ位如果存在数据则必须赋值
            if (i != SettlerEnum.EQ && cache[i] == null) continue;
            switch (i) {
                case SettlerEnum.MUL:
                    this.value = this.toMul(this.value, cache[i]);
                    break;
                case SettlerEnum.ADD:
                    this.value = this.toAdd(this.value, cache[i]);
                    break;
                case SettlerEnum.EQ:
                    this.value = cache[i];
                    break;
            }
        }
        //逐层向上传递数据改变事件
        this.report(this.serial, this, oldValue);
    }
}
export class OperateArray<T> extends Array<IOperate<T>> implements IOperateArray<T> {
    cls: new (...arg: any) => T;

    public serial: number;
    public parent: ISettler<T>;
    public index: number;

    //回收数组
    private recycleArray: number[];
    //期望长度
    private expectLenght: number;


    private events: Array<(value: IValue<T>, old: T, index: number) => void> = [];

    on(caller: any, listener: (value: IEvent<T>, old: T, index: number) => void) {
        this.events.push((value: IValue<T>, old: T, index: number) => { listener.call(caller, value, old, index) });
    }
    off(){
        this.events = [];
    }
    report(serial: number, value: IValue<T>, old: T, index?: number[]) {
        //逐层上报并附加上每层在父级中的索引
        if (this.parent) {
            if (index == null) index = [];
            index.push(this.index);
            this.parent.report(serial, value, old, index);
        }
    }
    public emit(value: EventData<T>) {
        //如果执行的指令为空则跳过
        if (!value) return;
        //如果存在改变的值
        /*         if (value.newValue != value.oldValue) {
                    //遍历所有注册的事件并执行回调
                    for (let i = 0; i < this.events.length; i++) {
                        let event = this.events[i];
                        if (event) this.events[i](this, value.oldValue, -1);
                    }
                } */
        //以结算对象存储的数据作为入口
        let settle: ISettler<T>;
        //检索子节点
        for (let i = 0; i < value.children.length; i++) {
            settle = this[i];
            let child = value.children[i];
            if (child != null && child.newValue != child.oldValue) {
                //遍历所有注册的事件并执行回调
                for (let j = 0; j < this.events.length; j++) {
                    let event = this.events[j];
                    if (event) this.events[j](settle, child.oldValue, i);
                }
            }
            if (settle == null) continue;
            settle.emit(child);
        }
    }

    public add(value: T, index?: number): IOperateArray<T> {
        let arr = this.change<T>(null);
        let serial;
        if (value == null) {
            serial = -1;
        } else {
            serial = GetSerial(GetCtorByValue(value));
        }
        if (index == null) {
            if (this.expectLenght == null) this.expectLenght = this.length;
            index = this.expectLenght;
            this.expectLenght += 1;
            //使用回收数组
/*             if (this.recycleArray != null && this.recycleArray.length > 0) {
                index = this.recycleArray.pop();
            } else {
                //设置期望长度
                if (this.expectLenght == null) this.expectLenght = this.length;
                index = this.expectLenght;
                this.expectLenght += 1;
            } */
        }
        arr.detail[index] = serial;
        arr.cache[index] = value;
        //console.log("[设置数据位]"+index + "[类型]"+serial);
        return this;
    }

    public remove(index: number): IOperateArray<T> {
        let arr = this.change<T>(null);
        arr.detail[index] = -1;
        arr.cache[index] = null;
        return this;
    }

    public inspect(/**操作缓存数组 */value: PropData<T>) {
        //如果执行的指令为空则跳过
        if (!value) return;
        if (value.cache.length != 0) {
            this.execute(value.cache, value.detail);
        }
        //以结算对象存储的数据作为入口
        let settle: ISettler<T>;
        //检索子节点
        for (let i = 0; i < value.children.length; i++) {
            settle = this[i];
            if (settle == null) continue;
            settle.inspect(value.children[i]);
        }
    }
    public change<T>(converter: number, arr?: number[]): PropData<T> {
        if (this.parent) {
            if (arr == null) arr = [];
            arr.push(this.index);
            return this.parent.change(converter, arr);
        }
    }
    public execute(cache?: T[], detail?: number[]) {
        for (let i = 0; i < cache.length; i++) {
            let data = this[i] == null ? null : this[i].value;
            let newValue: IOperate<T>;
            let serial = detail[i];
            //跳过无效值
            if (serial == null) continue;
            if (serial != -1) {
                let value = cache[i];
                let ctor = GetCtor(serial);
                let converter = GetConverter<T>(ctor);
                let settler = converter.parseShell(value, ctor, i, this);
                newValue = settler;
            } else {
                //移除所有监听
                this[i] && this[i].off();
                //移除外壳
                newValue = null;
            }
            //console.log("[索引]" + i + "[操作]" + serial + "[值]" + data + "=>" + newValue);
            this[i] = newValue;
            this.report(this.serial, newValue, data, [i]);
        }
        this.expectLenght = this.length;
        //建立回收数组
/*         this.recycleArray = [];
        for (let i = 0; i < this.length; i++) {
            if (this[i] == null) this.recycleArray.push(i);
        } */
    }
    public merge(data: PropData<T>, cache?: PropData<T>) {
        debugger;
        let arr = data;
        if (arr == null) return;
        for (let i = 0; i < arr.cache.length; i++) {
            let value = cache[i];
            if (value == null) {
                cache[i] = arr[i];
            } else {
                //获取结算属性
                let settle: IOperate<any> = this[i];
                if (settle == null) continue;
                //合并结算数据
                settle.merge(arr[i], cache[i]);
            }
        }
    }
}
@Settle(Array)
class ArraySettler<T> extends Settler<Array<T>>{

}
/**布尔类型结算规则 */
@Settle(Object)
class ObjectSettler extends BaseSettler<object>{

}
/**布尔类型结算规则 */
@Settle(Boolean)
class BooleanSettler extends BaseSettler<boolean>{

}
/**数字类型结算规则 */
@Settle(Number)
class NumberSettler extends BaseSettler<number>{
    /*     protected set(value:number){
            return super.set(value);
        }
        protected get():number{
            return super.get();
        } */
    protected toAdd(a: number, b: number) {
        if (b == null) return a;
        if (a == null) return b;
        return a + b;
    }
    protected toSub(a: number, b: number) {
        if (b == null) return a;
        if (a == null) return -b;
        return a - b;
    }
    protected toMul(a: number, b: number) {
        if (b == null) return a;
        //空值视作0
        if (a == null) return 0;
        return a * b;
    }
    protected toDiv(a: number, b: number) {
        if (b == null) return a;
        //空值视作1
        if (a == null) return 1 / b;
        return a / b;
    }
    protected isZero(v: number) {
        return v == 0;
    }
    protected isOne(v: number) {
        return v == 1;
    }
    public merge<T>(data: PropData<T>, cache?: PropData<T>) {
        debugger;
        return null;
    }
}
@Settle(CustomNumber)
class CustomNumberSettler extends BaseSettler<INumber>{
    protected toAdd(a: INumber, b: INumber) {
        //将数字封装在对象内
        if (b == null) return a;
        if (typeof b == "number") {
            b = new this.cls(b);
            //b = new (<new (v: number) => INumber>GetCtor(this.serial))(b);
        }
        if (a == null) {
            return b;
        }
        return a.add(b);
    }
    protected toSub(a: INumber, b: INumber) {
        if (b == null) return a;
        if (typeof b == "number") {
            b = new this.cls(b);
            //b = new (<new (v: number) => INumber>GetCtor(this.serial))(b);
        }
        if (a == null) return b.neg();
        return a.sub(b);
    }
    protected toMul(a: INumber, b: INumber) {
        if (b == null) return a;
        if (typeof b == "number") {
            b = new this.cls(b);
            //b = new (<new (v: number) => INumber>GetCtor(this.serial))(b);
        }
        //空值视作0
        if (a == null) return new CustomNumber(0);
        return a.mul(b);
    }
    protected toDiv(a: INumber, b: INumber) {
        if (b == null) return a;
        if (typeof b == "number") {
            b = new this.cls(b);
            //b = new (<new (v: number) => INumber>GetCtor(this.serial))(b);
        }
        //空值视作1
        if (a == null) return b.rec();
        return a.div(b);
    }
    public eq(value: INumber): IOperate<INumber> {
        let arr = this.change<INumber>(this.serial);
        arr.cache[SettlerEnum.MUL] = null;
        arr.cache[SettlerEnum.ADD] = null;
        if (typeof value == "number") {
            value = new this.cls(value);
            //value = new (<new (v: number) => INumber>GetCtor(this.serial))(value);
        }
        arr.cache[SettlerEnum.EQ] = value;
        return this;
    }
    protected isZero(v: INumber) {
        if (typeof v == "number") {
            return v == 0;
        } else {
            return v.value == 0;
        }
    }
    protected isOne(v: INumber) {
        if (typeof v == "number") {
            return v == 1;
        } else {
            return v.value == 1;
        }
    }
    public merge<T>(data: PropData<T>, cache?: PropData<T>) {
        debugger;
        return null;
    }
    //执行操作缓存
    public execute(cache: INumber[]) {
        //记录原值
        let oldValue = this.value;
        for (let i = 0; i < cache.length; i++) {
            //跳过为空值的部分，EQ位如果存在数据则必须赋值
            if (i != SettlerEnum.EQ && cache[i] == null) continue;
            switch (i) {
                case SettlerEnum.MUL:
                    this.value = this.toMul(this.value, cache[i]);
                    break;
                case SettlerEnum.ADD:
                    this.value = this.toAdd(this.value, cache[i]);
                    break;
                case SettlerEnum.EQ:
                    this.value = cache[i];
                    break;
            }
        }
        //逐层向上传递数据改变事件
        this.report(this.serial, this, oldValue);
    }
}
@Settle(Integer)
class IntegerSettler extends CustomNumberSettler {
    public mul(value: INumber): IOperate<INumber> {
        if (typeof value == "number") {
            value = new this.cls(value);
        }
        this.add(this.value.mul(value).sub(this.value));
        return this;
    }
    public div(value: INumber): IOperate<INumber> {
        if (typeof value == "number") {
            value = new this.cls(value);
        }
        this.sub(this.value.sub(this.value.div(value)));
        return this;
    }
};
@Settle(Float)
class FloatSettler extends CustomNumberSettler { };
/**数字类型结算规则 */
@Settle(String)
class StringSettler extends BaseSettler<string>{
    protected toAdd(a: string, b: string): string {
        if (b == null) return a;
        if (a == null) return b;
        return a + b;
    }
    protected toSub(a: string, b: string): string {
        if (b == null) return a;
        if (a == null) return b;
        return a.substr(a.lastIndexOf(b));
    }
    protected isZero(v: string) {
        return v == "" || v == null;
    }
}
/**结算方法 */
@Settle(Long)
class LongSettle extends BaseSettler<Long>{
    protected toAdd(a: Long, b: Long): Long {
        if (b == null) return a;
        if (a == null) return b;
        return a.add(b);
    }
    protected toSub(a: Long, b: Long): Long {
        if (b == null) return a;
        if (a == null) return b.neg();
        return a.sub(b);
    }
    protected toMul(a: Long, b: Long): Long {
        if (b == null) return a;
        //空值视作0
        if (a == null) return Long.ZERO;
        return a.mul(b);
    }
    protected toDiv(a: Long, b: Long): Long {
        if (b == null) return a;
        //空值视作1
        if (a == null) return Long.ONE.div(b);
        return a.div(b);
    }
    protected isZero(v: Long) {
        return v.isZero();
    }
    protected isOne(v: Long) {
        return v.toNumber() == 1;
    }
}
/**结算方法 */
@Settle(Vector2)
class Vector2Settle extends BaseSettler<Vector2>{
    protected toAdd(a: Vector2, b: Vector2): Vector2 {
        if (b == null) return a;
        if (a == null) return b;
        return a.add(b);
    }
    protected toSub(a: Vector2, b: Vector2): Vector2 {
        if (b == null) return a;
        if (a == null) return b.neg();
        return a.sub(b);
    }
    protected toMul(a: Vector2, b: Vector2): Vector2 {
        if (b == null) return a;
        //空值视作0
        if (a == null) return Vector2.Zero;
        return a.mul(b);
    }
    protected toDiv(a: Vector2, b: Vector2): Vector2 {
        if (b == null) return a;
        //空值视作1
        if (a == null) return Vector2.One.div(b);
        return a.div(b);
    }
    protected isZero(v: Vector2) {
        return v.isZero();
    }
    protected isOne(v: Vector2) {
        return v.isOne();
    }
}
@Settle(NumberAttribute)
class NumberAttributeSettler extends BaseSettler<NumberAttribute>{
    //重写子节点搜索方法
    public inspect(/**操作缓存数组 */cache: PropData<NumberAttribute>) {
        //如果执行的指令为空则跳过
        if (!cache) return;
        //以结算对象存储的数据作为入口
        let settle: IOperate<any>;
        let child: PropData<NumberAttribute>;
        if (cache.cache.length != 0) {
            this.execute(cache.cache);
        }
        if (cache.children.length != 0) {
            let list = GetFieldList(this.value.constructor);
            //检索子节点
            for (let i = 0; i < cache.children.length; i++) {
                //缓存操作
                child = cache.children[i];
                if (child == null) continue;
                //获取结算属性
                settle = this.value[list[i].property];
                //如果结算属性为空，这里直接附上初始值
                if (settle == null) {
                    this.value[list[i].property] = settle = list[i].value.delay.settler(null, i, this);
                }
                settle.inspect(child);
            }
        }
    }
}

@Settle(StatusAttribute)
class StatusAttributeSettler extends BaseSettler<number>{
    add(value: number): IOperate<number> {
        let settle = this.change<number>(this.serial);
        let trueValue = settle.cache[0];
        let falseValue = settle.cache[1];
        //是否与当前值不同
        let isChange = (this.value & value) == 0;
        //计划设置为False
        if (falseValue != null) {
            //取消设置为False
            falseValue &= ~value;
            //计划设置为空则直接设置为空值
            if (falseValue == 0) settle.cache[1] = null;
        }
        if (isChange) {
            if (trueValue == null) {
                settle.cache[0] = value;
            } else {
                trueValue |= value;
            }
        }
        return this;
    }
    sub(value: number): IOperate<number> {
        let settle = this.change<number>(this.serial);
        let trueValue = settle.cache[0];
        let falseValue = settle.cache[1];
        //是否与当前值不同
        let isChange = (this.value & value) != 0;
        if (trueValue != null) {
            trueValue &= ~value;
            if (trueValue == 0) settle.cache[0] = null;
        }
        if (isChange) {
            if (falseValue == null) {
                settle.cache[1] = value;
            } else {
                falseValue |= value;
            }
        }
        return this;
    }
    execute(cache: number[]) {
        if (cache == null || cache == null || cache.length == 0) return;
        let trueValue = cache[0];
        let falseValue = cache[1];
        let data = this.value;
        if (trueValue != null) {
            this.value |= trueValue;
        }
        if (falseValue != null) {
            this.value &= ~falseValue;
        }
        //console.log("[发布状态结算]" + this.value.data + "[原值]" + data);
        //逐层向上传递数据改变事件
        this.report(this.serial, this, data);
    }
}
