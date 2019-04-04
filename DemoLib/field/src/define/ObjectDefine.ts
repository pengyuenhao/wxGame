import { Field } from "../decorator/FieldDecorator";
import { NumberAttribute } from "../base/NumberBase";
import { BehaviorAttribute, IBehavior } from "../base/BehaviorBase";
import { GetType, Type, GetCtor } from "../decorator/TypeDecorator";
import { Settle } from "../decorator/SettleDecorator";
import { ExtendConverter } from "./ConverterDefine";
import { AttrInject } from "../decorator/AttrDecorator";
import { BehaviorInject } from "../decorator/BehavDecorator";
import { StatusInject } from "../decorator/StatusDecorator";
import { Convert, } from "../decorator/ConvertDecorator";
import { PropData, DataSettle, EventData, EventSettle } from "../base/SettleBase";
import { Settler, OperateArray } from "./SettlerDefine";
import { IOperate, IOperateArray, IEvent, IValue, IParent } from "../interface/Interface";
import { StatusAttribute } from "../base/StatusBase";
import { TypeObject } from "../util/Define";

/**
 * 可编解码数据的根对象类型,可以使用@Code,@Attr,@Status,等标签直接获取被编码的数据
 * @example
 *   class A{
 *      @Field(Number, "x")
 *      x: number;
 *
 *      @Attr("abc")
 *      maxSpeed: DecimalAttribute;
 *
 *      @Status(StatusEnum.isIdel)
 *      isIdel : boolean;
 * 
 *      @Behavior("bbb")
 *      bbb : Behavior;
 *   }
 */
@Type("RootObject")
export class RootObject<T extends RootObject<T>> extends TypeObject {
    /*全局属性列表**/
    @Field(NumberAttribute, "attributes", Array)
    public attributes: IOperateArray<NumberAttribute>;
    /*全局技能列表**/
    @Field(BehaviorAttribute, "behaviors", Array)
    public behaviors: IOperateArray<IBehavior<T>>;
    /*全局状态属性**/
    @Field(StatusAttribute, "status", Array)
    public status: IOperateArray<number>;
    /*每个根对象都有一个唯一的不可变序列号**/
    @Field(Number, "serial")
    public serial: IOperate<number>;
    /*每个根对象都有一个位于数组中的索引值**/
    @Field(Number, "index")
    public index: IOperate<number>;
    /**使用类构造函数或者名称获取技能 */
    public getBehavior<B extends IBehavior<T>>(name: string): B;
    public getBehavior<B extends IBehavior<T>>(cls: new () => B): B;
    public getBehavior<B extends IBehavior<T>>(value: any): B {
        if (!this.behaviors) return null;
        let type = typeof value;
        let name;
        switch (type) {
            case "string":
                name = value;
                break;
            case "function":
                name = GetType(value);
                break;
        }
        if (!name) return null;
        let shell = this.behaviors[name];
        if (shell == null) return null;
        return shell.value as B;
    }
    public addBehavior<B extends IBehavior<T>>(name: string);
    public addBehavior<B extends IBehavior<T>>(value: B);
    public addBehavior<B extends IBehavior<T>>(cls: new () => B);
    public addBehavior<B extends IBehavior<T>>(value: any) {
        let behavior: B;
        switch (typeof value) {
            case "string":
                let cls = GetCtor(value);
                behavior = new cls();
                break;
            case "function":
                behavior = new value();
                break;
            case "object":
                behavior = value;
                break;
        }
        this.behaviors.add(behavior);
    }
    /**监听全局状态变化 */
    public on(stat: number, bool: boolean, caller: any, listener: Function) {
        this.status[stat >> 5].on(caller, (value: IValue<number>, old: number) => {
            //进行异或运算
            let change = value.value ^ old;
            //获取编码值
            let decide = 1 << (stat % 32);
            //判断是否发生了改变
            if ((decide & change) && !(value.value & decide) != bool) {
                //回调监听函数
                listener.call(caller);
            }
        });
    }
}
/**@see 这里之后再弄 */
@Type("RootArray")
export class RootArry<T extends RootObject<T>> extends OperateArray<RootSettler<T>>{

}
/**根类型转换规则 */
@Convert(RootObject)
export class RootConverter<T extends RootObject<T>> extends ExtendConverter<T>{
    fromShell(reader: cv.Reader): RootSettler<T> {
        //使用默认规则
        let inst = super.fromShell(reader) as RootSettler<T>;
        this.inject(inst);
        return inst;
    }
    parseShell(value: T) {
        let inst = super.parseShell(value) as RootSettler<T>;
        this.inject(inst);
        return inst;
    }
    private inject(inst: RootSettler<T>) {
        //注入值
        AttrInject(inst);
        StatusInject(inst);
        BehaviorInject(inst);
        //立刻进行结算
        inst.result();
    }
}

@Settle(RootObject)
/**根结算器 */
export class RootSettler<T extends RootObject<T>> extends Settler<T>{
    /**结算的缓存数据 */
    private settleCache: PropData<T>;
    private delayEvent: EventData<T>;
    init() {
        this.delayEvent = new EventData();
        this.settleCache = new PropData();
    }
    change<T>(serial: number, arr: number[]) {
        let prop: PropData<T>;
        let cache: PropData<any>[];
        let index;
        //选择使用预期数据还是缓存数据
        cache = this.settleCache.children;
        while (arr.length != 0) {
            index = arr.pop();
            prop = cache[index];
            if (!prop) {
                prop = new PropData();
                cache[index] = prop;
            }
            cache = prop.children;
        }
        prop.serial = serial;
        return prop;
    }
    //收集并分发操作句柄
    report(serial: number, value: IValue<T>, oldValue: T, arr: number[]) {
        let settle: EventData<T>;
        let event = this.delayEvent.children;
        let index;
        while (arr.length != 0) {
            index = arr.pop();
            settle = event[index];
            if (!settle) {
                settle = new EventData();
                event[index] = settle;
            }
            event = settle.children;
        }
        settle.serial = serial;
        settle.newValue = value == null ? null : value.value;
        settle.oldValue = oldValue;
    }
    //结算
    settle(): DataSettle<T> {
        if (this.value.index == null || this.value.serial == null) {
            this.settleCache.clear();
            console.error("[结算数据必须携带索引和序列号]");
            return null;
        }
        let data = new DataSettle<T>(this.settleCache, this.value.index.value, this.value.serial.value);
        return data;
    }
    result(cache?: PropData<T>) {
        if (!cache) cache = this.settleCache;
        this.inspect(cache);
        this.settleCache = new PropData();
    }
    event(): EventSettle<T> {
        return new EventSettle<T>(this.delayEvent, this.value.index.value, this.value.serial.value);
    }
    publish(cache?: EventData<T>) {
        if (!cache) cache = this.delayEvent;
        this.emit(cache);
        this.delayEvent = new EventData();
    }
}

@Convert(BehaviorAttribute)
class BehaviorAttributeConvert<T extends RootObject<T>> extends ExtendConverter<BehaviorAttribute<T>>{
    parseShell(value: BehaviorAttribute<T>, cls?: Function, index?: number, parent?: IParent<any>) {
        let settler = super.parseShell(value, cls);
        if (index != null && parent != null) {
            settler.index = index;
            settler.parent = parent;
            let root;
            root = parent;
            while (true) {
                if (root == null) break;
                if (root instanceof RootSettler) {
                    BehaviorInject(root, settler);
                    break;
                }
                root = root.parent;
            }
        }
        return settler;
    }
}