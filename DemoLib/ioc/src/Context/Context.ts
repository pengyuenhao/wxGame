import { IInjectBinder, InjectBinder, NInjectBinder } from "../Injector/InjectBinder";
import { IConstructorName, CommonEnum} from "../IocConst";
import { CommandBinder, SignalCommandBinder } from "../Command/CommandBinder";
import { IRoot } from "./IRoot";
import { NCommandBinder } from "../Command/ICommandBinder";
import { NSignalManager, SignalManager } from "../Signal/SignalManager";
import { InjectBinding } from "..";
import { IBinding } from "../..";

export interface IContext {
    getIns(key,name):any;
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
    crossContextBinder: IInjectBinder<InjectBinding>;
}
export class NContext implements IConstructorName {
    get constructorName() {
        return "IContext";
    }
}

export class Context implements IContext {
    //第一个被创建出来的环境容器
    public static firstContext: IContext;
    //应该以注入的方式获取
    private _injectBinder: InjectBinder<InjectBinding>;
    private _crossContextBinder: InjectBinder<InjectBinding>;
    //注入绑定器
    public get injectBinder(): InjectBinder<InjectBinding> {
        if (!this._injectBinder) {
            this._injectBinder = new InjectBinder<InjectBinding>();
        }
        return this._injectBinder;
    }
    //设置全局注入绑定器
    public set crossContextBinder(value) {
        this._crossContextBinder = value;
    }
    //这里使用注入绑定器代替全局绑定器
    public get crossContextBinder() {
        return this._crossContextBinder;
    }
    private _commandBinder: CommandBinder;
    //指令绑定器
    public get commandBinder(): CommandBinder {
        /*         //指令绑定器应该由注入产生
                if(!this._commandBinder){
                    this._commandBinder = new CommandBinder();
                } */
        return this._commandBinder;
    }
    //根节点
    root: IRoot;
    //获取根节点
    getRoot() {
        return this.root;
    }

    constructor(root: IRoot) {
        if (Context.firstContext == null || Context.firstContext.getRoot() == null) {
            Context.firstContext = this;
            this.crossContextBinder = this.injectBinder;
        } else {
            Context.firstContext.addCrossContext(this);
        }
        //设置根节点
        this.setRoot(root);
        //添加核心
        this.addCore();
        //启动环境容器
        this.start();
    }
    //获取实例
    public getIns(key,name?):any{
        return this.injectBinder.getInstance(key,name);
    }
    //添加全局环境容器
    public addCrossContext(context: IContext): IContext {
        //共用注入绑定器
        context.crossContextBinder = this.injectBinder;
        return this;
    }
    //移除全局环境容器
    public removeCrossContext(childContext: IContext) {
        /*         if (childContext.crossContextBinder != null)
                {
                    childContext.crossContextBinder = null;
                } */
    }
    /**
     * 设置根节点，只有构造类时可以指定根节点
     * @param root 根节点
     */
    private setRoot(root: IRoot): IContext {
        this.root = root;
        return this;
    }
    public restart(): IContext {
        this.addCore();
        this.start();
        //console.info("[重启Ioc容器]");
        return this;
    }
    public start(): IContext {
        this.instantiateCore();
        this.mapBindings();
        this.postBindings();
        this.launch();

        return this;
    }
    //启动容器
    public launch() {
        //注入根节点
        //debugger;
        this.injectBinder.inject(this);
        this.injectBinder.inject(this.root);
        //console.info("Ioc容器启动");
    }
    /**
     * 初始化核心组件
     */
    protected instantiateCore() {
        //实例化信号绑定器
        this._commandBinder = this.injectBinder.getInstance(NCommandBinder, null);
    }
    protected mapBindings() {

    }
    protected postBindings() {

    }
    protected addCore() {
        //注入注入绑定器
        this.injectBinder.bind(NInjectBinder).toValue(this.injectBinder);
        //注入信号绑定器
        this.injectBinder.bind(NCommandBinder).to(SignalCommandBinder).toSingleton();
        //注入默认信号管理器
        this.injectBinder.bind(NSignalManager).to(SignalManager).toSingleton();
        //绑定环境容器
        this.injectBinder.bind(CommonEnum.Context).toValue(this);
        //绑定根节点
        this.injectBinder.bind(CommonEnum.Root).toValue(this.root);
    }

}