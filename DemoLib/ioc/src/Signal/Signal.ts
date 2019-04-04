import {
    IConstructorName
} from "../IocConst";

export interface ISignal < T > {
    /**标记 */
    symbol;
    /**同步发布,同步返回结果*/
    dispatch(...args): any[];
    /**异步发布,异步返回结果 */
    dispatchAsync(...args): Promise < any[] > ;
    /**添加监听*/
    addListener(callback: (result: T[]) => void);
    addOnceListener(callback: (result: T[]) => void);
    removeAllListeners();
}
export class NSignal implements IConstructorName {
    get constructorName() {
        return "ISignal";
    };
}

export class Signal < T > implements ISignal < T > {
    public symbol;
    //回调监听
    public _listener: Function[] = [];
    public _onceListener: Function[] = [];
    /**
     * 发布信号，同步等待响应
     * @param args 
     */
    public dispatch(...args): any[] {
        let that = this;
        let ret;
        let retOne;
        let results = null;
        //如果存在回调函数
        if (that._listener && that._listener.length != 0) {
            this._listener.forEach(function (action) {
                ret = action(that, ...args);
                //如果发现存在回调类型
                if (ret!==null) {
                    results = [];
                    if(Array.isArray(ret)){
                        results.push(...ret);
                    }else{
                        results.push(ret);
                    }
                }
            })
        }
        //如果存在单次回调
        if (that._onceListener && that._onceListener.length != 0)
            this._listener.forEach(function (action) {
                retOne = action(that, ...args);
                //如果发现存在回调类型
                if (retOne!==null) {
                    if(!results)results = [];
                    if(Array.isArray(retOne)){
                        results.push(...retOne);
                    }else{
                        results.push(retOne);
                    }
                }            
            })
        //清空单次执行的监听
        this._onceListener.length = 0;
        //if(p.length>0)console.log("[存在等待回调的函数]"+that.name);
        //返回信号响应结果
        return results;
    }
    /**发布信号，但仅返回最后一个返回值 */
    public dispatchSole(...args):T{
        let that = this;
        let result = null;
        //如果存在回调函数
        if (that._listener && that._listener.length != 0) {
            this._listener.forEach(function (action) {
                result = action(that, ...args);
            })
        }
        //如果存在单次回调
        if (that._onceListener && that._onceListener.length != 0)
            this._listener.forEach(function (action) {
                result = action(that, ...args);       
            })
        //清空单次执行的监听
        this._onceListener.length = 0;
        if(result.length!=0){
            //返回信号响应结果
            return result[0];
        }else{
            return null;
        }
    }
    /** */
    public dispatchAsync(...args): Promise < any[] > {
        let that = this;
        let result;
        let p = [];
        //如果存在回调函数
        if (that._listener && that._listener.length != 0) {
            that._listener.forEach(function (action) {
                result = action(that, ...args);
                //如果发现存在回调类型
                if (result) p.push(...result);
            })
        }
        //如果存在单次回调
        if (that._onceListener && that._onceListener.length != 0)
            that._listener.forEach(function (action) {
                result = action(that, ...args);
                //如果发现存在回调类型
                if (result) p.push(...result);
            })
        //清空单次执行的监听
        this._onceListener.length = 0;
        //if(p.length>0)console.log("[存在等待回调的函数]"+that.name);
        //返回信号响应结果
        return Promise.all(p);
    }
    public addListener(callback: Function) {
        this._listener = this.addUnique(this._listener, callback);
    }
    public addOnceListener(callback: Function) {
        this._onceListener = this.addUnique(this._onceListener, callback);
    }
    //清空监听
    public removeAllListeners() {
        this._listener.length = 0;
        this._onceListener.length = 0;
    }
    //不重复添加
    private addUnique(listeners: Function[], callback: Function) {
        //检查监听回调是否存在
        if (listeners) {
            let isUnique = false;
            for (let i = 0; i < listeners.length; i++) {
                //检查是否存在重复项
                if (listeners[i] === callback) {
                    isUnique = true;
                    break;
                }
            }
            if (!isUnique) {
                //放入回调
                listeners.push(callback);
            }
        }
        return listeners;
    }
    public getTypes(): object[] {
        let retv = [];
        //retv.push(this);
        return retv;
    }
}