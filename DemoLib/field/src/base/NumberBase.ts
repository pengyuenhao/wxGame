import { Type } from "../decorator/TypeDecorator";
import { Field } from "../decorator/FieldDecorator";
import { IOperate } from "../interface/Interface";

export interface INumber {
    value: number;
    add(v: INumber): INumber;
    sub(v: INumber): INumber;
    mul(v: INumber): INumber;
    div(v: INumber): INumber;
    neg(): INumber;
    rec(): INumber;
}

/**CustomNumber类型封装number使得可以直接修改[PrimitiveValue] */
@Type("CustomNumber")
export class CustomNumber implements INumber {
    private static PrimitiveValue = "[[PrimitiveValue]]";
    public static readonly MAX_VALUE: number = Number.MAX_VALUE;
    public static readonly MIN_VALUE: number = Number.MIN_VALUE;

    public get value(): number {
        return this[CustomNumber.PrimitiveValue];
    }
    public set value(v: number) {
        this[CustomNumber.PrimitiveValue] = ((<any>((<Object>this).constructor))).Parse(v);
    }
    public add(v: INumber): INumber {
        return new (<new (v: number) => INumber>((<Object>this).constructor))(this.value + v.value);
    }
    public sub(v: INumber): INumber {
        return new (<new (v: number) => INumber>((<Object>this).constructor))(this.value - v.value);
    }
    public mul(v: INumber): INumber {
        return new (<new (v: number) => INumber>((<Object>this).constructor))(this.value * v.value);
    }
    public div(v: INumber): INumber {
        return new (<new (v: number) => INumber>((<Object>this).constructor))(this.value / v.value);
    }
    public neg(): INumber {
        return new (<new (v: number) => INumber>((<Object>this).constructor))(-this.value);
    }
    public rec(): INumber {
        return new (<new (v: number) => INumber>((<Object>this).constructor))(1 / this.value);
    }
    public valueOf(): number {
        return this.value;
    }
    /**
    * Returns a string representation of an object.
    * @param radix Specifies a radix for converting numeric values to strings. This value is only used for numbers.
    */
    public toString(radix?: number): string { return this.valueOf().toString(radix) };


    constructor(v: number | INumber) {
        if (typeof (v) == "number") {
            this.value = v;
        } else {
            this.value = v.value;
        }
    }

    public static Parse(v: number) {
        return v;
    }
}
/**使用Integer类型生成的数字永远都是整数 */
@Type("Integer")
export class Integer extends CustomNumber {
    public static readonly MAX_VALUE: number = 2147483648;
    public static readonly MIN_VALUE: number = -2147483648;

    public static Parse(v: number) {
        return Math.floor(v);
    }
}

@Type("Float")
export class Float extends CustomNumber {
    public static readonly MAX_VALUE: number = 2147483648;
    public static readonly MIN_VALUE: number = -2147483648;
    
    public static Parse(v: number) {
        return Math.round(v * 0x100000) / 0x100000;
    }
}
/**
 * 数值属性值，使用时将其绑定到某个值上
 * 每当获取该值时都将调用计算公式的返回值
 * @see 应该将该值绑定到某一个属性上，并且应该设置一个缓存
*/
@Type("NumberAttribute")
export class NumberAttribute {
    //属性名称
    @Field(String, "name")
    public name: IOperate<string>;
    //基础值
    @Field(Number, "base")
    public base: IOperate<number>;
    //百分比，按百分比增加或减少，均以Value为基数
    @Field(Number, "percent")
    public percent: IOperate<number>;
    //固定值，固定增加或减少的值，不参与百分比计算
    @Field(Number, "fixed")
    public fixed: IOperate<number>;
    //附加的值，增加或减少基础值，参与百分比计算
    @Field(Number, "addition")
    public addition: IOperate<number>;
    //是否能够为负值
    @Field(Boolean, "isNegative")
    public isPositive: IOperate<boolean>;
    //是否是一个整数
    @Field(Boolean, "isInteger")
    public isInteger: IOperate<boolean>;

    /**获取计算结果值 */
    public get value() {
        let base = this.base != null && this.base.value != null ? this.base.value : 0;
        let fixed = this.fixed != null && this.fixed.value != null ? this.fixed.value : 0;
        let addition = this.addition != null && this.addition.value != null ? this.addition.value : 0;
        let percent = this.percent != null && this.percent.value != null ? this.percent.value : 0;

        let result: number = fixed + ((1 + percent) * (base + addition));
        if (this.isInteger && this.isInteger.value) {
            result = Math.floor(result);
        }
        if (this.isPositive && this.isPositive.value && result < 0) {
            result = 0;
        }
        return result;
    }
    /**修改默认值 */
    public toString() {
        return this.value;
    }
}