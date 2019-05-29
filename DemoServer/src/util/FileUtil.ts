import Singleton from "./Singleton";
import * as fs from "fs";

const PublicPath = "../public/";
const PrivatePath = "../private/";

export default class FileUtil extends Singleton {
    protected getName(){
        return "FileUtil";
    }
    public static Instance() : FileUtil{
        return Singleton.getInstanceOrCreate(this);
    }
    /**
     * 返回本地的公共地址
     */
    public static getPublicPath():string{
        return PublicPath;
    }
    /**
     * 返回本地的私有地址
     */
    public static getPrivatePath():string{
        return PublicPath;
    }

    public static read(url, type, isPublic:boolean = true): Promise < any > {
        return FileUtil.Instance().read(url, type,isPublic);
    }
    public static write(url, data,isPublic:boolean = true): Promise < boolean > {
        return FileUtil.Instance().write(url, data , isPublic);
    }
    public static readdir(path, isPublic:boolean = true): Promise < any >{
        return FileUtil.Instance().readdir(path,isPublic);
    }
    public readdir(path, isPublic:boolean = true):Promise<any>{
        return new Promise((resolve)=>{
            let prePath;
            if(isPublic){
                prePath = PublicPath;
            }else{
                prePath = PrivatePath;
            }
            fs.readdir(prePath + path,(err,files)=>{
                if(err){
                    console.error(err);
                    resolve();
                    return;
                }
                resolve(files);
            });
        })
    }
    /**
     * 读文件
     */
    public read(path, type , isPublic:boolean = true): Promise < any > {
        return new Promise((resolve) => {
            let prePath;
            if(isPublic){
                prePath = PublicPath;
            }else{
                prePath = PrivatePath;
            }
            fs.readFile(prePath + path, (err, data) => {
                let result;
                if (err) {
                    //console.error(err);
                    resolve(null);
                }else{
                    if (type == "json" || type == "JSON") {
                        if(data.length==0){
                            resolve(null);
                        }else{
                            try{
                                result = JSON.parse(data.toString());
                            }catch(ex){
                                console.error("[读取失败]"+prePath + path +"[详细]"+ ex);
                            }
                        }
                    }
                    resolve(result);
                }
            })
        });
    }
    /**
     * 写文件
     * @param path 文件地址
     * @param data 数据对象
     * @returns 写入成功返回true,失败返回false
     */
    public write(path, data , isPublic:boolean = true): Promise < boolean > {
        return new Promise((resolve)=>{
            let prePath;
            if(isPublic){
                prePath = PublicPath;
            }else{
                prePath = PrivatePath;
            }
            let str = JSON.stringify(data, null, '\t');
            fs.writeFile(prePath + path, str , (err) => {
                if (err) {
                    console.error(err);
                    resolve(false);
                }
                resolve(true);
            })
        })

    }
}