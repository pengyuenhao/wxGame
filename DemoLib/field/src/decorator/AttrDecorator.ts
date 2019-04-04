import { NumberAttribute } from "../base/NumberBase";
import { GetSettler } from "./SettleDecorator";
import { RootSettler } from "../define/ObjectDefine";
import { DecoratorBinder, DecoratorBinding } from "../binder/DecoratorBinder";
import { IOperate, IOperateArray } from "../interface/Interface";
import { DefineProperty } from "../util/Define";
/**
 * @tips 属性装饰器
 * @see 通过Attr标记属性为只读的复合属性值，直接获取属性值将会得到经过计算的只读结果值
 * @see 复合属性值通过多个数据复合计算得到结果，通常用于一些可以被强化或者经常变化的值
 */

/**静态Attr注入绑定者*/
export const CONST_AttrBinder = new DecoratorBinder<DecoratorBinding>();
/**全局定点数属性值数据，该数据依赖主体的Attr数组中的数据值，任何位置都可以进行全局修改 */
export function Attr(identifyName: string): Function {
    return function (target: Function, propertName: string) {
        /**@see 注意，混淆压缩的时候，构造函数的名称会被压缩 */
        //所有实现了IConstructorName的类都属于虚类，这里获取虚类对应的接口名作为键值传递给绑定器
        //因为压缩代码会把所有对象的名称都压缩掉，所以这里使用构造函数作为键值
        CONST_AttrBinder.bind(target.constructor).to(identifyName).toProperty(propertName);
    }
}
/**
 * 属性注入,自动绑定计算的结果
 * @example{
 *  result = fixed + 0.01*(100+percent)*(base+addition)
 * }
*/
export function AttrInject(inst: RootSettler<any>, target?: IOperate<any>) {
    if (!inst) return;
    if (!target) target = inst;
    let attributes: IOperateArray<NumberAttribute> = inst.value.attributes;
    if (!attributes) return;
    let decoratorClass = CONST_AttrBinder.get(target.value.constructor);
    //防止重复执行
    if (!attributes.hasOwnProperty("__isInit__")) {
        //添加初始化标记
        Object.defineProperty(attributes, "__isInit__", { get: function (): boolean { return true; } });
        //映射属性名称到属性数组
        for (let i = 0; i < attributes.length; i++) {
            let prop = attributes[i].value;
            if (prop == null) continue;
            let name = prop.name.value;
            //防止重复添加原型方法
            if (attributes.hasOwnProperty(name)) continue;
            DefineProperty(attributes, name, NumberAttribute, i);
        }
    }
    for (let binding of decoratorClass.list) {
        Object.defineProperty(target.value, binding.property, {
            get: function (): NumberAttribute {
                let prop = attributes[binding.value];
                if (prop == null) {
                    DefineProperty(attributes, binding.value, NumberAttribute);
                    return null;
                } else {
                    return prop.value;
                }
            },
            set: function (value: NumberAttribute) {
                let prop = attributes[binding.value];
                if (prop == null) {
                    DefineProperty(attributes, binding.value, NumberAttribute);
                    prop = attributes[binding.value];
                }
                //提示操作存在错误，属性的名称应该一致
                if (value.name != null && value.name.value != null && value.name.value != binding.property) {
                    console.warn("[警告属性名称不一致]" + value.name.value + "!=" + binding.property);
                }
                //强制保持名称一致
                if(value.name ==null){
                    value.name = GetSettler(binding.property,String);
                }else{
                    value.name.value = binding.property;
                }
                prop.eq(value);
            }
        })
    }
}