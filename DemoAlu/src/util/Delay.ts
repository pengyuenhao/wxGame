//无法确保执行顺序所以这里使用延迟获取构造函数名称
export class Delay<T> {
    protected arg: any;
    public get origin():any{
        return this.arg;
    }
    public get delay(): T {
        return this.get();
    };
    public get(): T {
        return this.arg;
    }
    constructor(arg: any) {
        this.arg = arg;
    }
}