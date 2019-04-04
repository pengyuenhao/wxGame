import { Reader, Writer } from "peng-converter";
import { ISettleStructure, IParent, IOperate } from "../interface/Interface";

export class SettleStructure<T> implements ISettleStructure<T>{
    public ctor: new () => T;
    public serial: number;
    //结算器
    public settler: (value: T, index?: number, parent?: IParent<T>) => IOperate<T>;
    parse(value: any, cls: Function): T { throw new Error("[必须实现细节]") }
    parseShell(value: any, cls: Function, index?: number, parent?: IParent<T>): T { throw new Error("[必须实现细节]") }
    from(reader: Reader, cls?: Function): T { throw new Error("[必须实现细节]") }
    fromShell(reader: Reader, cls: Function, index?: number, parent?: IParent<T>): T { throw new Error("[必须实现细节]") }
    to(writer: Writer, value: any, cls?: Function) { throw new Error("[必须实现细节]") }
    toShell(writer: Writer, value: any, cls?: Function) { throw new Error("[必须实现细节]") }
    json(obj: T): string { throw new Error("[必须实现细节]") };
    jsonShell(obj: IOperate<T>, cls?: Function): string { throw new Error("[必须实现细节]") };
}