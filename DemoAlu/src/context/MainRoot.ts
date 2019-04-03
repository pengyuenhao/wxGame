import { IContext, inject } from "peng-ioc";
import { FrameData } from "../define/FrameDefine";
import MainContext from "./MainContext";
import { EntityData } from "../define/EntityDefine";
import { WorldBehavior } from "../behavior/WorldBehavior";
import { RootSettler, GetConverter, IOperate, OperateArray, IBehavior, Vector2, IOperateArray, RootObject } from "peng-field";
import { Missile } from "../define/MissileDefine";
import { Template } from "../define/TemplateDefine";
import { PlayerBehavior } from "../behavior/PlayerBehavior";
import { MathFunc } from "../func/MathFunc";

export class RootMain {
    @inject("inject")
    injectBinder: ioc.InjectBinder;
    @inject(MathFunc)
    protected mFun: MathFunc;

    public entitys: RootSettler<EntityData>[];
    public recycle: number[];
    public indexMap: Map<number, number>;
    public frameBuffer: FrameData[];
    public context: IContext;
    public lastframe: number;
    public cmdMap: Map<string, Function>;
    private addBuffer: any[];
    private removeBuffer: any[];
    private world: WorldBehavior;

    constructor() {
        this.context = new MainContext(this);
        this.lastframe = 0;
        this.frameBuffer = [];
        this.entitys = [];
        this.cmdMap = new Map();
        this.indexMap = new Map();
        this.addBuffer = [];
        this.removeBuffer = [];
        this.recycle = [];

        this.cmdMap.set("World", (actor: number, task: string, value: number[]) => {
            let world = this.entitys[0].value.getBehavior(WorldBehavior);
            if (world != null) {
                let index = this.indexMap.get(actor);
                switch (task) {
                    case "Enter":
                        //检查是否已经存在
                        if (index == null) {
                            this.addEntity(actor, Template.Player);
                        }
                        break;
                    case "Leave":
                        //检查是否已经存在
                        if (index != null) {
                            this.removeEntity(actor);
                        }
                        break;
                    case "Move":
                        break;
                    case "Click":
                        break;
                }
            }
            //console.log("[玩家]" + actor + "[执行]" + task + "[数据]" + value);
        });
        this.cmdMap.set("Player", (actor: number, task: string, value: number[]) => {
            let index = this.indexMap.get(actor);
            let entity = this.entitys[index];
            if (entity == null) return;
            let player = entity.value.getBehavior(PlayerBehavior);
            if (player == null) return;
            switch (task) {
                case "Move":
                    player.position.eq(new Vector2(value[0], value[1]));
                    break;
                case "Click":
                    let position = new Vector2(value[0], value[1]);
                    let rotate = - 0.5 * Math.PI;
                    let missile = GetConverter(Missile).parse({
                        health: 5,
                        range: 10,
                        speed: 100,
                        rotate: rotate,
                        position: position,
                        serial: this.mFun.number(0,0x1000000)
                    }, Missile);
                    let index;
                    //循环使用
                    for(let i=0;i<this.world.missile.length;i++){
                        if(this.world.missile[i] == null){
                            index = i;
                            break;
                        }
                    }
                    this.world.missile.add(missile,index);
                    break;
            }
            //console.log("[玩家]" + actor + "[执行]" + task + "[数据]" + value);
        });
    }
    public init() {
        this.addEntity(0, Template.World);
        this.disposeEntity();
    }
    public start() {
        //获取全局世界实体
        this.world = this.entitys[0].value.getBehavior(WorldBehavior);
    }
    public addEntity(serial, template) {
        this.addBuffer.push({
            serial: serial,
            template: template
        });
    }
    public removeEntity(serial) {
        this.removeBuffer.push({
            serial: serial
        });
    }
    public disposeEntity() {
        for (let i = 0; i < this.removeBuffer.length; i++) {
            let buffer = this.removeBuffer[i];
            let serial = buffer.serial;
            let index = this.indexMap.get(serial);
            if (index == null) return;
            let entity = this.entitys[index];
            this.indexMap.delete(serial);
            this.recycle.push(index);
            this.entitys[index] = null;
            this.emit("Leave", entity);
            console.log("[移除实体]" + serial + "[索引]" + index);
        }
        for (let i = 0; i < this.addBuffer.length; i++) {
            let buffer = this.addBuffer[i];
            let serial = buffer.serial;
            let entity = GetConverter(EntityData).parseShell(buffer.template) as RootSettler<EntityData>;
            entity.value.serial.value = serial;
            this.register(entity);
        }
        this.addBuffer = [];
        this.removeBuffer = [];
    }
    public register(entity: RootSettler<EntityData>) {
        if (entity == null) return;
        let index = entity.value.index.value;
        let serial = entity.value.serial.value;
        if (index == null) {
            index = this.recycle.pop();
            if (index == null) index = this.entitys.length;
        }
        entity.value.index.value = index;
        this.injectSkill(entity);
        this.indexMap.set(serial, index);
        this.entitys[index] = entity;
        this.emit("Enter", entity);
        console.log("[注册实体]" + serial + "[索引]" + index);
    }
    private event = new Map();
    private emit(event: "Enter" | "Leave", entity: RootSettler<EntityData>) {
        let func = this.event.get(event);
        if (func != null) {
            for (let i = 0; i < func.length; i++) {
                func[i] && func[i](entity);
            }
        }
    }
    public on(event: "Enter" | "Leave", listen: Function) {
        let func = this.event.get(event);
        if (func == null) {
            func = [];
            this.event.set(event, func);
        }
        func.push(listen);
    }

    private injectSkill(operate: IOperate<EntityData>) {
        //绑定技能，如果没有技能则创建空数组
        if (!operate.value.behaviors) {
            operate.value.behaviors = new OperateArray();
        }
        else {
            let skill: IOperate<IBehavior<EntityData>>;
            let len = operate.value.behaviors.length;
            for (let i = 0; i < len; i++) {
                skill = operate.value.behaviors[i];
                this.injectBinder.inject(skill.value);
            }
        }
    }

    public update() {
        let buffer = this.frameBuffer.shift();
        if (buffer == null) return false;
        //设置本次更新的随机种子
        this.mFun.seed(this.lastframe);
        for (let i = 0; i < buffer.packet.length; i++) {
            let packet = buffer.packet[i];
            for (let j = 0; j < packet.commands.length; j++) {
                let cmd = packet.commands[j];
                let fun = this.cmdMap.get(cmd.type);
                fun && fun.call(this, packet.actor, cmd.task, cmd.value);
            }
        }
        for (let i = 0; i < this.entitys.length; i++) {
            let entity = this.entitys[i];
            if (entity == null) continue;
            let behaviors = entity.value.behaviors;
            if (behaviors == null) continue;
            for (let j = 0; j < behaviors.length; j++) {
                let behavior = behaviors[j];
                if (behavior == null) continue;
                behavior.value.update(buffer.delta);
            }
        }
        for (let i = 0; i < this.entitys.length; i++) {
            let entity = this.entitys[i];
            if (entity == null) continue;
            entity.result();
            entity.publish();
        }
        this.disposeEntity();
        //检查是否产生了跳帧
        if (buffer.frame - this.lastframe != 1) {
            console.log("[跳帧]" + this.lastframe + "=>" + buffer.frame);
        }
        this.lastframe = buffer.frame;
        return true;
    }

    public push(packet: FrameData) {
        this.frameBuffer.push(packet);
    }
}