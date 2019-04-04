import { Type, BehaviorAttribute, Field, Vector2, IOperate, IOperateArray, StatusEnum } from "peng-field";
import { EntityData } from "../define/EntityDefine";
import { Circle } from "../define/GeometryDefine";
import { inject } from "peng-ioc";
import { SerachFunc } from "../func/SearchFunc";

@Type(/*名称*/"Enemy")
export class EnemyBehavior extends BehaviorAttribute<EntityData> {
    @inject(SerachFunc)
    protected sFun: SerachFunc;

    init(){
        this.root.value.position.eq(new Vector2());
        this.isEntity = true;
    }

}