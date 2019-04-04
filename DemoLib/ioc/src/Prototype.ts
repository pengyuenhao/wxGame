/**
 * 原型缓存字典，用于检测一个对象的基类
 */
export class Prototype {
    //继承映射表
    private static prototypeMap = new Map<Object, Set<Object>>();
    /**
     * 基类检测函数
     * @param instance 实例
     * @param prototype 基类
     */
    public static isProtetype(type, prototype): boolean {
        //let b = type instanceof prototype;
        return type instanceof prototype;
        /*         if(!(type instanceof Object))return false;
                let constructor = type.constructor;
                if(this.prototypeMap.has(constructor)){
                    let sett = this.prototypeMap.get(constructor);
                    if(sett.has(prototype)){
                        return true;
                    }else{
                        return false;
                    }
                }
                return false; */
    }
    /**通过实例获取继承列表 */
    public static getPrototypeListByInst(target) {
        return this.getPrototypeList(target.constructor);
    }
    /**
     * 获取继承列表
     * @param instance 实例
     */
    public static getPrototypeList(target: any) {
        let that = this;
        if (!this.prototypeMap.has(target)) {
            //获取继承列表
            let extendsList = [];
            let typeList = [];
            //获取原型构造函数
            let proto = target.__proto__;
            //构造函数
            let ctor = target;
            //因为压缩代码会把所有对象的名称都压缩掉，所以这里使用构造函数作为键值
            while (true) {
                //如果继承存在并且不为对象类
                if (ctor.prototype && ctor.prototype.__proto__ !== Object.prototype) {
                    //获取原型的构造函数
                    extendsList.push(proto);
                    typeList.push(ctor);
                    //为每一个类都添加继承关系
                    typeList.forEach(type => {
                        that.AddPrototype(type, proto);
                    });
                    //设置构造函数
                    ctor = proto;
                    //获取下一级原型
                    proto = proto.__proto__;
                } else {
                    break;
                }
            }
        }
        let values = this.prototypeMap.get(target);
        if (values) {
            return Array.from(values);
        } else {
            return [];
        }
    }
    /**
     * 添加继承关系
     */
    public static AddPrototype(tpye, prototype) {
        let extendSet: Set<Object>;
        if (this.prototypeMap.has(tpye)) {
            extendSet = this.prototypeMap.get(tpye);
        } else {
            extendSet = new Set();
            this.prototypeMap.set(tpye, extendSet);
        }
        //为继承队列加入新的继承
        extendSet.add(prototype);
    }
    /**
     * 是否存在继承列表
     * @param instance 实例
     */
    public static hasPrototypeList(target) {
        //if (this.prototypeMap.has(target.constructor)) {
        if (this.prototypeMap.has(target)) {
            return true;
        } else {
            return false;
        }
    }
}
