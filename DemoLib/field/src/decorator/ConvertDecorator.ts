import { GetCtorOfSettler } from "./SettleDecorator";
import { GetCtor, GetSerial } from "./TypeDecorator";
import { ISettleConverter, ISettleStructure, IParent } from "../interface/Interface";


/**类对应的编码解码转换器字典 */
const CONST_ConvertMap: Map<Function, ISettleConverter<any>> = new Map();
/**编码解码转换器索引 */
//const CONST_ConvertList: ISettleConverter<any>[] = [];

/**转换规则装饰器 */
export function Convert(cls: new (...arg: any) => any) {
    return function <T>(target: new () => ISettleConverter<T>) {
        let converter = new target();
        converter.cls = cls;
        //延迟获取
        converter.getSerial = () => {
            return GetSerial(cls);
        }
        CONST_ConvertMap.set(cls, converter);
        converter.settler = (value: T, index?: number, parent?: IParent<T>) => {
            if (index == null) index = 0;
            let settler = GetCtorOfSettler(cls);
            //无法找到结算规则时使用默认规则
            if (!settler) settler = GetCtorOfSettler(Object);
            let shell = new settler(value, index, parent);
            //设置序号
            shell.serial = converter.getSerial();
            shell.cls = cls;
            shell.init();
            return shell;
        }
    };
}
/**获取规则转换器 */
export function GetConverter<T>(name: string): ISettleConverter<T>;
export function GetConverter<T>(cls: Function): ISettleConverter<T>;
export function GetConverter<T>(serial: number): ISettleConverter<T>;
export function GetConverter<T>(value: any): ISettleConverter<T> {
    let type = typeof value;
    switch (type) {
        case "number":
            return GetConverter(GetCtor(value));
        case "function":
            let prototype: Function = value;
            let converter: ISettleConverter<any>;
            let loop = 100;
            //查找原型类
            while (prototype != null && prototype != Object) {
                converter = CONST_ConvertMap.get(prototype);
                if (converter == null) {
                    prototype = (<any>prototype).__proto__;
                } else {
                    break;
                }
                //防止出现死循环
                if (loop-- <= 0) {
                    console.error("[无法找到转换规则]");
                    break;
                }
            }
            //如果无法找到对应的值则使用通用对象
            if (converter == null) {
                converter = CONST_ConvertMap.get(Object);
            }
            return converter;
        case "string":
            return GetConverter(GetCtor(value));
        default:
            console.error("[编码规则获取失败]");
            break;
    }
}

export function GetStructure<T>(name: string): ISettleStructure<T>;
export function GetStructure<T>(cls: Function): ISettleStructure<T>;
export function GetStructure<T>(serial: number): ISettleStructure<T>;
export function GetStructure<T>(value: any): ISettleStructure<T> {
    return GetConverter(value) as any;
}