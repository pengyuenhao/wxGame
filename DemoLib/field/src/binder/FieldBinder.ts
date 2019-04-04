import { DecoratorBinder, DecoratorBinding, DecoratorClass } from "./DecoratorBinder";
import { Delay } from "../util/Delay";
import { ISettleConverter, ISettleStructure } from "../interface/Interface";
import { GetConverter } from "../decorator/ConvertDecorator";

export class FieldBinder extends DecoratorBinder<DecoratorBinding> {
    public bind(key): FieldBinding {
        return super.bind(key) as FieldBinding;;
    }
    public getRawBinding(): FieldBinding {
        return new FieldBinding(this.resolver.bind(this));
    }
    public get(target: any): DecoratorClass<FieldBinding> {
        return super.get(target) as DecoratorClass<FieldBinding>;
    }
    resolveBinding(binding: any, key: any) {
        super.resolveBinding(binding, key);
    }
}
export class FieldBinding extends DecoratorBinding {
    /**编解码转换者,只读类型 */
    public readonly value: DelayConverter;
    /**属性的结构类型 */
    public structure: DelayConverter;
    /**字段标识符，需要与外部的JSON内的属性字段一致 */
    public identity: string;
    public toStructure(structure: DelayConverter) {
        this.structure = structure;
        return this;
    }
    public toIdentify(identity: string) {
        this.identity = identity;
        if (this._resolver != null)
            this._resolver(this);
        return this;
    }
    public toProperty(propert): FieldBinding {
        return super.toProperty(propert) as FieldBinding;
    }
    public to(value: DelayConverter): FieldBinding {
        return super.to(value) as FieldBinding;
    }
}

//无法确保执行顺序所以这里使用延迟获取构造函数名称
export class DelayConverter extends Delay<ISettleConverter<any>>{
    public get() {
        if (this.arg == null) return null;
        let tmp = GetConverter(this.arg);
        if (tmp == null) {
            console.error("[无法找到编码规则]");
            tmp = GetConverter(Object);
        }
        return tmp;
    }
}
export class DelayStructure extends Delay<ISettleStructure<any>>{
    public get() {
        if (this.arg == null) return null;
        let tmp = GetConverter(this.arg);
        if (tmp == null) {
            console.error("[无法找到编码规则]");
            tmp = GetConverter(Object);
        }
        return tmp as any;
    }
}