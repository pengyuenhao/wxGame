import { Type, Field, Vector2, IOperate, Convert, Settle, Settler, SettleConverter } from "peng-field";

@Type("Missile")
export class Missile{
    @Field(Vector2,"position")
    public position:IOperate<Vector2>;
    @Field(Number,"health")
    public health:IOperate<number>;
    @Field(Number, "rotate")
    public rotate: IOperate<number>;
    @Field(Number, "range")
    public range: IOperate<number>;
    @Field(Number, "speed")
    public speed: IOperate<number>;
    @Field(Number, "serial")
    public serial: IOperate<number>;
    @Field(Number, "type")
    public type: IOperate<number>;
}
@Convert(Missile)
class MissileConverter extends SettleConverter<Missile>{

}
@Settle(Missile)
class MissileSettle extends Settler<Missile>{

}