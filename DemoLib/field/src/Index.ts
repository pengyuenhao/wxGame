export function version(): string {
    return "field@2.0.0";
}
export { Settle, GetCtorOfSettler, GetSettler } from "./decorator/SettleDecorator"
export { PropData, DataSettle, EventData, EventSettle } from "./base/SettleBase";
//编码规则
export { Field, From, FromShell, To, ToShell, Parse, ParseShell, Json , JsonShell } from "./decorator/FieldDecorator";
//规则转换器
export { Convert, GetConverter } from "./decorator/ConvertDecorator";
export { Converter, SettleConverter, BaseConverter } from "./define/ConverterDefine";
export { Settler, BaseSettler, OperateArray as SettlerArray } from "./define/SettlerDefine";
export { RootObject, RootConverter, RootSettler } from "./define/ObjectDefine";
export { Type, GetSerialByValue,GetCtor, GetCtorByValue, GetType, GetTypeByValue,GetSerial,Ctor } from "./decorator/TypeDecorator";
export { Status } from "./decorator/StatusDecorator";
export { Integer,Float,NumberAttribute } from "./base/NumberBase";
export { Token,AccessToken } from "./base/TokenBase";
export { Attr } from "./decorator/AttrDecorator";
export { Behav } from "./decorator/BehavDecorator";
export { BehaviorAttribute } from "./base/BehaviorBase";
export { SettlerEnum } from "./enum/SettleEnum";
export { StatusEnum } from "./enum/StatusEnum";
export { Writer, BufferReader, BufferWriter, Reader, Long } from "peng-converter";
export { Vector2 } from "./base/VectorBase";
export { Prototype } from "./util/Prototype";
export { Buffer } from "buffer";
