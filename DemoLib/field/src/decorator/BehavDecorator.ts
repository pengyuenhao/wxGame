import { StatusInject } from "./StatusDecorator";
import { AttrInject } from "./AttrDecorator";
import { BehaviorAttribute, IBehavior } from "../base/BehaviorBase";
import { GetTypeByValue, GetType } from "./TypeDecorator";
import { RootSettler } from "../define/ObjectDefine";
import { DecoratorBinder, DecoratorBinding } from "../binder/DecoratorBinder";
import { Delay } from "../util/Delay";
import { IOperate, IOperateArray } from "../interface/Interface";
import { DefineProperty } from "../util/Define";


/**静态Attr注入绑定者*/
export const CONST_behaviorBinder = new DecoratorBinder<DecoratorBinding>();
export function Behav(cls: Function): Function;
/**根据指定的资源名称注入对象 */
export function Behav(identifyName: string): Function;
export function Behav(value: any): Function {
    return function (target: Function, propertName: string) {
        /**@see 注意，混淆压缩的时候，构造函数的名称会被压缩 */
        //所有实现了IConstructorName的类都属于虚类，这里获取虚类对应的接口名作为键值传递给绑定器
        //因为压缩代码会把所有对象的名称都压缩掉，所以这里使用构造函数作为键值
        CONST_behaviorBinder.bind(target.constructor).to(new DelayString(value)).toProperty(propertName);
    };
}

export function BehaviorInject(inst: RootSettler<any>, target?: IOperate<any>, isInit = true) {
    if (!inst) return;
    if (!target) target = inst;
    let behaviors: IOperateArray<IBehavior<any>> = inst.value.behaviors;
    if (!behaviors) return;
    //防止重复执行
    if (!behaviors.hasOwnProperty("__isInit__")) {
        //添加初始化标记
        Object.defineProperty(behaviors, "__isInit__", { get: function (): boolean { return true; } });
        //映射属性名称到属性数组
        for (let i = 0; i < behaviors.length; i++) {
            let behavior: IOperate<IBehavior<any>> = behaviors[i];
            if (behavior == null) continue;
            let type = GetTypeByValue(behavior.value);
            //技能类别
            let name = behavior.value.class.value;
            //如果无法找到技能类别则默认使用类型名称
            if (name == null) {
                name = type;
                behavior.value.class.value = type;
            }
            //防止重复添加原型方法
            if (name == null || behaviors.hasOwnProperty(name)) continue;
            DefineProperty(behaviors, name, BehaviorAttribute, i);
        }
        for (let i = 0; i < behaviors.length; i++) {
            let behavior: IOperate<IBehavior<any>> = behaviors[i];
            //跳过无效值
            if (behavior == null) continue;
            behavior.value.root = inst;
            StatusInject(inst, behavior);
            AttrInject(inst, behavior);
            BehaviorInject(inst, behavior, false);
        }
        //这里执行初始化注入
        for (let i = 0; i < behaviors.length; i++) {
            let behavior: IOperate<IBehavior<any>> = behaviors[i];
            //跳过无效值
            if (behavior == null) continue;
            InitInject(behaviors, behavior);
        }
    } else {
        if (isInit) {
            InitInject(behaviors, target);
        }
    }
}
function InitInject(inst: IOperateArray<IBehavior<any>>, target: IOperate<any>) {
    if (!target.value.hasOwnProperty("__isInit__")) {
        //添加初始化标记
        Object.defineProperty(target.value, "__isInit__", { get: function (): boolean { return true; } });
        //注入@behavior标记的属性
        let decoratorClass = CONST_behaviorBinder.get(target.value.constructor);
        for (let binding of decoratorClass.list) {
            //从注入点处获得的是壳内的数据
            Object.defineProperty(target.value, binding.property, {
                get: function (): IBehavior<any> {
                    let prop = inst[binding.value.delay];
                    if (prop == null) {
                        DefineProperty(inst, binding.value.delay, BehaviorAttribute);
                        return null;
                    } else {
                        return prop.value;
                    }
                },
                set: function (value: IBehavior<any>) {
                    let prop = inst[binding.value.delay];
                    if (prop == null) {
                        DefineProperty(inst, binding.value.delay, BehaviorAttribute);
                        prop = inst[binding.value];
                    }
                    prop.eq(value);
                }
            })
        }
        if (target.value.isInit.value == null) {
            target.value.isInit.value = true;
            target.value.init();
        }
        target.value.enable();
    }
}

//无法确保执行顺序所以这里使用延迟获取构造函数名称
class DelayString extends Delay<string>{
    public get() {
        if (typeof this.arg == "function") {
            return GetType(this.arg);
        } else {
            return this.arg;
        }
    }
}