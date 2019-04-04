import { Writer, Reader } from "peng-converter";
import { GetConverter } from "./ConvertDecorator";
import { Utils } from "../util/Util";
import { Ctor, GetCtorByValue, GetCtor, GetSerial } from "./TypeDecorator";
import { GetSettler } from "./SettleDecorator";
import { RootObject, RootSettler } from "../define/ObjectDefine";
import { IParent, IOperate, IValue } from "../interface/Interface";
import { DelayConverter, FieldBinding, FieldBinder } from "../binder/FieldBinder";
import { NullException } from "../util/Exception";

/**
 * @tips 编码装饰器
 * @see 1.任何标记了Field的属性都可以直接从json格式直接转换为对象格式
 * @see 2.使用enFieldr编码为UInt8Arry格式,使用deFieldr解码为对象格式
 * @see 3.运算时由于异步问题,必然存在不一致性,这里应该使用一个统一结算的系统
 */

/**静态Field注入绑定者*/
export const CONST_FieldBinder = new FieldBinder();
/**获取字段结构列表 */
export function GetFieldList(cls: Function) {
    return CONST_FieldBinder.get(cls).list;
}
/**编码装饰器，预制属性的类型 */
export function Field(type: Function, identifyName: string, structure: Function = null): Function {
    return function (target: Object, propertName: string) {
        /**@see 注意，混淆压缩的时候，构造函数的名称会被压缩 */
        FieldFunc(target, type, propertName, identifyName, structure);
    }
}
/**静态数据解析方法 */
export function FieldParseShell(value: any, cls?: Function, index?: number, parent?: IParent<any>): IOperate<any> {
    if (cls == null) {
        //采用特殊标记获取对象的类型值
        let type = value["@type"];
        //尝试获取转换器
        cls = GetCtor(type);
    }
    let inst;
    //没有值时返回空结算器
    if (!value) {
        inst = null;
    } else {
        inst = Ctor(cls);
    }
    //获取操作外壳
    let settler = GetSettler(inst, cls, index, parent);
    //遍历属性列表解析属性值
    let list = GetFieldList(cls);
    for (let i = 0; i < list.length; i++) {
        let binding = list[i];
        //无论属性是否为空都会创建操作外壳
        let prop = value[binding.identity];
        let next: IValue<any>;
        //使用属性指定的编码规则
        if (binding.structure.delay) {
            next = binding.structure.delay.parseShell(prop, binding.value.origin);
        } else {
            next = binding.value.delay.parseShell(prop, binding.value.origin);
        }
        //标记属性在对象中的位置索引
        //next.converter = binding.value.index;
        next.parent = settler;
        next.index = i;
        inst[binding.property] = next;
    }
    return settler;
}
export function FieldParse(value: any, cls?: Function) {
    if (value == null) return null;
    if (cls == null) {
        //采用标记获取对象的类型
        let type = value["@type"];
        //尝试获取转换器
        cls = GetCtor(type);
    }
    if (value == null) return null;
    let inst = Ctor(cls);
    if (!inst) return null;
    //遍历属性列表解析属性值
    let list = GetFieldList(cls);
    for (let i = 0; i < list.length; i++) {
        let binding = list[i];
        let prop = value[binding.identity];
        let next: any;
        if (binding.structure.delay) {
            next = binding.structure.delay.parse(prop)
        } else {
            next = binding.value.delay.parse(prop);
        }
        inst[binding.property] = next;
    }
    return inst;
}
export function FieldJson(value: any, cls?: Function) {
    if (value == null) return null;
    if (cls == null) {
        //尝试获取转换器
        cls = GetCtorByValue(value);
    }
    let inst = {};
    if (!inst) return null;
    //遍历属性列表解析属性值
    let list = GetFieldList(cls);
    for (let i = 0; i < list.length; i++) {
        let binding = list[i];
        let prop = value[binding.identity];
        let next: any;
        if (binding.structure.delay) {
            next = binding.structure.delay.json(prop)
        } else {
            next = binding.value.delay.json(prop);
        }
        inst[binding.property] = next;
    }
    return JSON.stringify(inst);
}
export function FieldJsonShell(value: IValue<any>, cls?: Function) {
    if (value == null || value.value == null) return null;
    if (cls == null) {
        //尝试获取转换器
        cls = GetCtorByValue(value.value);
    }
    if (value == null) return null;
    let inst = {};
    if (!inst) return null;
    //遍历属性列表解析属性值
    let list = GetFieldList(cls);
    for (let i = 0; i < list.length; i++) {
        let binding = list[i];
        let prop = value.value[binding.identity];
        let next: any;
        if (binding.structure.delay) {
            next = binding.structure.delay.jsonShell(prop)
        } else {
            next = binding.value.delay.jsonShell(prop);
        }
        inst[binding.property] = next;
    }
    return JSON.stringify(inst);
}
/**静态对象转换为数据并封装的方法 */
export function FieldToShell(writer: cv.Writer, settle: IOperate<Object>, cls?: Function) {
    if (settle == null || settle.value == null) throw NullException;
    if (cls == null) {
        cls = GetCtorByValue(settle.value);
    }
    let list = GetFieldList(cls);
    let validArr = Utils.GetValidArr(list, writer, (binding: FieldBinding) => {
        let prop = settle.value[binding.property];
        if (prop != null) {
            //是否为结构类型
            if (binding.structure.delay != null) {
                return true;
            } else {
                if (prop.value != null) {
                    return true;
                } else {
                    return false;
                }
            }
        } else {
            return false;
        }
    });
    //编码有效实体数据
    for (let i = 0; i < validArr.length; i++) {
        let binding = list[validArr[i]];
        //跳过类型属性
        let prop = settle.value[binding.property];

        if (binding.structure.delay) {
            binding.structure.delay.toShell(writer, prop, binding.value.origin);
        } else {
            binding.value.delay.toShell(writer, prop);
        }
    }
}
/**静态对象转换为数据方法 */
export function FieldTo(writer: cv.Writer, value: Object, cls?: Function) {
    if (value == null) throw NullException;
    if (cls == null) {
        cls = GetCtorByValue(value);
    }
    let list = GetFieldList(cls);
    let validArr = Utils.GetValidArr(list, writer, (binding: FieldBinding) => {
        if (value[binding.property] != null) {
            return true;
        } else {
            return false;
        }
    });
    //编码有效实体数据
    for (let i = 0; i < validArr.length; i++) {
        let binding = list[validArr[i]];
        //跳过类型属性
        let prop = value[binding.property]
        if (binding.structure.delay) {
            binding.structure.delay.to(writer, prop);
        } else {
            binding.value.delay.to(writer, prop);
        }
    }
}
/**静态数据转换为对象并且封装的方法 */
export function FieldFromShell(reader: cv.Reader, cls?: Function, index?: number, parent?: IParent<any>): IOperate<any> {
    if (cls == null) {
        cls = GetCtor(reader.int32());
    }
    let settler = GetSettler(Ctor(cls), cls, index, parent);
    let list = GetFieldList(cls);
    //构造结算操作外壳
    Utils.ParseValidArr(reader, (isExist, i) => {
        let binding = list[i];
        let next: IParent<any>;
        if (isExist) {
            if (binding.structure.delay) {
                next = binding.structure.delay.fromShell(reader, binding.value.origin);
            } else {
                next = binding.value.delay.fromShell(reader, binding.value.origin);
            }
        } else {
            if (binding.structure.delay) {
                next = binding.structure.delay.settler(null)
            } else {
                next = binding.value.delay.settler(null);
            }
        }
        //标记属性在对象中的位置索引
        if (next != null) {
            next.parent = settler;
            next.index = i;
        }
        settler.value[binding.property] = next;
    });
    return settler;
}
/**静态数据转换为对象方法 */
export function FieldFrom(reader: cv.Reader, cls?: Function): any {
    if (cls == null) {
        //采用序号获取对象的类型
        let serial = reader.int32();
        //尝试获取转换器
        cls = GetCtor(serial);
    }
    let inst = Ctor(cls);
    if (!inst) throw Error("[未注册@Type的类必须重写编码规则函数]");
    //获取操作外壳
    let list = GetFieldList(cls);
    Utils.ParseValidArr(reader, (isExist, i) => {
        let binding = list[i];
        if (binding == null) debugger;
        let next: any;
        if (isExist) {
            if (binding.structure.delay) {
                next = binding.structure.delay.from(reader, binding.value.origin);
            } else {
                next = binding.value.delay.from(reader, binding.value.origin);
            }
        } else {
            next = null;
        }
        inst[binding.property] = next;
    });
    return inst;
}

/**静态编码函数 */
export function To(value: any, writer?: cv.Writer): Uint8Array {
    if (value == null) return null;
    if (writer == null) writer = new Writer();
    let cls = GetCtorByValue(value);
    //编码数据类型
    writer.int32(GetSerial(cls));
    let converter = GetConverter(cls);
    //如果有编码器则使用编码器
    if (converter) {
        //使用获取的编码规则
        converter.to(writer, value);
    } else {
        console.error("[未知的编码规则]");
        return null;
    }
    return writer.finish();
}
export function ToShell(value: RootSettler<any>, writer?: cv.Writer): Uint8Array {
    if (value == null) return null;
    if (writer == null) writer = new Writer();
    let cls = GetCtorByValue(value.value);
    //编码数据类型
    writer.int32(GetSerial(cls));
    //获取编码规则
    let converter = GetConverter(cls);
    //如果有编码器则使用编码器
    if (converter) {
        //使用获取的编码规则
        converter.toShell(writer, value, cls);
    } else {
        console.error("[未知的编码规则]");
        return null;
    }
    return writer.finish();
}
/**静态解码函数 */
export function From<T>(data: Uint8Array, reader?: cv.Reader): T {
    if (data == null || data.length == 0) return null;
    if (reader == null) reader = new Reader(data);
    //解码数据类型
    let serial = reader.int32();
    let ctor = GetCtor(serial);
    let converter = GetConverter<T>(ctor);
    if (converter != null) {
        return converter.from(reader, ctor);
    } else {
        console.error("[无法解码未知的类型]");
        return null;
    }

}
export function FromShell<T extends RootObject<T>>(data: Uint8Array, reader?: cv.Reader): RootSettler<T> {
    if (data == null || data.length == 0) return null;
    if (reader == null) reader = new Reader(data);
    //解码数据类型
    let serial = reader.int32();
    let ctor = GetCtor(serial);
    let converter = GetConverter(ctor);
    if (converter != null) {
        return converter.fromShell(reader, ctor) as RootSettler<T>;
    } else {
        console.error("[无法解码未知的类型]");
        return null;
    }
}
/**静态JSON转换方法*/
export function Parse<T>(value: any): T {
    let type = value["@type"];
    let ctor = GetCtor(type);
    let converter = GetConverter<T>(ctor);
    if (converter != null) {
        return converter.parse(value, ctor);
    } else {
        console.error("[无法解码未知的类型]");
        return null;
    }
}
/**静态JSON转换方法*/
export function ParseShell<T extends RootObject<T>>(value: any): RootSettler<T> {
    let type = value["@type"];
    let ctor = GetCtor(type);
    let converter = GetConverter(ctor);
    if (converter != null) {
        return converter.parseShell(value, ctor) as RootSettler<T>;
    } else {
        console.error("[无法解码未知的类型]");
        return null;
    }
}
/**静态字符串转换方法*/
export function Json(value: any): string {
    if (value == null) return null;
    let cls = GetCtorByValue(value);
    let converter = GetConverter(cls);
    //如果有编码器则使用编码器
    if (converter) {
        //使用获取的编码规则
        return converter.json(value);
    } else {
        console.error("[未知的编码规则]");
        return null;
    }
}
export function JsonShell(value: RootSettler<any>): string {
    if (value == null || value.value == null) return null;
    let cls = GetCtorByValue(value.value);
    let converter = GetConverter(cls);
    //如果有编码器则使用编码器
    if (converter) {
        //使用获取的编码规则
        return converter.jsonShell(value);
    } else {
        console.error("[未知的编码规则]");
        return null;
    }
}

/**
 * @param target 被注入的目标类
 * @param constructor 注入的类
 * @param property 注入的类的属性名
 * @param name 注入的类的别名
 */
function FieldFunc(target: Object, cls: Function, propertName: string, identifyName: string, structure: Function) {
    //所有实现了IConstructorName的类都属于虚类，这里获取虚类对应的接口名作为键值传递给绑定器
    //因为压缩代码会把所有对象的名称都压缩掉，所以这里使用构造函数作为键值
    CONST_FieldBinder
        .bind(target.constructor)
        .to(new DelayConverter(cls))
        .toStructure(new DelayConverter(structure))
        .toProperty(propertName)
        .toIdentify(identifyName)
}
