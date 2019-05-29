"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const FileUtil_1 = require("./util/FileUtil");
const WebSocketUtil_1 = require("./util/WebSocketUtil");
const peng_field_1 = require("peng-field");
class Main {
    constructor() {
        console.log("[Start]");
        this.init();
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            let config = yield FileUtil_1.default.read("config.json", "json", false);
            if (config) {
                console.log("[Config]" + "<载入配置成功>");
            }
            else {
                console.log("[Config]" + "<载入配置失败>");
                return;
            }
            yield WebSocketUtil_1.WebSocketUtil.Instance().init(config.webSocketOption);
            WebSocketUtil_1.WebSocketUtil.Instance().listen(String, (data, ws, index) => {
                console.log("[接收消息]" + data);
            });
            WebSocketUtil_1.WebSocketUtil.Instance().response(Number, (token, reply) => {
                reply(666);
            });
            WebSocketUtil_1.WebSocketUtil.Instance().response(peng_field_1.Vector2, (token, reply) => {
                reply(new peng_field_1.Vector2(2, 5));
            });
            WebSocketUtil_1.WebSocketUtil.Instance().response(peng_field_1.Token, (token, reply) => {
                let value = new peng_field_1.Token();
                value.time = Date.now();
                reply(value);
            });
            console.log("[Finish]");
        });
    }
}
exports.Main = Main;
new Main();
//# sourceMappingURL=index.js.map