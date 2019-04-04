import { Convert, GetConverter } from "../decorator/ConvertDecorator";
import { FieldToShell, FieldTo, FieldFrom, FieldFromShell, FieldParseShell, FieldParse, FieldJsonShell, FieldJson } from "../decorator/FieldDecorator";
import { Utils } from "../util/Util";
import { OperateArray } from "./SettlerDefine";
import { Long, Writer, Reader } from "peng-converter";
import { Vector2 } from "../base/VectorBase";
import { GetCtorByValue, GetSerial, GetCtor } from "../decorator/TypeDecorator";
import { NumberAttribute, Integer, CustomNumber, INumber, Float } from "../base/NumberBase";
import { ExtendsException } from "../util/Exception";
import { DataSettle, PropData, EventData, EventSettle as EventSettle } from "../base/SettleBase";
import { BehaviorAttribute } from "../base/BehaviorBase";
import { RootObject } from "./ObjectDefine";
import { IConverter, ISettleConverter, IParent, IOperate, ISettler } from "../interface/Interface";
import { StatusAttribute } from "../base/StatusBase";
import { Token, AccessToken } from "../base/TokenBase";

/**************************@see 基础类型转换器定义 ************************************/
/**默认基础转换器 */
export class Converter<T> implements IConverter<T>{
    public cls: new () => T;

    public to(writer: Writer, value: T, cls?: Function) {
        FieldTo(writer, value, cls);
    }
    public from(reader: Reader, cls?: Function): T {
        return FieldFrom(reader, cls);
    }
    /**
     * 默认的对象解析方法
    */
    public parse(value: T, cls?: Function): T {
        return FieldParse(value, cls);
    }

    public json(value: T): string {
        return FieldJson(value);
    }
}
export class SettleConverter<T> extends Converter<T> implements ISettleConverter<T>{
    public getSerial(): number { throw ExtendsException };
    //结算器
    public settler: (value: T, index?: number, parent?: IParent<T>) => IOperate<T>;
    /**
     * 解析方法并且封装在可结算外壳中
     * @param value json对象
     * @param cls 外壳封装类型
    */
    public parseShell(value: T, cls?: Function, index?: number, parent?: ISettler<T>): IOperate<T> {
        return FieldParseShell(value, cls, index, parent);
    }
    public toShell(writer: Writer, value: IOperate<T>, cls?: Function) {
        FieldToShell(writer, value, cls);
    }
    public fromShell(reader: Reader, cls?: Function, index?: number, parent?: ISettler<T>): IOperate<T> {
        return FieldFromShell(reader, cls, index, parent);
    }
    /**
     * 默认的JSON文本转换方法
    */
    public jsonShell(value: IOperate<T>): string {
        return FieldJsonShell(value);
    }
}

/**基础类型转换规则 */
export class BaseConverter<T> extends SettleConverter<T>{
    public parse(value: T, cls?: Function) {
        return value;
    }
    public parseShell(value: T, cls?: Function, index?: number, parent?: IParent<T>): IOperate<T> {
        return this.settler(this.parse(value, cls), index, parent);
    }
    public fromShell(reader: Reader, cls?: Function, index?: number, parent?: IParent<T>) {
        return this.settler(this.from(reader, cls), index, parent);
    }
    public toShell(writer: Writer, value: IOperate<T>, cls?: Function) {
        this.to(writer, value.value, cls);
    }
    public jsonShell(value: IOperate<T>) {
        return value.value.toString();
    }
    public json(value: any) {
        return value.toString();
    }
}
/**继承类型转换规则 */
export class ExtendConverter<T> extends SettleConverter<T>{
    to(writer: Writer, value: T, cls?: Function) {
        if (!cls) {
            cls = GetCtorByValue(value);
        }
        let serial = GetSerial(cls);
        writer.int32(serial);
        //使用默认规则
        super.to(writer, value, cls);
    }
    toShell(writer: cv.Writer, value: IOperate<T>, cls?: Function) {
        cls = GetCtorByValue(value.value);
        let serial = GetSerial(cls);
        writer.int32(serial);
        //使用默认规则
        super.toShell(writer, value, cls);
    }
    from(reader: Reader, cls?: Function): T {
        cls = GetCtor(reader.int32());
        //使用默认规则
        let inst = super.from(reader, cls) as T;
        return inst;
    }
    fromShell(reader: cv.Reader, cls?: Function): IOperate<T> {
        cls = GetCtor(reader.int32());   //使用默认规则
        let inst = super.fromShell(reader, cls);
        return inst;
    }
    parse(value: T, cls?: Function) {
        //采用特殊标记获取对象的类型值
        let type = value["@type"];
        if (type) {
            cls = GetCtor(type);
        }

        let inst = super.parse(value, cls) as T;
        return inst;
    }
    parseShell(value: T, cls?: Function) {
        let type = value["@type"];
        if (type) {
            cls = GetCtor(type);
        }

        let inst = super.parseShell(value, cls);
        return inst;
    }
}
/**************************@see 基础类型转换规则定义 ************************************/
@Convert(Array)
class ArrayConverter<T> extends SettleConverter<Array<T>>{
    parse(value: T[], cls: Function) {
        if (!value) return [];
        let arr = [];
        for (let i = 0; i < value.length; i++) {
            let converter = GetConverter<T>(cls);
            arr.push(converter.parse(value[i], cls));
        }
        return arr;
    }
    parseShell(value: T[], cls: Function, index?: number, parent?: ISettler<T[]>) {
        let arr = new OperateArray<any>();
        arr.index = index;
        arr.parent = parent;
        arr.serial = GetSerial(cls);
        if (!value) return arr;
        let converter = GetConverter<T>(cls);
        for (let i = 0; i < value.length; i++) {
            if (value[i] == null) continue;
            let shell = converter.parseShell(value[i], cls);
            shell.index = i;
            shell.parent = arr;
            arr[i] = shell;
        }
        return arr as any;
    }

    from(reader: Reader, cls?: Function) {
        let isDetail: boolean = reader.bool();
        let converter: ISettleConverter<T>;
        if (!isDetail) {
            converter = GetConverter(cls);
        }
        return Utils.ParseValidArr(reader, (isExist, i, arr) => {
            if (isExist) {
                if (isDetail) {
                    let serial = reader.int32();
                    cls = GetCtor(serial);
                    converter = GetConverter(serial);
                }
                return converter.from(reader, cls);
            } else {
                return null;
            }
        });
    }
    fromShell(reader: Reader, cls: Function, index?: number, parent?: IOperate<T[]>) {
        let isDetail: boolean = reader.bool();
        let converter: ISettleConverter<T>;
        if (!isDetail) {
            converter = GetConverter(cls);
        }
        let arr = Utils.ParseValidArr(reader, (isExist, i, arr) => {
            let shell;
            if (isExist) {
                if (isDetail) {
                    let serial = reader.int32();
                    converter = GetConverter(serial);
                }
                shell = converter.fromShell(reader, cls);
                shell.index = i;
                shell.parent = arr;
            } else {
                shell = null;
            }
            return shell;
        }, OperateArray);
        arr.serial = GetSerial(cls);
        return arr as any;
    }

    to(writer: Writer, value: Array<T>, cls?: Function) {
        let isDetail: boolean;
        let converter: ISettleConverter<T>;
        if (cls == null) {
            isDetail = true;
            writer.bool(true);
        } else {
            isDetail = false;
            writer.bool(false);
            converter = GetConverter<T>(cls);
        }
        let validArr = Utils.GetValidArr(value, writer, (prop: T) => {
            if (prop) {
                return true;
            } else {
                return false;
            }
        });
        //编码有效实体数据
        for (let i = 0; i < validArr.length; i++) {
            let prop = value[validArr[i]];
            //是否使用详细模式
            if (isDetail) {
                let serial = GetSerial(prop);
                converter = GetConverter(serial);
                cls = GetCtor(serial);
                writer.int32(serial);
            }
            converter.to(writer, prop, cls);
        }
    }
    toShell(writer: Writer, value: any, cls?: Function) {
        let isDetail: boolean;
        let converter: ISettleConverter<T>;
        if (cls == null) {
            isDetail = true;
            writer.bool(true);
        } else {
            isDetail = false;
            writer.bool(false);
            converter = GetConverter<T>(cls);
        }
        let validArr = Utils.GetValidArr(value, writer, (prop: IOperate<T>) => {
            if (prop != null && prop.value != null) {
                return true;
            } else {
                return false;
            }
        });
        //编码有效实体数据
        for (let i = 0; i < validArr.length; i++) {
            let prop = value[validArr[i]];
            if (isDetail) {
                let serial = GetSerial(prop);
                converter = GetConverter(serial);
                writer.int32(serial);
            }
            converter.toShell(writer, prop, cls);
        }
    }

    json(value: any, cls?: Function): string {
        let arr = [];
        for (let i = 0; i < value.length; i++) {
            arr.push(FieldJson(value[i], cls));
        }
        return JSON.stringify(arr);
    }

    jsonShell(value: any, cls?: Function): string {
        let arr = [];
        for (let i = 0; i < value.length; i++) {
            arr.push(FieldJsonShell(value[i], cls));
        }
        return JSON.stringify(arr);
    }
}
@Convert(Object)
class ObjectConverter extends BaseConverter<Object>{
    to(writer: Writer, value: Object, cls?: Function) {
        if (cls == null || cls == Object) {
            writer.string(JSON.stringify(value));
        } else {
            FieldTo(writer, value, cls);
        }
    }
    from(reader: Reader, cls?: Function) {
        if (cls == null || cls == Object) {
            return JSON.parse(reader.string());
        } else {
            return FieldFrom(reader, cls);
        }
    }
}
@Convert(Uint8Array)
class Uint8ArrayConverter extends BaseConverter<Uint8Array>{
    to(writer: Writer, value: Uint8Array) {
        writer.bytes(value);
    }
    from(reader: Reader) {
        return reader.bytes();
    }
}
/**布尔类型转换规则 */
@Convert(Boolean)
class BooleanConverter extends BaseConverter<boolean>{
    to(writer: Writer, value: boolean) {
        writer.bool(value);
    }
    from(reader: Reader) {
        return reader.bool();
    }
}
/**数字类型转换规则 */
@Convert(CustomNumber)
class CustomNumberConverter extends BaseConverter<CustomNumber>{
    to(writer: Writer, value: CustomNumber) {
        writer.double(value.value);
    }
    from(reader: Reader): CustomNumber {
        return new CustomNumber(reader.double());
    }
    parse(value: number | INumber) {
        return new CustomNumber(value);
    }
}
/**数字类型转换规则 */
@Convert(Number)
class NumberConverter extends BaseConverter<number>{
    to(writer: Writer, value: number) {
        writer.double(value);
    }
    from(reader: Reader): number {
        return reader.double();
    }
}
/**字符串类型转换规则 */
@Convert(String)
class StringConverter extends BaseConverter<string>{
    to(writer: Writer, value: string) {
        writer.string(value);
    }
    from(reader: Reader): string {
        return reader.string();
    }
}
/**长整数类型转换规则 */
@Convert(Long)
class LongConverter extends BaseConverter<Long>{
    to(writer: Writer, value: Long) {
        writer.int64(value);
    }
    from(reader: Reader): Long {
        return reader.int64();
    }
    parse(value: Long) {
        if (value == null) return null;
        return Long.fromValue(value);
    }
}
@Convert(Vector2)
class Vector2Convert extends BaseConverter<Vector2>{
    to(writer: Writer, value: Vector2) {
        writer.double(value.x);
        writer.double(value.y);
    }
    from(reader: Reader) {
        return new Vector2(reader.double(), reader.double());
    }
    parse(value: Vector2) {
        if (value == null) return null;
        return new Vector2(value);
    }
}
/**长整数类型转换规则 */
@Convert(NumberAttribute)
class NumberAttributeConverter extends SettleConverter<NumberAttribute>{
    parseShell(value: any, cls?: Function) {
        return super.parseShell(value, NumberAttribute);
    }
    fromShell(reader: cv.Reader, cls?: Function, index?: number, parent?: ISettler<any>): IOperate<NumberAttribute> {
        return super.fromShell(reader, NumberAttribute, index, parent);
    }
    toShell(writer: cv.Writer, value: IOperate<NumberAttribute>, cls?: Function) {
        super.toShell(writer, value, NumberAttribute);
    }
}
/**整数转换规则 */
@Convert(Integer)
class IntegerConvert extends CustomNumberConverter {
    to(writer: Writer, value: Integer) {
        writer.int32(value.value);
    }
    from(reader: Reader): Integer {
        return new Integer(reader.int32());
    }
    parse(v: Integer): Integer {
        return new Integer(v);
    }
}
/**整数转换规则 */
@Convert(Float)
class FloatConvert extends CustomNumberConverter {
    to(writer: Writer, value: Float) {
        writer.double(value.value);
    }
    from(reader: Reader): Float {
        return new Float(reader.double());
    }
    parse(v: Float): Float {
        return new Float(v);
    }
}
@Convert(StatusAttribute)
class StatusAttributeConvert extends BaseConverter<number> {
    to(writer: Writer, value: number) {
        writer.int32(value);
    }
    from(reader: Reader) {
        return reader.int32();
    }
    fromShell(reader: Reader, cls?: Function) {
        return super.fromShell(reader, StatusAttribute);
    }
    parseShell(value: number, cls?: Function) {
        return super.parseShell(value, StatusAttribute);
    }
}
@Convert(DataSettle)
class DataSettleConverter<T> extends BaseConverter<DataSettle<T>>{
    to(writer: cv.Writer, value: DataSettle<T>) {
        writer.int32(value.serial);
        writer.int32(value.index);
        this.settleTo(writer, value.data);
    }
    settleTo(writer: cv.Writer, data: PropData<T>) {
        if (data == null) return;
        //检查本节点是否存在数据
        if (data.cache != null && data.cache.length != 0) {
            writer.bool(true);
            //是否使用详细模式
            if (data.serial == null) {
                /**@see 这里应该获取结构体的编码规则 */
                writer.bool(true);
                let arr = Utils.GetValidArr(data.detail, writer);
                for (let i = 0; i < arr.length; i++) {
                    let prop = data.cache[arr[i]];
                    let serial = data.detail[arr[i]];
                    writer.int32(serial);
                    if (serial != -1) {
                        GetConverter<T>(serial).to(writer, prop);
                    }
                }
            } else {
                writer.bool(false);
                //编码转换规则索引
                writer.int32(data.serial);
                let converter = GetConverter<T>(data.serial);
                let arr = Utils.GetValidArr(data.cache, writer);
                for (let i = 0; i < arr.length; i++) {
                    let prop = data.cache[arr[i]];
                    converter.to(writer, prop);
                }
            }

        } else {
            writer.bool(false);
        }
        //检查子节点是否存在数据
        if (data.children != null && data.children.length != 0) {
            writer.bool(true);
            let arr = Utils.GetValidArr(data.children, writer);
            for (let i = 0; i < arr.length; i++) {
                let prop = data.children[arr[i]];
                this.settleTo(writer, prop);
            }
        } else {
            writer.bool(false);
        }
    }

    from(reader: cv.Reader) {
        let serial = reader.int32();
        let index = reader.int32();
        let data = this.settleFrom(reader);
        let settle = new DataSettle<T>(data, index, serial);
        return settle;
    }
    settleFrom(reader: cv.Reader): PropData<T> {
        let result: PropData<T>;
        let isCache = reader.bool();
        if (isCache) {
            //是否使用详细模式
            let isDetail = reader.bool();
            if (isDetail) {
                result = new PropData(null);
                result.cache = Utils.ParseValidArr(reader, (isExist: boolean, i: number) => {
                    if (isExist) {
                        let serial = reader.int32();
                        let ctor = GetCtor(serial);
                        result.detail[i] = serial;
                        if (serial != -1) {
                            return GetConverter(serial).from(reader, ctor);
                        } else {
                            return null;
                        }
                    }
                });
            } else {
                let serial = reader.int32();
                let ctor = GetCtor(serial);
                let converter = GetConverter(GetCtor(serial));
                result = new PropData(serial);
                //解码数据
                result.cache = Utils.ParseValidArr(reader, (isExist: boolean, i: number) => {
                    if (isExist) {
                        return converter.from(reader, ctor);
                    }
                });
            }
        } else {
            result = new PropData(null);
        }
        let isChildren = reader.bool();
        if (isChildren) {
            //解码数据
            result.children = Utils.ParseValidArr(reader, (isExist, i, arr) => {
                if (isExist) {
                    return this.settleFrom(reader);
                }
            });
        }
        return result;
    }
}
@Convert(EventSettle)
class EventSttleConverter<T> extends BaseConverter<EventSettle<T>>{
    to(writer: cv.Writer, value: EventSettle<T>) {
        writer.int32(value.serial);
        writer.int32(value.index);
        this.settleTo(writer, value.event);
    }
    settleTo(writer: cv.Writer, data: EventData<T>) {
        if (data == null) return;
        //检查本节点是否存在数据
        if (data.newValue != data.oldValue) {
            writer.bool(true);
            let converter = GetConverter<T>(data.serial);
            writer.int32(data.serial);
            if (data.newValue != null) {
                writer.bool(true);
                converter.to(writer, data.newValue);
            } else {
                writer.bool(false);
            }
            if (data.oldValue != null) {
                writer.bool(true);
                converter.to(writer, data.oldValue);
            } else {
                writer.bool(false);
            }
        } else {
            writer.bool(false);
        }
        //检查子节点是否存在数据
        if (data.children != null && data.children.length != 0) {
            writer.bool(true);
            let arr = Utils.GetValidArr(data.children, writer);
            for (let i = 0; i < arr.length; i++) {
                let prop = data.children[arr[i]];
                this.settleTo(writer, prop);
            }
        } else {
            writer.bool(false);
        }
    }
    from(reader: cv.Reader) {
        let serial = reader.int32();
        let index = reader.int32();
        let event = this.settleFrom(reader);
        let settle = new EventSettle<T>(event, index, serial);
        return settle;
    }
    settleFrom(reader: cv.Reader): EventData<T> {
        let result: EventData<T>;
        let isCache = reader.bool();
        if (isCache) {
            let serial = reader.int32();
            let cls = GetCtor(serial);
            let converter = GetConverter<T>(cls);
            result = new EventData(serial);
            if (reader.bool()) {
                result.newValue = converter.from(reader, cls);
            }
            if (reader.bool()) {
                result.oldValue = converter.from(reader, cls);
            }
        } else {
            result = new EventData(null);
        }

        let isChildren = reader.bool();
        if (isChildren) {
            //解码数据
            result.children = Utils.ParseValidArr(reader, (isExist, i, arr) => {
                if (isExist) {
                    return this.settleFrom(reader);
                }
            });
        }
        return result;
    }
}

@Convert(Token)
class TokenConverter extends BaseConverter<Token>{ }

@Convert(AccessToken)
class AccessTokenConverter extends BaseConverter<AccessToken>{ }