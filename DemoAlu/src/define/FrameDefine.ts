import { Type, Field } from "peng-field";

@Type("CommandData")
export class CommandData {
    /**
     * 指令的类型
     */
    @Field(String, "type")
    public type: string;
    /**
     * 指令执行的任务
     */
    @Field(String, "task")
    public task: string
    /**
     * 参数
    */
    @Field(Number, "value", Array)
    public value: number[];
}

@Type("PacketData")
export class PacketData {
    /**
     * 指令的发送者
     */
    @Field(Number, "actor")
    public actor: number;
    /**
     * 数据包携带的指令
    */
    @Field(CommandData, "actor", Array)
    public commands: CommandData[];
}

/**帧数据模型定义 */
@Type("FrameData")
export class FrameData {
    /**数据帧 */
    @Field(Number, "frame")
    frame: number;

    /**经过的时间 */
    @Field(Number, "delta")
    delta: number;

    @Field(PacketData, "packet", Array)
    packet: PacketData[];
}
