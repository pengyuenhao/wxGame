import { Field } from "../decorator/FieldDecorator";
import { Status } from "../decorator/StatusDecorator";
import { StatusEnum } from "../enum/StatusEnum";
import { RootSettler, RootObject } from "../define/ObjectDefine";
import { IOperate } from "../interface/Interface";
import { Type } from "../decorator/TypeDecorator";
import { TypeObject } from "../util/Define";

/**
 * 技能接口，技能数据存放在单位的技能属性内
 */
export interface IBehavior<T extends RootObject<T>> {
    isInit: IOperate<boolean>;
    /**根结算点 */
    root: RootSettler<T>;
    /**继承类型 */
    class: IOperate<string>;
    /**更新周期性检查函数 */
    update(delta: number);
    /**首次初始化执行函数 */
    init();
    /**数据载入时执行函数 */
    enable();
}
/**
 * 行为属性，影响单位进行任务时的效率和一些任务的判定条件
 * 使用 @Field 标记需要序列化的属性，可以使用类的继承
 * 使用 @Attr 标记从属性列表中获取的值，可以使用类的继承
*/
@Type("BehaviorAttribute")
export class BehaviorAttribute<T extends RootObject<T>> extends TypeObject implements IBehavior<T> {
    /**更新周期，每次更新设置经过的时间修正常数，一般为1毫秒转换为秒的数值 */
    public static CONST_CTCLE = 0.001;
    /**根节点结算外壳 */
    public root: RootSettler<T>;
    @Field(Boolean, "@isInit")
    public isInit: IOperate<boolean>;
    @Field(String, "@class")
    public class: IOperate<string>;

    @Status(StatusEnum.isEntity)
    isEntity:boolean;
    @Status(StatusEnum.isDeath)
    isDeath: boolean;
    @Status(StatusEnum.isIdle)
    isIdle: boolean;

    public update(delta: number) {

    }
    public init() {

    }
    public enable() {

    }
    public on(stat: number, bool: boolean, caller: any, method: Function) {
        this.root.value.on(stat, bool, caller, method.bind(this));
    }
}
/**可升级的技能属性 */
export class UpgradeBehavior<T extends RootObject<T>> extends BehaviorAttribute<T> {
    /**等级*/
    @Field(Number, "level")
    public level: number;
    /**经验*/
    @Field(Number, "exp")
    public exp: number;
    /**学习效率*/
    @Field(Number, "effect")
    public effect: number;
}

