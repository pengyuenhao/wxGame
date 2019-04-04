import { Long } from "peng-converter";

/**
 * @tips 类型装饰器
 * @see 用于实现字符串创建对象的过程，类似于其他强类型语言里的Type功能
 * @see 目前仅仅实现字符串到对象的单向转换，也没有实现继承查找功能
 */
//类型转换字典
const CONST_TypeMap = new Map<string, new (...any: any[]) => any>();
/**编码解码转换器索引 */
export const CONST_CtorList: Array<new (...any: any[]) => any> = [];

/**类型装饰器，预设类的名称*/
export function Type(type: string): Function {
    return function (target: new () => any) {
        TypeFunc(type, target);
    };
}
function TypeFunc(type: string, target: new (...any: any[]) => any) {
    //设置类原型的构造函数类型名称，这样可以避免属性名称冲突
    (<any>target).type = type;
    CONST_TypeMap.set(type, target as new (...any: any[]) => any);
    (<any>target).serial = CONST_CtorList.length;
    CONST_CtorList.push(target);
}

export function Ctor(cls: Function): any;
export function Ctor(cls: new () => any): any;
/**构造函数，根据指定的名称构造对应的实例 */
export function Ctor(type: string): any;
export function Ctor(value: any) {
    if (value == null) return null;
    let ctor: new () => any;
    if (typeof value == "string") {
        ctor = CONST_TypeMap.get(value);
    } else {
        ctor = value;
    }
    if (!ctor) return null;
    return new ctor();
}
export function GetCtor(serial: number): new (...any: any[]) => any;
export function GetCtor(type: string): new (...any: any[]) => any;
export function GetCtor(value: any): new (...any: any[]) => any {
    switch (typeof value) {
        case "number":
            return CONST_CtorList[value];
        case "string":
            return CONST_TypeMap.get(value);
    }
}
export function GetSerial(value: Object): number;
export function GetSerial(cls: new (...any: any[]) => any): number;
export function GetSerial(value: any): number {
    switch (typeof value) {
        case "function":
            return (<any>value).serial;
        case "object":
            return GetSerial(value.constructor);
        case "string":
            return GetSerial(String);
        case "number":
            return GetSerial(Number);
        case "boolean":
            return GetSerial(Boolean);
        default:
            return GetSerial(value.constructor);
    }
}
export function GetSerialByValue(value:any){
    return GetSerial(GetCtorByValue(value));
}
export function GetType(serial: number): string;
/**获取类型名称 */
export function GetType(cls: new (...any: any[]) => any): string;
export function GetType(value: any) {
    switch (typeof value) {
        case "function":
            let type = (<any>value).type;

            if (type == null) {
                type = (<any>Object).type;
                if (value != Object) {
                    console.warn("[类型应该标记@Type]" + value.name + "[强制转换为]" + type);
                }
            }
            return type;
        case "number":
            return GetType(GetCtor(value));
    }
}
/**获取构造类型 */
export function GetCtorByValue(value: any): new () => any {
    let ctor: new () => any;
    switch (typeof value) {
        case "number": ctor = Number; break;
        case "string": ctor = String; break;
        case "boolean": ctor = Boolean; break;
        case "object": ctor = value.constructor; break;
        default: console.error("[未知的类型]");
    }
    return ctor;
}
/**获取类型名称 */
export function GetTypeByValue(value: any): string {
    return GetType(GetCtorByValue(value));
}

//初始化函数
const InitFunc = function () {
    TypeFunc("Object", Object);
    TypeFunc("Uint8Array", Uint8Array);
    TypeFunc("Number", Number);
    TypeFunc("String", String);
    TypeFunc("Boolean", Boolean);
    TypeFunc("Long", Long);
    TypeFunc("Array", Array);
    TypeFunc("Map", Map);
}();