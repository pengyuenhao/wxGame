/**
 * 懒汉模式单例类，继承该类后将会变成单例，继承该类之后应该尽量避免重写构造函数
 */
export default abstract class Singleton{
    /**
     * 单例的识别名，因为TS运行时没有类型数据，所以需要手动存储名称字符串
    */
    protected abstract getName():string;
    //这里的作用是防止其他类调用构造函数
    protected constructor() {
        
    }
    protected onConstructor() {

    }
    public async init(...any:any[]):Promise<Boolean>{return false;}
    public static Instance() : Singleton{
        return Singleton.getInstanceOrCreate(this);
    }

    public static destroyInstance(clazz: any): void {
        let symbol = Symbol.for("ClassMap");
        let map : Map<string,object> = global[symbol];
        let name = clazz.prototype.getName();
        if(!name)return null;
        let instance;
        if(map.has(name)){
            map.get(name);
            instance.onDestroy();
            map.delete(instance);
        }
    }

    public static getInstanceOrCreate(clazz:any): any {
        let instance;
        //如果能从原型上获取到类型名称
        let name = clazz.prototype.getName();
        if(!name)return null;
        let symbol = Symbol.for("ClassMap");
        let map : Map<string,object> = global[symbol];
        if(!map){
            map = new Map();
            global[symbol] = map;
        }
        //如果存在则直接返回
        if(map.has(name)){
            instance = map.get(name);
            return instance;
        }
        instance = new clazz();
        map.set(name,instance);
        instance.onConstructor();
        //置入已经构造完毕的单例
        //console.log("[构造]"+name);
        return instance;
    }

    protected onDestroy(): void {

    }
}