import { GetConverter } from "./ConvertDecorator";
import { IParent, IOperate } from "../interface/Interface";


export const CONST_SettleMap: Map<Function, new (value: any, index: number, parent: IParent<any>) => IOperate<any>> = new Map();
/**转换规则装饰器 */
export function Settle(cls: Function) {
    return function (target: new (value: any, index: number, parent: IParent<any>) => IOperate<any>) {
        //let converter = new target();
        CONST_SettleMap.set(cls, target);
    };
}
/**获取结算数据的构造函数 */
export function GetCtorOfSettler(cls: Function): new (value: any, index: number, parent: IParent<any>) => IOperate<any> {
    return CONST_SettleMap.get(cls);
}
export function GetSettler<T>(value: T, cls: Function, index?: number, parent?: IParent<T>): IOperate<T> {
    return GetConverter<T>(cls).settler(value, index, parent);
}

