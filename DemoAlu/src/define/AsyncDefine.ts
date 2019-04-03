/**异步接口*/
export interface IAsync {
    /**注册异步执行的方法*/
    then(method: (...result: any[]) => void, isCheckFinish?: boolean): IAsync;
    /**异步完成时执行的回调 */
    resolve(...result: any[]);
    finish(method);
}
/**类似于Promise的异步类 */
export class Async implements IAsync {
    protected methodArr: Array<(...result: any[]) => void>;
    protected caller: any;
    protected onFinish: Function;
    constructor(caller?) {
        this.methodArr = [];
        if (caller == null) caller = this;
        this.caller = caller;
    }
    public then(method: (...result: any[]) => void): IAsync {
        //如果已经完成了则直接执行
        this.methodArr.push(method);
        return this;
    }
    //执行
    public resolve(...result: any[]) {
        let len = this.methodArr.length;
        for (let i = 0; i < len; i++) {
            if (!this.methodArr[i]) continue;
            this.methodArr[i].apply(this.caller, result);
        }
        if (this.onFinish) this.onFinish();
    }
    public finish(method) {
        this.onFinish = method;
    }
}