import { Type, RootObject, Field, Vector2, IOperate, Status, StatusEnum } from "peng-field";

/**实体数据模型定义 */
@Type("EntityData")
export class EntityData extends RootObject<EntityData> {
    @Status(StatusEnum.isDeath)
    public isDeath: boolean;
    @Status(StatusEnum.isEntity)
    public isEntity: boolean;

    @Field(Vector2,"position")
    position:IOperate<Vector2>;
}