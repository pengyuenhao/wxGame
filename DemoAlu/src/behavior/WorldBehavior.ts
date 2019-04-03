import { Type, BehaviorAttribute, Field, IOperate, Vector2, IOperateArray, StatusEnum } from "peng-field";
import { EntityData } from "../define/EntityDefine";
import { Missile } from "../define/MissileDefine";
import { Circle } from "../define/GeometryDefine";
import { inject } from "peng-ioc";
import { SerachFunc } from "../func/SearchFunc";
import { MathFunc } from "../func/MathFunc";

@Type(/*名称*/"World")
export class WorldBehavior extends BehaviorAttribute<EntityData> {
    @inject(SerachFunc)
    protected sFun: SerachFunc;
    @inject(MathFunc)
    protected mFun: MathFunc;

    @Field(Vector2,"position")
    position:IOperate<Vector2>;
    @Field(Missile, "missile", Array)
    missile: IOperateArray<Missile>;

    init(){
        this.position.eq(new Vector2());
    }
    update(delta){
        for (let i = 0; i < this.missile.length; i++) {
            let missile = this.missile[i];
            if (missile == null) continue;
            let health = missile.value.health;
            let position = missile.value.position;
            let rotate = missile.value.rotate;
            let range = missile.value.range;
            let speed = missile.value.speed;
            let serial = missile.value.serial;

            if (health.value > 0) {
                health.sub(1 * delta * 0.001);
                let v = new Vector2(speed.value * Math.cos(rotate.value) * delta * 0.001, speed.value * Math.sin(rotate.value) * delta * 0.001);
                position.add(v);
                let area: Circle = new Circle(position.value.x, position.value.y, range.value);
                continue;
                this.sFun.search(area, [StatusEnum.isEntity]).then((arr: IOperate<EntityData>[]) => {
                    for (let m of arr) {
                        //必须攻击其他实体
                        if (this.root != m) {
                            this.missile.remove(i);
                            //console.log("[索引]" + i + "/" + this.missile.length + "[撞击]" + position + "[S]" + serial);
                            break;
                        }
                    }
                });
            } else {
                this.missile.remove(i);
                //console.log("[索引]" + i + "/" + this.missile.length + "[结束]" + position + "[S]" + serial);
            }
        }
    }
}