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
    public static IsProtetype(value: Function, prototype: Function): boolean {
        return value instanceof prototype;
    }
    /**通过实例获取继承列表 */
    public static GetPrototypeListByInst(target) {
        return this.GetPrototypeList(target.constructor);
    }
    public static GetBasePrototypeByInst(target) {
        return this.GetBasePrototype(target.constructor);
    }
    /**获取基础继承类型 */
    public static GetBasePrototype(target: any) {
        let list = this.GetPrototypeList(target);
        if (list == null || list.length == 0) return Object;
        else return list[list.length - 1];
    }
    /**
     * 获取继承列表
     * @param instance 实例
     */
    public static GetPrototypeList(target: any) {
        //空值直接返回
        if(target == null) return null;
        //基础类型直接返回原值
        if (target == Number || target == String || target == Boolean) return [target];
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
    private static AddPrototype(tpye, prototype) {
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
    public static HasPrototypeList(target) {
        //if (this.prototypeMap.has(target.constructor)) {
        if (this.prototypeMap.has(target)) {
            return true;
        } else {
            return false;
        }
    }
}
