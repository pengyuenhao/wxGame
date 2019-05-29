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
const Singleton_1 = require("./Singleton");
const fs_1 = require("fs");
const http = require("http");
const https = require("https");
const websocket = require("ws");
const peng_field_1 = require("peng-field");
class WebSocketUtil extends Singleton_1.default {
    getName() {
        return "WebSocketUtil";
    }
    static Instance() {
        return Singleton_1.default.getInstanceOrCreate(this);
    }
    /**获取一个自增的序号 */
    get index() {
        if (this.time == -1) {
            this.time = 0;
        }
        else {
            this.time += 1;
        }
        return this.time;
    }
    ;
    /**获取从上一次获取以来平均每秒的网络流量消耗，单位是Kb/s */
    get Netflow() {
        let delta = Date.now() - this.lastStatTime;
        let value = {
            down: Math.round((9.765625 * this.downLoadNetflow / delta)) / 10,
            up: Math.round((9.765625 * this.upLoadNetflow / delta)) / 10
        };
        this.downLoadNetflow = 0;
        this.upLoadNetflow = 0;
        this.lastStatTime = Date.now();
        return value;
    }
    onConstructor() {
        this.time = 0;
        this.isClose = true;
        this.clsBindingMap = new Map();
        this.lastStatTime = Date.now();
        this.upLoadNetflow = 0;
        this.downLoadNetflow = 0;
    }
    /**初始化 */
    init(option) {
        return __awaiter(this, void 0, void 0, function* () {
            let server;
            if (option.port === 443) {
                server = https.createServer({
                    key: WebSocketUtil.Credentials.key,
                    cert: WebSocketUtil.Credentials.cert
                }).listen(443, () => {
                    console.log("[Socket]" + "<HTTPS>");
                });
            }
            else {
                server = http.createServer().listen({ port: option.port }, () => {
                    console.log("[Socket]" + "<HTTP>" + option.port);
                });
            }
            this.server = new websocket.Server({
                server: server
            });
            console.log("[Socket]" + "<创建服务端>");
            return new Promise((resolve) => {
                this.server.on("connection", (socket, request) => {
                    console.log("[Socket]" + "<链接成功>" + request.headers.origin + request.headers.host + "[端口]" + socket._socket.localPort + "/" + socket._socket.remotePort);
                    socket.onmessage = this.CallbackMessage.bind(this);
                    socket.onclose = this.CallbackClose.bind(this, socket);
                    resolve(true);
                });
            });
        });
    }
    connect(address, port) {
        let that = this;
        return new Promise((resolve) => {
            let addr;
            let pt;
            let addrCount;
            let portCount;
            //检查地址是否为数组
            if (Array.isArray(address)) {
                addr = address[0];
                addrCount = 0;
            }
            else {
                addr = address;
                addrCount = -1;
            }
            //检查端口是否为数组
            if (Array.isArray(port)) {
                pt = port[0];
                portCount = 0;
            }
            else {
                pt = port;
                portCount = -1;
            }
            //递归函数
            let tryConnect = function () {
                //尝试使用备用地址
                if (portCount >= 0 && portCount < port.length) {
                    pt = port[portCount];
                    addr = address[addrCount];
                    if (pt === 443) {
                        that.ws = new WebSocket("wss://" + addr + ":" + pt);
                    }
                    else {
                        that.ws = new WebSocket("ws://" + addr + ":" + pt);
                    }
                    that.ws.binaryType = "arraybuffer";
                    that.ws.onerror = tryConnect;
                    that.ws.onopen = (e) => {
                        that.isClose = false;
                        resolve(true);
                    };
                    that.ws.onclose = that.CallbackClose.bind(that);
                    that.ws.onmessage = that.CallbackMessage.bind(that);
                    //查找可用地址和端口
                    if (addrCount >= 0 && addrCount < address.length - 1) {
                        addrCount += 1;
                    }
                    else {
                        addrCount = 0;
                        portCount += 1;
                    }
                }
                else {
                    console.error("[链接失败]");
                    that.ws.close();
                    that.ws = null;
                    resolve(false);
                }
            };
            //开始尝试链接
            tryConnect();
        });
    }
    CallbackClose(socket, ev) {
        console.log("[Socket]" + "<链接断开>" + ev.code + "[端口]" + socket._socket.remotePort);
    }
    CallbackMessage(event) {
        let data = event.data;
        if (data == null) {
            return;
        }
        if (typeof data == "string") {
            console.log("[接收消息]" + data);
            return;
        }
        //解包
        let info = new PackInfo();
        let buffer = new Uint8Array(event.data);
        let reader = PackInfo.unpack(buffer, info);
        //记录下载字节数
        this.downLoadNetflow += buffer.byteLength;
        let converter = peng_field_1.GetConverter(info.serial);
        let binding = this.getBinding(info.type);
        if (binding != null) {
            let decoded = converter.from(reader, converter.cls);
            let len = binding.onMessageArr.length;
            for (let i = 0; i < len; i++) {
                binding.onMessageArr[i].call(this, decoded, event.target, info.index);
            }
            //单次执行的监听
            len = binding.onceMessageArr.length;
            for (let i = 0; i < len; i++) {
                binding.onceMessageArr[i].call(this, decoded, event.target, info.index);
            }
            binding.onceMessageArr.length = 0;
            len = binding.onRequestBindingArr.length;
            for (let i = 0; i < len; i++) {
                let request = binding.onRequestBindingArr[i];
                //如果收到的包是请求发出的特征包
                if (request && request.index == info.reply) {
                    request.method.call(this, decoded, event.target);
                    if (request.isOnce) {
                        //移除仅执行一次的值
                        binding.onRequestBindingArr[i] = null;
                        //记录被移除的值
                        binding.onRequestRemoveArr.push(i);
                    }
                    //已经找到正确的序号
                    break;
                }
            }
        }
    }
    listen(cls, callback, isOnce = false, isRequest = false) {
        let serial = peng_field_1.GetSerial(cls);
        let binding = this.getBinding(serial);
        if (isRequest) {
            let index;
            let request = new RequestBinding();
            request.method = callback;
            request.overtime = 10;
            request.isOnce = isOnce;
            //如果有空位
            if (binding.onRequestRemoveArr.length > 0) {
                index = binding.onRequestRemoveArr.pop();
                binding.onRequestBindingArr[index] = request;
            }
            else {
                binding.onRequestBindingArr.push(request);
            }
            return request;
        }
        else {
            //是否只执行一次
            if (isOnce) {
                binding.onceMessageArr.push(callback);
            }
            else {
                binding.onMessageArr.push(callback);
            }
            return null;
        }
    }
    /**
    * 请求数据
    */
    request(cls, token, isOnce = true) {
        let that = this;
        //如果回调无效则不创建
        return new Promise((resolve) => {
            let binding;
            let info;
            let type = peng_field_1.GetSerial(cls);
            let serial = peng_field_1.GetSerialByValue(token);
            //这里使用指定的序列号和时间来发送
            let response = {
                //标记不是回复信息
                index: -1,
                type: type,
                serial: serial
            };
            //Raven.captureMessage("[R]"+CONST_RAND+"[建立发送请求]");
            //如果数据发送失败则直接返回请求失败
            info = that.send(token, response);
            if (info) {
                binding = that.listen(cls, resolve, isOnce, true);
                binding.index = info.index;
                binding.cls = cls;
            }
            else {
                resolve(null);
            }
        });
    }
    response(cls, callback) {
        let that = this;
        this.listen(cls, (data, ws, index) => {
            callback(data, (result) => {
                //根据回复的数据类型指定序列值
                let type = peng_field_1.GetSerial(cls);
                let serial = peng_field_1.GetSerialByValue(result);
                //这里使用指定的序列号和时间来发送
                let response = {
                    index: index,
                    type: type,
                    serial: serial
                };
                //console.log("[发送]"+time + "[S]" + serial + "[R]"+(result?result.toString?result.toString():result:result));
                that.send(result, response, ws);
            }, ws);
        });
    }
    send(data, response, ws) {
        //不发送未处于开发状态的接口
        if (ws != null && ws.OPEN == 0) {
            return null;
        }
        //获取对象的类型序列值
        let serial;
        let type;
        let reply;
        let index;
        //如果未指定序列号时
        if (!response) {
            reply = -1;
            type = peng_field_1.GetSerialByValue(data);
            serial = type;
        }
        else {
            type = response.type;
            reply = response.index;
            serial = response.serial;
        }
        let info = new PackInfo();
        info.index = index;
        info.type = type;
        info.reply = reply;
        info.serial = serial;
        let converter = peng_field_1.GetConverter(serial);
        let buffer;
        let writer = PackInfo.pack(info);
        if (data != null) {
            converter.to(writer, data, converter.cls);
        }
        buffer = writer.finish();
        try {
            if (!ws) {
                this.server.clients.forEach((ws) => {
                    //这里注意处理一下处于链接和关闭状态的接口
                    if (ws.OPEN != 0) {
                        ws.send(buffer);
                        //记录上传字节数
                        this.upLoadNetflow += buffer.byteLength;
                    }
                });
            }
            else {
                ws.send(buffer);
                //记录上传字节数
                this.upLoadNetflow += buffer.byteLength;
            }
        }
        catch (ex) {
            console.error(ex);
        }
    }
    getBinding(serial) {
        let binding = this.clsBindingMap.get(serial);
        if (binding == null) {
            let cls = peng_field_1.GetCtor(serial);
            let name = peng_field_1.GetType(serial);
            let converter = peng_field_1.GetConverter(serial);
            binding = new ClassBinding();
            binding.onMessageArr = [];
            binding.onceMessageArr = [];
            binding.onRequestBindingArr = [];
            binding.onRequestRemoveArr = [];
            binding.name = name;
            binding.serial = serial;
            binding.cls = cls;
            binding.converter = converter;
            this.clsBindingMap.set(serial, binding);
        }
        return binding;
    }
}
//SSL
WebSocketUtil.Credentials = {
    key: fs_1.readFileSync('../private/ssl/215021224260713.key'),
    cert: fs_1.readFileSync('../private/ssl/215021224260713.pem')
};
exports.WebSocketUtil = WebSocketUtil;
class ResponseBinding {
}
class RequestBinding {
}
class ClassBinding {
}
/**
 * 封包信息
 */
class PackInfo {
    static pack(info) {
        let writer = peng_field_1.Writer.create();
        writer.int32(info.type);
        writer.int32(info.index);
        writer.int32(info.serial);
        writer.sint32(info.reply);
        return writer;
    }
    static unpack(data, info) {
        let reader = new peng_field_1.Reader(data);
        info.type = reader.int32();
        info.index = reader.int32();
        info.serial = reader.int32();
        info.reply = reader.sint32();
        return reader;
    }
}
//# sourceMappingURL=WebSocketUtil.js.map