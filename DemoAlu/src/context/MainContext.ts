import * as ioc from "peng-ioc";
import StartCmd from "../command/StartCmd";
import { MathFunc } from "../func/MathFunc";
import { SerachFunc } from "../func/SearchFunc";

export default class MainContext extends ioc.Context{
    public sglMgr : ioc.ISignalManager;

    constructor(root : any){
        super(root);
    }
    addCore(){
        super.addCore();
        this.injectBinder.bind("inject").toValue(this.injectBinder);
    }
    mapBindings(){
        super.mapBindings();
        this.sglMgr = this.injectBinder.getInstance(ioc.NSignalManager);

        this.injectBinder.bind(MathFunc).toSingleton();
        this.injectBinder.bind(SerachFunc).toSingleton();

        //绑定信号与指令
        this.commandBinder.bind("Start").to(StartCmd);
    }
    start() : ioc.IContext{
        super.start();
        this.sglMgr.get("Start").dispatch();
        return this;
    }
}