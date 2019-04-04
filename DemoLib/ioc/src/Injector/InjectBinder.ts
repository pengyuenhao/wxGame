import { DecoratorConst } from "../Decorator/DecoratorConst";
import { IBinder, Binder } from "../Bind/Binder";
import { Injector } from "./Injector";
import { InjectBinding } from "./InjectBinding";
import { IConstructorName } from "../IocConst";
import { BindingConst } from "../Bind/BindConst";
import { Binding, IBinding } from "../Bind/Binding";

//全局注入数据绑定器
const ClassBinder = DecoratorConst.DECORATOR_CLASS_BINDER;

export interface IInjectBinder<T> extends IBinder<T> {
    getInjector(): Injector;
    getInstance(key, name): any;
    getBinding(key, name): InjectBinding;
    inject(target: object, userClass ? : any);
    bind(key: any): InjectBinding;
    /**
     * 解绑所有被标记了需要解绑的状态
     */
    unbindAllMark();
}
export class NInjectBinder implements IConstructorName {
    get constructorName() {
        return "IInjectBinder";
    }
}
export class InjectBinder<T> extends Binder<T> implements IInjectBinder<T> {
    //注入器
    private _injector: Injector;

    public init() {
        super.init();
        this._injector = new Injector();
        this._injector.binder = this;
        this._injector.injectClassBinder = ClassBinder;
    }
    public getInjector(): Injector {
        return this._injector;
    }
    //绑定状态映射字典
    public getInstance(key, name): any {
        //如果未设置别名则使用默认设置
        if (!name) name = BindingConst.NULL;
        //获取绑定状态
        let binding: InjectBinding = this.getBinding(Binding.checkAbstract(key), name) as InjectBinding;
        //尝试获取一个未绑定的键值对时抛出绑定失败异常
        if (binding == null) {
            throw new Error("InjectionBinder has no binding for:\n\tkey: " + key + "\nname: " + name);
        }
        //根据绑定状态从注入器中获取实例
        //console.info("[实例化]"+binding.key);
        let instance = this._injector.instantiate(binding, false);
        //console.info("[尝试注入]"+Binding.checkAbstract(binding.key));
        this._injector.tryInject(binding, instance);
        return instance;
    }
    /**
     * 调用注入者的注入方法对目标对象进行注入
     * @param target 目标对象
     * @param userClass 使用指定的原型
     */
    public inject(target: object, userClass ? : any) {
        this.getInjector().inject(target,userClass);
    }
    //重写获取绑定状态方法
    public getBinding(key, name): InjectBinding {
        return super.getBinding(key, name) as InjectBinding
    }
    //重写基类的绑定函数
    public bind(key: any): InjectBinding {
        return super.bind(key) as InjectBinding;
    }
    public getRawBinding(): IBinding {
        return new InjectBinding(this.resolver.bind(this));
    }
    public unbindAllMark() {
        let that = this;
        let unbinds = [];
        (this._bindings as Map < any, Map < any, InjectBinding >> ).forEach(dict => {
            dict.forEach(binding => {
                if (binding.isUnbind()) {
                    unbinds.push(binding);
                }
            })
        });
        //解除被标记的绑定
        unbinds.forEach(binding => {
            that.unbind(binding.key, binding.name);
        })
    }
}