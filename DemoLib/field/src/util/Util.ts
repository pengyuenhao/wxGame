import { isArray, isObject, isFunction } from "util";

/**工具模块 */
export namespace Utils {
    /**重新排序有效数组并返回有效列表 */
    export function GetValidArr<T>(arr: T[], writer?: cv.Writer, condition?: (value: T) => boolean, boolArr?: number[]): number[] {
        if (!arr || arr.length == 0) {
            if (writer != null) {
                writer.int32(0);
            }
            return [];
        }
        let result = [];
        //默认的条件判断函数
        if (!condition) condition = (value) => {
            return value != null;
        }
        let current;
        let count;
        let bit;
        let value;
        let len;
        len = arr.length;
        count = 0;
        bit = 0;
        current = -1;
        if (boolArr == null) {
            boolArr = [];
        }
        for (let i = 0; i < len; i++) {
            //查询当前所在检查范围
            if (count % 32 == 0) {
                boolArr.push(0);
                bit = 1;
                current += 1;
            }
            count += 1;
            value = arr[i];
            //根据给定的条件判断是否有效
            if (condition(value)) {
                result.push(i);
            } else {
                boolArr[current] += bit;
            }
            bit *= 2;
        }
        //自动填充
        if (writer != null) {
            //编码布尔列表值
            writer.int32(len);
            for (let i = 0; i < boolArr.length; i++) {
                //写入无符号的数据
                writer.uint32(boolArr[i]);
            }
        }
        return result;
    }
    /**
     * 解码比特列表并返回解码后的数组或数据是否存在的布尔数组
     * @param reader 
     * @param boolArr 
     */
    export function ParseValidArr<T>(reader: cv.Reader, method?: (isExist: boolean, i: number, arr: T[]) => T, cls?: new (len?: number) => Array<T>, boolArr?: number[]): T[] | any {
        //获取属性数量
        let count = reader.int32();
        let arr : Array<T>;
        if (cls == null) {
            arr = new Array(count);
        } else {
            arr = new cls(count);
        }
        //如果属性长度为0则直接返回
        if (count == 0) return arr;
        //是否使用默认的布尔数组
        if (boolArr == null) boolArr = [];
        //获取检查结果长度，等价于除以32
        let length = (count >> 5) + 1;
        let check;
        let tmp = 0;
        //获取检查结果
        for (let i = 0; i < length; i++) {
            //读取无符号的数据
            check = reader.uint32();
            //存在空值
            if (check != 0) {
                while (check > 0) {
                    //低位存在空值
                    if ((check & 1) != 0) {
                        //检查是否写入布尔
                        if (boolArr) boolArr.push(tmp);
                    }
                    tmp += 1;
                    //由于>>存在bug，这里使用除二并去掉小数部分的形式左移
                    check = Math.floor(check / 2);
                }
            }
        }
        let invoke: (isExist: boolean, i: number, arr: T[]) => any;
        if (method) {
            invoke = method;
        } else {
            invoke = (isExist: boolean) => {
                return isExist;
            }
        }

        let isExist: boolean;
        if (boolArr.length != 0) {
            //跳过无效值
            let skip = boolArr.shift();
            for (let i = 0; i < count; i++) {
                //跳过无效值
                if (skip != null && skip == i) {
                    skip = boolArr.shift();
                    isExist = false;
                } else {
                    isExist = true;
                }
                //检查是否调用函数
                arr[i] = invoke.call(this, isExist, i, arr);
            }
        } else {
            for (let i = 0; i < count; i++) {
                //检查是否调用函数
                arr[i] = invoke.call(this, true, i, arr);
            }
        }
        return arr;
    }
    /**
     * 克隆对象
     * @param obj 
     */
    export function Clone(obj): any {
        let loopMap = new Map();
        let cp = function (obj: any, depth: number) {
            if (!obj) return obj;
            let ins;
            if (depth) {
                //深度过大则说明溢出了
                if (depth > 100) {
                    return null;
                }
            } else {
                depth = 1;
            }
            //如果是数组
            if (isArray(obj)) {
                ins = [];
                for (let i = 0; i < (<Array<any>>obj).length; i++) {
                    ins.push(cp(obj[i], depth + 1));
                }
                return ins;
            }
            //是否为字典
            if (obj instanceof Map) {
                ins = new Map();
                obj.forEach((v, k) => {
                    ins.set(cp(k, depth + 1), cp(v, depth + 1));
                })
                return ins;
            }
            //如果是一个对象
            if (isObject(obj)) {
                //防止循环调用
                if (loopMap.has(obj)) {
                    return loopMap.get(obj);
                }
                //创建实例
                ins = new obj.constructor();
                //添加对象到循环字典
                loopMap.set(obj, ins);
                //属性名称
                let p;
                //属性值
                let q;
                for (let item in obj) {
                    p = item;
                    q = obj[item];
                    //跳过函数
                    if (isFunction(q)) continue;
                    ins[p] = cp(q, depth + 1);
                }
                return ins;
            }
            //直接复制函数，虽然这是一个引用值
            if (isFunction(obj)) {
                return obj;
            }
            //如果都不是
            return obj;
        }
        return cp(obj, 0)
    }
    /**
     * 对比两个对象之间的数值差异
     */
    export function Contrast(a, b, arr?: any[], isDetail?: boolean) {
        let loopMap = new Map();
        //差异数组
        //let arr = [];
        if (!arr) arr = [];
        let diff = function (objA: any, objB: any, depth: number, arr: any, root: any, prop: string | number, isDetail: boolean) {
            let isDiff;
            //是否汇报详细数据
            if (isDetail) {
                isDiff = true;
            } else {
                isDiff = false;
            }
            //报告
            let report: string = "";
            if (!objA) {
                //如果双方都为空
                if (!objB) {
                    report += "\"=\"";
                } else {
                    //置入差异值
                    arr.push({ root: root, prop: prop, a: objA, b: objB });
                    report += "\"!\"";
                    isDiff = true;
                }
                //是否汇报无差异部分
                if (!isDiff) report = "";
                return report;
            }
            if (depth) {
                //深度过大则说明溢出了
                if (depth > 100) {
                    return null;
                } else {
                    /*                     for (let i = 0; i < depth; i++) {
                                            report += "  ";
                                        } */
                }
            } else {
                depth = 1;
            }
            //如果是数组
            if (isArray(objA)) {
                //双方均为数组且长度一致
                if (isArray(objB) && objA.length == objB.length) {
                    //比较数组内部值
                    let len = objA.length;
                    let inside = "";
                    for (let i = 0; i < len; i++) {
                        let str = "";
                        str += diff(objA[i], objB[i], depth + 1, arr, objA, i, isDetail);
                        if (str != "") {
                            isDiff = true;
                            inside += str;
                            if (i != len - 1) inside += ",";
                        }
                    }
                    report += "[" + '\n' + inside + "]";
                } else {
                    arr.push({ root: root, prop: prop, a: objA, b: objB });
                    report += "\"!\"";
                    isDiff = true;
                }
                report += '\n';
                //是否汇报无差异部分
                if (!isDiff) report = "";
                return report;
            }
            //是否为字典
            if (objA instanceof Map) {
                //双方均为字典
                if (objB instanceof Map && objA.size == objB.size) {
                    let valueA = objA.values();
                    let valueB = objA.values();
                    let keyA = objA.keys();
                    let keyB = objA.keys();
                    let len = objA.size;
                    let inside = "";
                    for (let i = 0; i < len; i++) {
                        let str = ""
                        str += diff(keyA.next(), keyB.next(), depth + 1, arr, objA, i, isDetail);
                        if (str != "") isDiff = true;
                        inside += "\"key\" :" + str;
                        str = "";
                        str += diff(valueA.next(), valueB.next(), depth + 1, arr, objA, i, isDetail);
                        if (str != "") isDiff = true;
                        inside += "\"value\" :" + str;
                        if (isDiff) {
                            inside = "{" + '\n' + inside + "}"
                        }
                        if (i != len - 1) inside += ",";
                    }
                    report += "{" + '\n' + inside + "}";
                } else {
                    arr.push({ root: root, prop: prop, a: objA, b: objB });
                    report += "\"!\"";
                    isDiff = true;
                }
                report += '\n';
                //是否汇报无差异部分
                if (!isDiff) report = "";
                return report;
            }
            //如果是一个对象
            if (isObject(objA)) {
                //防止循环调用
                if (loopMap.has(objA)) {
                    return loopMap.get(objA);
                }
                if (isObject(objB)) {
                    //属性名称
                    let pArrA = [];
                    let pArrB = [];
                    let lenA = 0;
                    //属性值
                    let qArrA = [];
                    let qArrB = [];
                    let lenB = 0;

                    for (let item in objA) {
                        pArrA.push(item);
                        qArrA.push(objA[item]);
                        lenA += 1;
                    }
                    for (let item in objB) {
                        pArrB.push(item);
                        qArrB.push(objB[item]);
                        lenB += 1;
                    }
                    //检查长度是否一致
                    if (lenA == lenB) {
                        for (let i = 0; i < lenA; i++) {
                            if (pArrA[i] != pArrB[i]) {
                                arr.push({ root: root, prop: prop, a: objA, b: objB });
                                report += "\"!\"";
                                isDiff = true;
                                break;
                            }
                        }
                        //是否存在差异
                        if (!isDiff) {
                            let inside = "";
                            for (let i = 0; i < lenA; i++) {
                                let str = "";
                                str += diff(qArrA[i], qArrB[i], depth + 1, arr, objA, pArrA[i], isDetail);
                                if (str != "") {
                                    isDiff = true;
                                    inside += "\"" + pArrA[i] + "\" : " + str;
                                    //if (i != lenA - 1) inside += ",";
                                }
                            }
                            report += "{" + "\n" + inside + "}";
                        }
                    } else {
                        arr.push({ root: root, prop: prop, a: objA, b: objB });
                        report += "\"!\"";
                        isDiff = true;
                    }
                } else {
                    arr.push({ root: root, prop: prop, a: objA, b: objB });
                    report += "\"!\"";
                    isDiff = true;
                }
                report += '\n';
                //是否汇报无差异部分
                if (!isDiff) report = "";
                //添加对象到循环字典
                loopMap.set(objA, report);
                return report;
            }
            if (isFunction(objA)) {
                //跳过方法
                return report;
            }
            //如果都不是
            if (objA == objB) {
                report += "\"=\"";
            } else {
                arr.push({ root: root, prop: prop, a: objA, b: objB });
                report += "\"!\"";
                isDiff = true;
            }
            //是否汇报无差异部分
            if (!isDiff) report = "";
            return report;
        }
        return diff(a, b, 0, arr, null, null, isDetail);
    }

}