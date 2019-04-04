export = ioc;
export as namespace ioc;

declare namespace ioc {
    class NSignalManager implements IConstructorName {
        readonly constructorName: string;
    }
    class NInjectBinder implements IConstructorName {
        readonly constructorName: string;
    }    
    class NCommandBinder implements IConstructorName {
        readonly constructorName: string;
    }
    class NRoot implements IConstructorName {
        readonly constructorName: string;
    }
    /**类名称，代替JS内不存在的Type.name */
    abstract class IConstructorName {
        abstract readonly constructorName: string;
    }
    /**定义绑定常数 */
    module BindingConst {
        //定义空常量
        const NULL;
    }
    /**
     * 通用枚举类型
    */
    enum CommonEnum{
        Context = "Context",
        Root = "Root",
    }
    interface IRoot{
        context: IContext;
    }
    /**
     * 信号管理类接口
     */
    interface ISignalManager {
        /**
         * 发布信号，等待相应
         */
        get < T > (symbol): ISignal < T > ;
        /**
         * 删除信号，解除信号上所有的绑定
         */
        delete(symbol);
        /**
         * 完成信号发布回调
         * @param symbol 
         */
        finish(symbol);
        info: string;
    }
    /**信号类接口 */
    interface ISignal < T > {
        /**标记 */
        symbol;
        /**同步发布,同步返回结果*/
        dispatch (...args): T[];
        /**发布信号，但仅返回最后一个返回值 */
        dispatchSole(...args):T;
        /**异步发布,异步返回结果 */
        dispatchAsync (...args): Promise < any[] > ;
        /**添加监听*/
        addListener(callback: (result: T[]) => void);
        addOnceListener (callback: (result: T[]) => void);
        removeAllListeners();
    }

    interface IRoot {
        context: IContext;
    }

    interface IContext {
        getIns(key,name?):any;
        start(): IContext;
        restart(): IContext;
        //启动
        launch();
        /// Get the ContextView
        getRoot(): any;
        // Register a new context to this one
        addCrossContext(context: IContext): IContext;
        removeCrossContext(context: IContext);
        //共用绑定器
        crossContextBinder: IInjectBinder;
    }
    interface IInjectBinder extends IBinder<InjectBinding> {
        inject(target,userClass?);
        injector(): Injector;
        getInstance(key, name): any;
        getBinding(key, name): InjectBinding;
        bind(key: any): InjectBinding;
        /**
         * 解绑所有被标记了需要解绑的状态
         */
        unbindAllMark();
    }

    interface ICommandBinder extends IBinder<CommandBinding> {
        bind(key: any): CommandBinding;
        getRawBinding(): CommandBinding;
    }

    interface IBinder<T extends IBinding<T>> {
        bind(key): T;
        unbind(key, name?);
        //根据绑定器实例生成一个空的绑定状态
        getRawBinding(): T;
        //获取绑定状态
        getBinding(key: any, name?: any): T;
        getBindingMap(key: any): Map < any, T > ;
        resolveBinding(binding: T, key: any);
    }
    interface IBinding<T> {
        name: any;
        key: any;
        value: any;
        bind(k: any): T;
        to(v: any): T;
        toName(n: any): T;
    }
    interface ICommandBinder extends IBinder<CommandBinding> {
        bind(key: any): CommandBinding;
        getRawBinding(): CommandBinding;
    }
    interface ICommand {
        commandBinder: ICommandBinder;
        injectBinder: IInjectBinder;
        //执行指令
        execute(...args) : void | Promise<any>;
        //本条指令的操作ID，用于在队列中寻找下一条指令
        sequenceId: number;
        data: any;
        args: any;
        deploy();
        clean();
        isClean: boolean;
        isRetain: boolean;
        //执行异步操作时可以使用保留指令
        retain();
        //释放被异步操作锁定的指令
        release();
    }

    function inject < T > (str: string): Function;

    function inject < T > (c: new() => T): Function;

    function inject < T > (c: new() => T, name: any): Function;

    function inject < T > (str: string, name: any): Function;
    /**
     * 注入装饰器
     * @param str 
     */
    function inject < T > (): any;

    class CommandBinding extends Binding<CommandBinding> {
        //是否在执行序列中
        protected _isSequence: boolean;
        //是否仅执行一次
        protected _isOnce: boolean;
        //是否在对象池中
        public isPooled: boolean

        readonly isSequence: boolean;
        readonly isOnce: boolean;
        to(value): CommandBinding;
        toName(name): CommandBinding;
        /**
         * 是否进入池
         */
        Pooled();
    }
    class Context implements IContext {
        //第一个被创建出来的环境容器
        public static firstContext: IContext;
        //注入绑定器
        readonly injectBinder: InjectBinder;
        //这里使用注入绑定器代替全局绑定器
        crossContextBinder;
        //指令绑定器
        readonly commandBinder: CommandBinder;
        //根节点
        root: IRoot;
        //获取根节点
        getRoot();
        getIns(key,name?):any;
        constructor(root: any);
        //添加全局环境容器
        addCrossContext(context: IContext): IContext;
        //移除全局环境容器
        removeCrossContext(childContext: IContext);

        setRoot(root: any): IContext;
        restart(): IContext;
        public start(): IContext;
        //启动容器
        launch();
        /**
         * 初始化核心组件
         */
        protected instantiateCore();
        protected mapBindings();
        protected postBindings();
        protected addCore();
    }
    class CommandBinder extends Binder<CommandBinding> implements ICommandBinder {
        //注入绑定器
        @inject(NInjectBinder)
        public injectBinder: IInjectBinder;

        //是否使用池
        public usePooling: boolean;

        public resolver(binding: CommandBinding);
        //绑定状态映射字典
        //getRawBinding(): T;
        //bind(key: any): T;
        //调用指令
        protected invokeCommand(cmd: Object, binding: CommandBinding, args, depth: number): ICommand;
        //
        protected createCommand(cmd: Object, data: Object): ICommand;
        //获取指令实例
        protected getCommand(type: Object): ICommand;
        protected trackCommand(command: ICommand, binding: CommandBinding);
        //执行指令
        protected executeCommand(command: ICommand, args);
        /**
         * 信号调用回掉函数
         * @param trigger 触发的信号
         * @param data 数据
         */
        onDispose(trigger: Object, ...args);
        //下一次即将执行的指令
        protected next(binding: CommandBinding, args, depth: number);
        //EventCommandBinder (and perhaps other sub-classes) use this method to dispose of the data in sequenced commands
        protected disposeOfSequencedData(data: Object);
        //释放指令，使其进入池
        releaseCommand(command: ICommand);
    }
    class SignalCommandBinder extends CommandBinder {
        //启用池
        public usePooling: boolean;
        //重写解析绑定状态函数
        resolveBinding(binding: CommandBinding, key: any);
        //重写绑定方法
        bind<C extends ISignal<any>|(new()=>ISignal<any>)>(key: C): CommandBinding;
        //重写获取绑定状态方法
        getBinding(key: any, name?: any): CommandBinding;
        //protected invokeCommand(cmd, binding: T, args, depth: number): ICommand;
        // Create a Command and bind its injectable parameters to the Signal types
        protected createCommandForSignal(cmd, args): ICommand;
    }

    class Signal < T > implements ISignal < T > {
        public symbol;
        public dispatch(...args): any[];
        public dispatchSole(...args):T;
        public dispatchAsync(...args): Promise < any[] >;
        public addListener(callback: Function) ;
        public addOnceListener(callback: Function);
        //清空监听
        public removeAllListeners();
    }
    /** 默认的信号管理器会维护一个信号指令映射表，注意不再使用的信号应该及时释放掉*/
    class SignalManager implements ISignalManager {
        info: string;

        public get <T> (symbol): ISignal <T>;
        public finish(symbol);
        public delete(symbol);
    }

    class Command implements ICommand {
        // The InjectionBinder for this Context
        @inject(NInjectBinder)
        public injectBinder: IInjectBinder;
        // Back reference to the CommandBinder that instantiated this Commmand
        @inject(NCommandBinder)
        commandBinder: ICommandBinder;

        sequenceId;
        data;
        args;
        //部署
        deploy();
        //清理
        clean();
        readonly isClean;
        //保持指令
        retain();
        //发布
        release();
        readonly isRetain: boolean;
        //重新释放
        restore();
        //执行指令
        execute(...args);
    }

    class Binder<T extends IBinding<T>> implements IBinder<IBinding<T>> {
        //绑定状态映射字典
        protected _bindings: any;
        //绑定状态白名单
        //protected _bindingWhitelist : Array<Object> ;
        constructor();
        /**
         * 初始化函数，通过重写该函数指定映射字典的实例
         */
        init();
        /**
         * 解析器，将正在绑定中的状态信息解析，使之成为可存储的数据绑定到映射字典。
         * @param binding 绑定的状态
         */
        resolver(binding: T);
        /**
         * 解析绑定状态
         * @param binding 绑定状态
         * @param key 键值
         */
        resolveBinding(binding: T, key: any);

        /**
         * 绑定信号容器
         * @param key 键值，可以是需要执行的全局信号名称或枚举
         */
        bind(key): T;
        /**
         * 解除绑定信号容器
         * @param key 键值，需要绑定的键值
         * @param name 别名，被绑定变量的别名
         */
        unbind(key, name?);
        /**
         * 生成默认的绑定状态
         */
        getRawBinding(): T;
        /**
         * 根据键值和别名获取绑定器中的绑定状态
         * @param key 键值
         * @param name 别名
         */
        getBinding(key: any, name?: any): T;
        /**
         * 获取绑定状态映射表，返回键值的所有绑定状态
         * @param key 被绑定的键值
         */
        getBindingMap(key: any): any;
    }

    class InjectBinder extends Binder<InjectBinding> implements IInjectBinder {
        //注入器
        constructor();
        public injector(): Injector;
        public inject(target);
        //绑定状态映射字典
        public getInstance(key, name?): any;
        //重写获取绑定状态方法
        public getBinding(key, name?): InjectBinding;
        //重写基类的绑定函数
        public bind(key: any): InjectBinding;
        public getRawBinding(): InjectBinding;
        public unbindAllMark();
    }

    class InjectFactory {
        /**
         * 根据绑定状态和指定的参数创建或获取实例对象
         * @param binding 绑定状态
         * @param args 参数
         */
        public get(binding: InjectBinding, args: any[]): Object;
        // 生成一个新的实例
        protected instanceOf(binding: InjectBinding, args: any[]): any;
        // Call the Activator to attempt instantiation the given Object
        protected createFromValue(c: new(...args) => any, args: any[]): any;
        protected generateImplicit(key: any, args: any[]): any;
        // 单例生成实例
        protected singletonOf(binding: InjectBinding, args: any[]);
        // 根据值获取实例
        protected valueOf(binding: InjectBinding);
    }

    class DecoratorClass<T> {
        //注入列表
        list:T[];
    }

    class DecoratorClassBinding extends Binding<DecoratorClassBinding> {
        /**属性的运行时名称 */
        readonly property;

        /**
         * 从正在绑定状态映射到属性，返回此时的绑定状态。
         * @param property 绑定映射的值
         */
        toProperty(property: any): DecoratorClassBinding;
        //重写绑定到值
        to(value: any): DecoratorClassBinding;
        //重写绑定别名
        toName(name: any): DecoratorClassBinding;
    }

    class DecoratorClassBinder extends Binder<DecoratorClassBinding> {
        //重写绑定状态映射字典Map< 被注入的类名, Map< 属性名 ，Map< 属性别名 , 绑定状态>>>
        protected _bindings: Map < any, Map < any, Map < any, DecoratorClassBinding >>> ;
        private _decoratorClassBufferMap: Map < any, DecoratorClass<DecoratorClassBinding> > ;

        //重写初始化函数
        init();
        //检查是否存在指定的键值
        public has(key): boolean;
        //获取需要注入的类型数据
        public get(target: any): DecoratorClass<DecoratorClassBinding>;
        //重写绑定方法
        public bind(key: any): DecoratorClassBinding;
        //重写获取绑定状态方法
        public getBinding(key, name): DecoratorClassBinding;
        //重写绑定获取方法
        public getRawBinding(): DecoratorClassBinding;
        //重写解析器
        public resolver(binding: DecoratorClassBinding);
        /**
         * 重写解析绑定状态
         * @param binding 绑定状态
         * @param key 键值
         */
        resolveBinding(binding: DecoratorClassBinding, key: any);
        /**
         * 重写获取绑定状态映射表，返回键值的所有绑定状态
         * @param key 被绑定的键值
         */
        getBindingMap(key: any): Map < any, Map < any, DecoratorClassBinding >> ;
    }

    class Injector {
        factory: InjectFactory;
        binder: InjectBinder;
        injectClassBinder: DecoratorClassBinder;

        constructor();
        public uninject(target);
        //实例化对象
        instantiate(binding: InjectBinding, tryInjectHere: boolean): Object;
        tryInject(binding: InjectBinding, target: any);
        //注入目标中所有被@Inject标记的属性
        inject(target: object, userClass ? : any);
    }
    class Binding<T> implements IBinding<T> {
        /**解析器 */
        protected _resolver: any;
        /**只读键 */
        readonly key;
        /**只读值 */
        readonly value;
        /**只读别名 */
        readonly name;

        constructor(resolver: any);

        /**
         * 绑定标志到键值，返回此时的绑定状态。
         * @param key 标志值，可以是需要执行的全局信号名称或枚举
         */
        bind(key): T;
        /**
         * 从正在绑定状态映射到实例，返回此时的绑定状态。
         * @param value 绑定映射的值
         */
        to(value): T;

        /**
         * 实例的别名，用于区分不同的实例，返回此时的绑定状态。
         * @param name 实例的别名
         */
        toName(name): T;
        //判断是否为构造函数
        readonly isKeyConstructor: boolean;
        //判断是否为构造函数
        readonly isValueConstructor: boolean;
        static isConstructor(value: Object): boolean;
        static checkAbstract(key);
    }

    class InjectBinding extends Binding<InjectBinding> {
        protected _isUnbind: boolean;
        //默认绑定状态
        protected _bindingType: InjectConst.BindingType;
        //默认自动注入
        protected _isInject: boolean;
        //参数
        protected _args: any;

        readonly isInject;
        //参数列表
        readonly args;
        readonly bindingType;
        readonly isUnbind;
        /**
         * 参数列表
         */
        toArgs();
        /**
         * 设置为单例模式时，每次都会得到相同的实例
         */
        toSingleton(): InjectBinding;
        /**
         * 设置为解绑时，调用解绑方法将会解绑所有被标记的绑定状态
         */
        unBind(): InjectBinding;
        toValue(value: any): InjectBinding;
        setValue(o: any): InjectBinding;
        toInject(value: boolean): InjectBinding;
        //重写基类的赋值函数
        to(value: any): InjectBinding;
        toName(name: any): InjectBinding;
    }

    module InjectConst {
        //注入状态类型枚举
        const enum BindingType {
            /// 每次都会创建一个新的对象
            DEFAULT,
            /// 总是使用同一个对象单例
            SINGLETON,
            /// 总是相同的对象但参数不同
            VALUE,
        }
    }
}