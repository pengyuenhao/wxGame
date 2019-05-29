"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Singleton_1 = require("./Singleton");
const fs = require("fs");
const PublicPath = "../public/";
const PrivatePath = "../private/";
class FileUtil extends Singleton_1.default {
    getName() {
        return "FileUtil";
    }
    static Instance() {
        return Singleton_1.default.getInstanceOrCreate(this);
    }
    /**
     * 返回本地的公共地址
     */
    static getPublicPath() {
        return PublicPath;
    }
    /**
     * 返回本地的私有地址
     */
    static getPrivatePath() {
        return PublicPath;
    }
    static read(url, type, isPublic = true) {
        return FileUtil.Instance().read(url, type, isPublic);
    }
    static write(url, data, isPublic = true) {
        return FileUtil.Instance().write(url, data, isPublic);
    }
    static readdir(path, isPublic = true) {
        return FileUtil.Instance().readdir(path, isPublic);
    }
    readdir(path, isPublic = true) {
        return new Promise((resolve) => {
            let prePath;
            if (isPublic) {
                prePath = PublicPath;
            }
            else {
                prePath = PrivatePath;
            }
            fs.readdir(prePath + path, (err, files) => {
                if (err) {
                    console.error(err);
                    resolve();
                    return;
                }
                resolve(files);
            });
        });
    }
    /**
     * 读文件
     */
    read(path, type, isPublic = true) {
        return new Promise((resolve) => {
            let prePath;
            if (isPublic) {
                prePath = PublicPath;
            }
            else {
                prePath = PrivatePath;
            }
            fs.readFile(prePath + path, (err, data) => {
                let result;
                if (err) {
                    //console.error(err);
                    resolve(null);
                }
                else {
                    if (type == "json" || type == "JSON") {
                        if (data.length == 0) {
                            resolve(null);
                        }
                        else {
                            try {
                                result = JSON.parse(data.toString());
                            }
                            catch (ex) {
                                console.error("[读取失败]" + prePath + path + "[详细]" + ex);
                            }
                        }
                    }
                    resolve(result);
                }
            });
        });
    }
    /**
     * 写文件
     * @param path 文件地址
     * @param data 数据对象
     * @returns 写入成功返回true,失败返回false
     */
    write(path, data, isPublic = true) {
        return new Promise((resolve) => {
            let prePath;
            if (isPublic) {
                prePath = PublicPath;
            }
            else {
                prePath = PrivatePath;
            }
            let str = JSON.stringify(data, null, '\t');
            fs.writeFile(prePath + path, str, (err) => {
                if (err) {
                    console.error(err);
                    resolve(false);
                }
                resolve(true);
            });
        });
    }
}
exports.default = FileUtil;
//# sourceMappingURL=FileUtil.js.map