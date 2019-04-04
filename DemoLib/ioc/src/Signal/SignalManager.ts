import {ISignal,Signal} from "./Signal";
import {IConstructorName} from "../IocConst";

export interface ISignalManager {
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
export class NSignalManager implements IConstructorName {
    get constructorName() {
        return "ISignalManager";
    }
}
export class SignalManager implements ISignalManager {
    //维护一个信号指令映射表，注意不再使用的信号应该及时释放掉
    _signal_dic: Map < any,
    ISignal < any > >= new Map < any,
    ISignal < any > > ();
    info: string = "this is a signal manager";

    public finish(symbol) {

    }
    public get < T > (symbol): ISignal < T > {
        //检查全局信号字典内是否存在对应的信号名称或枚举
        if (this._signal_dic.has(symbol)) {
            //获取标志对应的信号
            return this._signal_dic.get(symbol);
        } else {
            //创建一个信号
            let _signal = new Signal();
            //如果使用字符串作为信号识别名，则将其绑定给信号
            if (typeof symbol == "string") _signal.symbol = symbol;
            //设置根环境
            //_signal.setRoot(this._context.getRoot);
            //建立全局信号与标志值的映射关系
            this._signal_dic.set(symbol, _signal);
            return _signal;
        }
    };

    public delete(symbol) {
        //检查全局信号字典内是否存在对应的信号名称或枚举
        if (this._signal_dic.has(symbol)) {
            //获取标志对应的信号
            return this._signal_dic.delete(symbol);
        }
    }
}