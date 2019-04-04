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
import MainModel from "../model/MainModel";
import { SerachFunc } from "../func/SearchFunc";

export class RootMain {
    @inject("inject")
    injectBinder: ioc.InjectBinder;
    @inject(MathFunc)
    protected mFun: MathFunc;
    @inject(SerachFunc)
    protected sFun: SerachFunc;
    @inject(MainModel)
    protected mMdl: MainModel;

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
        this.cmdMap = new Map();
        this.indexMap = new Map();
        this.addBuffer = [];
        this.removeBuffer = [];
        this.recycle = [];

        this.cmdMap.set("World", (actor: number, task: string, value: number[]) => {
            let world = this.mMdl.entitys[0].value.getBehavior(WorldBehavior);
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
            let entity = this.mMdl.entitys[index];
            if (entity == null) return;
            let player = entity.value.getBehavior(PlayerBehavior);
            if (player == null) return;
            switch (task) {
                case "Move":
                    entity.value.position.eq(new Vector2(value[0], value[1]));
                    break;
                case "Click":
                    let position = new Vector2(value[0], value[1]);
                    let rotate = - 0.5 * Math.PI;
                    let missile = GetConverter(Missile).parse({
                        health: 2,
                        range: 25,
                        speed: 300,
                        rotate: rotate,
                        position: position,
                        serial: actor,
                        type: 0
                    }, Missile);
                    let index;
                    //循环使用
                    for (let i = 0; i < this.world.missile.length; i++) {
                        if (this.world.missile[i] == null) {
                            index = i;
                            break;
                        }
                    }
                    this.world.missile.add(missile, index);
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
        this.world = this.mMdl.entitys[0].value.getBehavior(WorldBehavior);
    }
    public getEntity():RootSettler<EntityData>[]{
        return this.mMdl.entitys;
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
            let entity = this.mMdl.entitys[index];
            this.indexMap.delete(serial);
            this.recycle.push(index);
            this.mMdl.entitys[index] = null;
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
            if (index == null) index = this.mMdl.entitys.length;
        }
        entity.value.index.value = index;
        this.injectSkill(entity);
        this.indexMap.set(serial, index);
        this.mMdl.entitys[index] = entity;
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
        this.preClear();
        this.preClassify();

        for (let i = 0; i < buffer.packet.length; i++) {
            let packet = buffer.packet[i];
            for (let j = 0; j < packet.commands.length; j++) {
                let cmd = packet.commands[j];
                let fun = this.cmdMap.get(cmd.type);
                fun && fun.call(this, packet.actor, cmd.task, cmd.value);
            }
        }
        for (let i = 0; i < this.mMdl.entitys.length; i++) {
            let entity = this.mMdl.entitys[i];
            if (entity == null) continue;
            let behaviors = entity.value.behaviors;
            if (behaviors == null) continue;
            for (let j = 0; j < behaviors.length; j++) {
                let behavior = behaviors[j];
                if (behavior == null) continue;
                behavior.value.update(buffer.delta);
            }
        }
        //运行搜索请求
        this.sFun.runSearch();
        for (let i = 0; i < this.mMdl.entitys.length; i++) {
            let entity = this.mMdl.entitys[i];
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

    /**清理上一帧的缓存数据 */
    private preClear() {
        //设置本次更新的随机种子
        this.mFun.seed(this.lastframe);
        this.sFun.classifyIndexBuf = [];
        //清空过滤规则缓存字典
        for (let value of this.sFun.filterMapArr) {
            value.clear();
        }
        this.sFun.filterMapArr = [];
        this.sFun.searchArr = [];
    }
    /**
     * 预处理数据
     * @param entity 
     */
    private preClassify() {
        let len = this.mMdl.entitys.length;
        for (let i = 0; i < len; i++) {
            let entity = this.mMdl.entitys[i];
            if (!entity) continue;
            //预先分类各个状态的数据
            let status = entity.value.status;
            let index = entity.value.index.value;
            if (!status) continue;
            let count = 0;
            let arr: number[];
            let stat: number;
            for (let i = 0; i < status.length; i++) {
                stat = status[i].value as number;
                while (stat >= 1) {
                    //如果标记为真
                    if ((stat & 1) != 0) {
                        arr = this.sFun.classifyIndexBuf[count];
                        if (!arr) {
                            arr = [];
                            this.sFun.classifyIndexBuf[count] = arr;
                        }
                        arr.push(index);
                    }
                    count += 1;
                    stat >>= 1;
                }
            }
        }
    }

    public push(packet: FrameData) {
        this.frameBuffer.push(packet);
    }
}