import { StatusEnum } from "../enum/StatusEnum";
import { GetSettler } from "./SettleDecorator";
import { RootSettler } from "../define/ObjectDefine";
import { OperateArray } from "../define/SettlerDefine";
import { DecoratorBinder,DecoratorBinding } from "../binder/DecoratorBinder";
import { IOperate } from "../interface/Interface";
import { StatusAttribute } from "../base/StatusBase";
/**
 * @tips 状态装饰器
 * @see 1.存储在一个数组中，可以在任何标记了Stat的位置，通过修改boolean的方式直接修改数组中的值
 * @see 2.使用字符串进行标记，如果有需要也可以设置为数字，用于网络传输时数据会自动转换为字符数组
 */

/**静态Attr注入绑定者*/
export const CONST_StatBinder = new DecoratorBinder<DecoratorBinding>();
/**根据指定的资源名称注入对象 */
export function Status(status: StatusEnum): Function {
    return function (target: Object, propertName: string) {
        /**@see 注意，混淆压缩的时候，构造函数的名称会被压缩 */
        //所有实现了IConstructorName的类都属于虚类，这里获取虚类对应的接口名作为键值传递给绑定器
        //因为压缩代码会把所有对象的名称都压缩掉，所以这里使用构造函数作为键值
        CONST_StatBinder.bind(target.constructor).to(status).toProperty(propertName);
    }
}

/**
 * 状态注入，自动绑定状态
 * @param entity 
 */
export function StatusInject(inst: RootSettler<any>, target?: IOperate<any>) {
    if (!inst) return;
    if (!target) target = inst;
    let status: OperateArray<number> = inst.value.status;
    let sClass = CONST_StatBinder.get(target.value.constructor);
    if (sClass.list.length != 0 && !status) {
        status = new OperateArray();
        inst.value.status = status;
    }
    for (let binding of sClass.list) {
        //获取索引
        let index = binding.value >> 5;
        let data = binding.value % 32;
        let decide = 1 << data;
        let stat = status[index];
        //如果索引不存在则创建
        if (!stat) {
            stat = GetSettler(0, StatusAttribute, index, status);
            status[index] = stat;
        }
        Object.defineProperty(target.value, binding.property, {
            get: function (): Boolean {
                //获取对应的比特位
                if ((stat.value & decide) != 0) {
                    return true;
                } else {
                    return false;
                }
            },
            set: function (value: boolean) {
                //设置对应的比特位
                if (value == true) {
                    stat.add(decide);
                } else {
                    stat.sub(decide);
                }
            }
        })
    }
}