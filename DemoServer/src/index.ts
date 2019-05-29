import FileUtil from "./util/FileUtil";
import ConfigOption from "./config";
import { WebSocketUtil } from "./util/WebSocketUtil";
import { Vector2, Token } from "peng-field"

export class Main {
    constructor() {
        console.log("[Start]");

        this.init();
    }

    private async init() {
        let config: ConfigOption = await FileUtil.read("config.json", "json", false);
        if (config) {
            console.log("[Config]" + "<载入配置成功>");
        } else {
            console.log("[Config]" + "<载入配置失败>");
            return;
        }
        await WebSocketUtil.Instance().init(config.webSocketOption)
        WebSocketUtil.Instance().listen(String,(data,ws,index)=>{
            console.log("[接收消息]" + data);
        });
        WebSocketUtil.Instance().response(Number,(token,reply)=>{
            reply(666);
        });
        WebSocketUtil.Instance().response(Vector2,(token,reply)=>{
            reply(new Vector2(2,5));
        });
        WebSocketUtil.Instance().response(Token,(token,reply)=>{
            let value = new Token();
            value.time = Date.now();
            reply(value);
        })
        console.log("[Finish]");
    }
}
new Main();