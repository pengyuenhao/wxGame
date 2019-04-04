import { Prototype } from "../util/Prototype";

/**定义绑定常数 */
export module BindingConst {
    //定义空常量
    export const NULL = Symbol.for("NULL").toString();
}
/**
 * 存储装饰器获取的信息
 */
export class DecoratorClass<T> {
    //注入列表
    private _list: T[];
    public get list() {
        return this._list;
    }
    public set list(value: T[]) {
        this._list = value;
    }
}
/**
 * 绑定状态
 */
export interface IBinding {
    name: any;
    key: any;
    value: any;
    bind(k: any): IBinding;
    to(v: any): IBinding;
    toName(n: any): IBinding;
}
export class Binding implements IBinding {
    protected _key: any;
    protected _value: any;
    protected _name: any;
    protected _resolver: any;

    public get key() {
        return this._key;
    }
    public get value() {
        return this._value;
    }
    public get name() {
        return this._name;
    }

    constructor(resolver: any) {
        this._resolver = resolver;

        this._key = null;
        this._value = null;
        this._name = null;
    }

    /**
     * 绑定标志到键值，返回此时的绑定状态。
     * @param key 标志值，可以是需要执行的全局信号名称或枚举
     */
    bind(key): IBinding {
        this._key = Binding.checkAbstract(key);
        return this;
    }
    /**
     * 从正在绑定状态映射到实例，返回此时的绑定状态。
     * @param value 绑定映射的值
     */
    to(value): IBinding {
        this._value = value;
        if (this._resolver != null)
            this._resolver(this);
        return this;
    }

    /**
     * 实例的别名，用于区分不同的实例，返回此时的绑定状态。
     * @param name 实例的别名
     */
    toName(name): IBinding {
        this._name = name;
        if (this._resolver != null)
            this._resolver(this);
        return this;
    }
    //判断是否为构造函数
    public get isKeyConstructor(): boolean {
        return Binding.isConstructor(this._key);
    }
    //判断是否为构造函数
    public get isValueConstructor(): boolean {
        return Binding.isConstructor(this._value);
    }
    public static isConstructor(value: object): boolean {
        //如果不是一个函数则绝对不是构造函数
        if (typeof value !== "function") {
            return false;
        }
        //如果不能直接获取原型则不是构造函数
        if (!value.prototype) {
            return false;
        }
        return true;
    }
    public static checkAbstract(key) {
        //检查被绑定的对象是否为虚类
        let constructorName;
        let prototype = key.prototype;
        if (prototype !== null && prototype !== undefined && prototype.constructorName !== null && prototype.constructorName !== undefined) {
            constructorName = prototype.constructorName;
            //console.info("[转化虚拟类]"+ constructorName);
        } else {
            constructorName = key;
            //console.info("[非虚拟类]"+ constructorName.constructor.name);
        }
        return constructorName;
    }
}
export class Binder<T> implements IBinder<T> {
    //绑定状态映射字典
    protected _bindings: any;
    //绑定状态白名单
    //protected _bindingWhitelist : Array<object> ;
    constructor() {
        this.init();
    }
    /**
     * 初始化函数，通过重写该函数指定映射字典的实例
     */
    init() {
        //初始化绑定状态映射
        this._bindings = new Map<any, Map<any, IBinding>>();
    }
    /**
     * 解析器，将正在绑定中的状态信息解析，使之成为可存储的数据绑定到映射字典。
     * @param binding 绑定的状态
     */
    resolver(binding: IBinding) {
        let key = binding.key;
        this.resolveBinding(binding, key);
    }
    /**
     * 解析绑定状态
     * @param binding 绑定状态
     * @param key 键值
     */
    resolveBinding(binding: IBinding, key: any) {
        //检查绑定状态是否存在别名
        let bindingName = (binding.name == null) ? BindingConst.NULL : binding.name;
        let dict: Map<any, IBinding>;
        //检查绑定状态字典已经存在键值
        if ((this._bindings.has(key))) {
            //获取绑定映射
            dict = this._bindings.get(key);
            //检查绑定映射是否存在别名
            if (dict.has(bindingName)) {
                //获取已经存在的绑定映射
                let existingBinding = dict.get(bindingName);
                //检查合法性
                if (existingBinding != binding) {
                    //如果绑定值为空
                    if (!existingBinding.value) {
                        //移除无效的绑定别名
                        dict.delete(bindingName);
                    }
                }
            }
        } else {
            //创建绑定映射
            dict = new Map<any, IBinding>();
            //添加绑定映射
            this._bindings.set(key, dict);
        }

        //如果存在默认绑定状态并且等于当前绑定状态
        if (dict.has(BindingConst.NULL) && dict.get(BindingConst.NULL) === binding) {
            //删除默认绑定
            dict.delete(BindingConst.NULL);
        }

        //添加或覆盖绑定状态
        if (!dict.has(bindingName)) {
            dict.set(bindingName, binding);
        }
    }

    /**
     * 绑定信号容器
     * @param key 键值，可以是需要执行的全局信号名称或枚举
     */
    bind(key): IBinding {
        //创建一个绑定中状态
        let binding = this.getRawBinding();

        //绑定标志
        binding.bind(key);
        return binding;
    }
    /**
     * 解除绑定信号容器
     * @param key 键值，需要绑定的键值
     * @param name 别名，被绑定变量的别名
     */
    unbind(key, name) {
        let checkKey = Binding.checkAbstract(key);
        //如果绑定映射字典内包含键值
        if (this._bindings.has(checkKey)) {
            //直接获取键值映射的值
            let dict = this._bindings.get(checkKey);
            //检查是否存指定别名
            let bindingName;
            if (name) {
                bindingName = name;
            } else {
                bindingName = BindingConst.NULL;
            }
            if (dict.has(bindingName)) {
                dict.delete(bindingName);
            }
        }
    }
    /**
     * 生成默认的绑定状态
     */
    getRawBinding(): IBinding {
        return new Binding(this.resolver.bind(this));
    }
    /**
     * 根据键值和别名获取绑定器中的绑定状态
     * @param key 键值
     * @param name 别名
     */
    getBinding(key: any, name: any): IBinding {
        //查找是否存在键值
        if (this._bindings.has(key)) {
            let dict = this._bindings.get(key);
            //如果别名不存在则使用默认值
            if (!name) {
                name = BindingConst.NULL
            }
            //查找绑定状态是否存在别名
            if (dict.has(name)) {
                return dict.get(name);
            } else {
                return null;
            }
        }
    }
    /**
     * 获取绑定状态映射表，返回键值的所有绑定状态
     * @param key 被绑定的键值
     */
    getBindingMap(key: any): any {
        if (this._bindings.has(key)) {
            return this._bindings.get(key);
        }
    }
}
/**
 * 核心部件绑定器
 */
export interface IBinder<T> {
    bind<T>(key): IBinding;
    unbind<T>(key, name);
    //根据绑定器实例生成一个空的绑定状态
    getRawBinding(): IBinding;
    //获取绑定状态
    getBinding(key: any, name: any): IBinding;
    getBindingMap(key: any): Map<any, IBinding>;
    resolveBinding(binding: IBinding, key: any);
}
export class DecoratorBinding extends Binding {
    protected _property: any;
    public get property() {
        return this._property;
    }

    /**
     * 从正在绑定状态映射到属性，返回此时的绑定状态。
     * @param property 绑定映射的值
     */
    toProperty(property: any): DecoratorBinding {
        this._property = property;
        if (this._resolver != null)
            this._resolver(this);
        return this;
    }
    //重写绑定到值
    to(value: any): DecoratorBinding {
        return super.to(value) as DecoratorBinding;
    }
    //重写绑定别名
    toName(name: any): DecoratorBinding {
        return super.toName(name) as DecoratorBinding;
    }
}
/**装饰器绑定器 */
export class DecoratorBinder<T> extends Binder<T> {
    //重写绑定状态映射字典Map< 被注入的类名, Map< 属性名 ，Map< 属性别名 , 绑定状态>>>
    protected _bindings: Map<any, Map<any, Map<any, DecoratorBinding>>>;
    private _decoratorClassBufferMap: Map<any, DecoratorClass<T>>;

    //重写初始化函数
    init() {
        //初始化绑定状态映射
        this._bindings = new Map<any, Map<any, Map<any, DecoratorBinding>>>();
        //初始化缓存映射
        this._decoratorClassBufferMap = new Map<any, DecoratorClass<T>>();
    }
    //检查是否存在指定的键值
    public has(key): boolean {
        return this._bindings.has(key);
    }
    //获取需要注入的类型数据
    public get(target: new () => any): DecoratorClass<T> {
        //检查是否为实例
        if (!(target instanceof Object)) throw new Error("[原型必须是一个对象]" + target);
        //获取类的原型
        //let proto = target.__proto__;
        let ctor = target;
        //if(!proto)console.error("[注入的类应该存在原型]");
        //从缓存映射中获取对应的列表
        let injectClass: DecoratorClass<T> = this._decoratorClassBufferMap.get(ctor)
        //检查是否存在缓存
        if (!injectClass) {
            //获取继承列表
            let extendsList = Prototype.GetPrototypeList(ctor);
            //将自身添加进原型列表内
            extendsList.push(ctor);
            injectClass = new DecoratorClass();
            let list = [];
            let dict: Map<any, Map<any, DecoratorBinding>>;
            let that = this;
            let bindingMaps = [];
            for (let i = 0; i < extendsList.length; i++) {
                dict = that.getBindingMap(extendsList[i]);
                if (dict && dict.size > 0) {
                    dict.forEach(function (inside) {
                        bindingMaps.push(inside);
                    });
                }
            }
            let inside: Map<any, DecoratorBinding>;
            for (let i = 0; i < bindingMaps.length; i++) {
                inside = bindingMaps[i];
                if (inside && inside.size > 0) {
                    let values = inside.values();
                    for (let j = 0; j < inside.size; j++) {
                        let binding = values.next();
                        list.push(binding.value);
                    }
                }
            }
            injectClass.list = list;
            //添加缓存
            this._decoratorClassBufferMap.set(ctor, injectClass);
            //console.log("[添加缓存]");
        }
        return injectClass;
    }
    //重写绑定方法
    public bind(key: any): DecoratorBinding {
        return super.bind(key) as DecoratorBinding;
    }
    //重写获取绑定状态方法
    public getBinding(key, name): DecoratorBinding {
        return super.getBinding(key, name) as DecoratorBinding
    }
    //重写绑定获取方法
    public getRawBinding(): IBinding {
        return new DecoratorBinding(this.resolver.bind(this));
    }
    //重写解析器
    public resolver(binding: IBinding) {
        super.resolver(binding);
    }
    /**
     * 重写解析绑定状态
     * @param binding 绑定状态
     * @param key 键值
     */
    resolveBinding(binding: DecoratorBinding, key: any) {
        //绑定状态必须有属性名
        if (!binding.property) return;
        //检查绑定状态是否存在别名
        let bindingName = (binding.name == null) ? BindingConst.NULL : binding.name;
        let dict: Map<any, Map<any, DecoratorBinding>>;
        //检查绑定状态字典已经存在键值
        if ((this._bindings.has(key))) {
            //获取绑定映射
            dict = this._bindings.get(key);
            //检查绑定映射是否存在别名
            if (dict.has(bindingName)) {
                //获取内部映射
                let insideDict = dict.get(bindingName);
                //检查映射内是否存在属性名
                if (insideDict.has(binding.property)) {
                    let existingBinding = insideDict.get(binding.property);
                    //如果存在绑定状态
                    if (existingBinding) {
                        //检查存在对应状态绑定是否于当前相等
                        if (existingBinding != binding) {
                            //如果绑定值为空
                            if (!existingBinding.value) {
                                //移除无效的绑定别名
                                dict.delete(bindingName);
                            }
                        }
                    }
                }
            }
        } else {
            //创建绑定映射Map< 别名, Map< 属性名, 绑定状态 >
            dict = new Map<any, Map<any, DecoratorBinding>>();
            //添加绑定映射
            this._bindings.set(key, dict);
        }

        //如果存在默认绑定状态并且等于当前绑定状态
        if (dict.has(BindingConst.NULL)) {
            let insideDic = dict.get(BindingConst.NULL);
            if (insideDic.has(binding.property)) {
                let existingBinding = insideDic.get(binding.property);
                if (binding.property === binding) {
                    //删除默认绑定
                    insideDic.delete(BindingConst.NULL);
                }
            }

        }
        let insideDict;
        //添加或覆盖绑定状态
        if (!dict.has(bindingName)) {
            //创建内部映射
            insideDict = new Map<any, DecoratorBinding>();
            //映射绑定状态
            insideDict.set(binding.property, binding);
            //映射绑定
            dict.set(bindingName, insideDict);
        } else {
            //获取内部映射
            insideDict = dict.get(bindingName);
            //检查是否存在属性名映射
            if (!insideDict.has(binding.property)) {
                //映射绑定
                insideDict.set(binding.property, binding)
            }
        }
    }
    /**
     * 重写获取绑定状态映射表，返回键值的所有绑定状态
     * @param key 被绑定的键值
     */
    getBindingMap(key: any): Map<any, Map<any, DecoratorBinding>> {
        if (this._bindings.has(key)) {
            return this._bindings.get(key);
        }
    }
}