import { IOperateArray, IOperate } from "../interface/Interface";
import { GetSettler } from "../decorator/SettleDecorator";
import { Field } from "../decorator/FieldDecorator";

/**可识别类型的对象类型 */
export class TypeObject {
    //标记的实体数据类型
    @Field(String, "@type")
    public type: IOperate<string>;
}
/**设置原型GetSet方法 */
export function DefineProperty<T>(array: IOperateArray<T>, name, cls: new () => T, index?, root?) {
    if (index == null) index = array.length;
    if (root == null) root = array;
    Object.defineProperty(array, name, {
        get: function (): IOperate<T> {
            let prop = root[index] as IOperate<T>;
            if (prop == null) {
                root[index] = prop = GetSettler(null, cls, index, root);
            }
            return prop;
        },
        set: function (value: T) {
            let prop = root[index] as IOperate<T>;
            if (prop == null) {
                root[index] = prop = GetSettler(null, cls, index, root);
            }
            prop.eq(value);
        }
    });
}