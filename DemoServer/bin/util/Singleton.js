"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 懒汉模式单例类，继承该类后将会变成单例，继承该类之后应该尽量避免重写构造函数
 */
class Singleton {
    //这里的作用是防止其他类调用构造函数
    constructor() {
    }
    onConstructor() {
    }
    init(...any) {
        return __awaiter(this, void 0, void 0, function* () { return false; });
    }
    static Instance() {
        return Singleton.getInstanceOrCreate(this);
    }
    static destroyInstance(clazz) {
        let symbol = Symbol.for("ClassMap");
        let map = global[symbol];
        let name = clazz.prototype.getName();
        if (!name)
            return null;
        let instance;
        if (map.has(name)) {
            map.get(name);
            instance.onDestroy();
            map.delete(instance);
        }
    }
    static getInstanceOrCreate(clazz) {
        let instance;
        //如果能从原型上获取到类型名称
        let name = clazz.prototype.getName();
        if (!name)
            return null;
        let symbol = Symbol.for("ClassMap");
        let map = global[symbol];
        if (!map) {
            map = new Map();
            global[symbol] = map;
        }
        //如果存在则直接返回
        if (map.has(name)) {
            instance = map.get(name);
            return instance;
        }
        instance = new clazz();
        map.set(name, instance);
        instance.onConstructor();
        //置入已经构造完毕的单例
        //console.log("[构造]"+name);
        return instance;
    }
    onDestroy() {
    }
}
exports.default = Singleton;
//# sourceMappingURL=Singleton.js.map