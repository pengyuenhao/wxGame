import { Writer, Reader } from "peng-converter";
import { PropData, EventData } from "../base/SettleBase";

export interface IParent<T> {
    cls: new (...arg: any) => T;
    /**类型索引值 */
    serial: number;
    /**父级引用 */
    parent: IParent<any>;
    /**处于父级中的索引序号 */
    index: number;
}
/**事件驱动外壳 */
export interface IEvent<T> extends IParent<T> {
    /**监听修改 */
    on(caller:any,listener: (value: IEvent<T>, old?: T) => void);
    off();
    /**汇报事件 */
    report(serial: number, value: IValue<T>, oldValue: T, index?: number[]);
    /**发布事件 */
    emit(event?: EventData<T>);
}
export interface IValue<T> extends IEvent<T> {
    value: T;
    /**初始化函数 */
    init(): void;
}
//结算驱动外壳
export interface ISettler<T> extends IValue<T> {
    /**获取结算修改操作 */
    change<T>(serial: number, arr?: number[]): PropData<T>;
    /**执行结算属性的操作 */
    execute(cache?: any[]);
    /**检视所有结算属性 */
    inspect(cache?: PropData<any>);
    /**合并操作依据优先级进行，在处理异步的操作过程时，可以使用一个值作为优先级判定标准，一般推荐使用UUID值 */
    merge(data: PropData<T>, cache?: PropData<T>);
}
/**
 * 结算属性，这里相当于接口，主要提供代码提示部分
 * 所有经过Field解码的公共值都会被封装进结算属性里
 * 结算属性有+，-，*，/，=，几种操作方法，任何操作均不改变Get值，只在统一时刻进行结算
 */
export interface IOperate<T> extends ISettler<T> {
    //对于不同的值类型应该有不同的操作方法
    add(value?: T): IOperate<T>;
    sub(value?: T): IOperate<T>;
    mul(value?: T): IOperate<T>;
    div(value?: T): IOperate<T>;

    /**等于方法优先度最高，如果使用了等于，则会在结算时忽略其他操作，优先级高的将会作为实际结果 */
    eq(value: T): IOperate<T>;
}
export interface IEventArray<T> extends Array<IEvent<T>>, IParent<T> {

}
export interface IOperateArray<T> extends Array<IOperate<T>>, IEvent<T> {
    /**添加对象到数组队尾 */
    add(value: T, index?: number): IOperateArray<T>;
    /**移除数组指定索引的值 */
    remove(index: number): IOperateArray<T>;

    on(caller: any, listener: (value: IEvent<T>, old: T, index: number) => void);
}
/**
 * @tips 编码转换装饰器
 * @see 用于标记实现编码转换的类，需要实现编码转换的具体细节，可以在任意位置进行标记
 * @see 默认实现了一些基础类型的转换细节，具体的实现方法可以参考下面的默认转换规则
 */
export interface IConverter<T> {
    cls: new () => T;
    /**转换对象为字节数组方法 */
    to(writer: Writer, value: T,cls?:Function): void;
    /**转换字节数组为对象方法 */
    from(reader: Reader, cls?: Function): T;
    /**解析对象方法 */
    parse(obj: T, cls?: Function): T;
    /**转为JSON文本 */
    json(obj: T): string;
}
export interface ISettleStructure<T> {
    ctor: new () => T;
    serial: number;
    settler: (value: T, index?: number, parent?: IParent<T>) => IOperate<T>;
    /**转换封装对象为字节数组的方法 */
    toShell(writer: Writer, value: IOperate<T>, cls?: Function);
    /**转换字节数组为对象并且封装的方法 */
    fromShell(reader: Reader, cls?: Function, index?: number, parent?: IParent<T>): T;
    /**解析对象并封装在可结算外壳内的方法 */
    parseShell(obj: T, cls?: Function, index?: number, parent?: IParent<T>): T;
    /**转为JSON文本 */
    jsonShell(obj: IOperate<T>, cls?: Function): string;
    /**转换对象为字节数组方法 */
    to(writer: Writer, value: T);
    /**转换字节数组为对象方法 */
    from(reader: Reader, cls?: Function): T;
    /**解析对象方法 */
    parse(obj: T, cls?: Function): T;
    /**转为JSON文本 */
    json(obj: T): string;
}
/**
 * 结算转换器
 */
export interface ISettleConverter<T> extends IConverter<T> {
    getSerial(): number;
    settler: (value: T, index?: number, parent?: IParent<T>) => IOperate<T>;
    /**转换封装对象为字节数组的方法 */
    toShell(writer: Writer, value: IOperate<T>, cls?: Function);
    /**转换字节数组为对象并且封装的方法 */
    fromShell(reader: Reader, cls?: Function, index?: number, parent?: IParent<T>): IOperate<T>;
    /**解析对象并封装在可结算外壳内的方法 */
    parseShell(obj: T, cls?: Function, index?: number, parent?: IParent<T>): IOperate<T>;
    /**转为JSON文本 */
    jsonShell(obj: IOperate<T>, cls?: Function): string;
}