import { Type } from "../decorator/TypeDecorator";
import { GetConverter } from "../decorator/ConvertDecorator";

/**
 * 结算属性
 */
@Type("PropData")
export class PropData<T> {
    /**类型索引值 */
    public serial: number;
    /**缓存数据，索引值为操作码 */
    public cache: T[];
    /**详细细分的类型索引 */
    public detail: number[];
    /**子数据值，索引值为操作码 */
    public children: PropData<T>[];
    public clear() {
        this.cache = [];
        this.children = [];
        this.detail = [];
    }
    constructor(cls: Function);
    constructor(serial: number);
    constructor();
    constructor() {
        let value = arguments[0];
        if (value != null) {
            if (typeof value == "number") {
                this.serial = value;
            } else {
                this.serial = GetConverter(value).getSerial();
            }
        }
        this.cache = [];
        this.children = [];
        this.detail = [];
    }
}
@Type("EventData")
export class EventData<T>{
    /**类型索引值 */
    public serial: number;
    public oldValue: T;
    public newValue: T;
    //public index : number;
    /**子数据值，索引值为操作码 */
    public children: EventData<T>[];
    public clear() {
        this.oldValue = null;
        this.newValue = null;
        this.children = [];
    }
    constructor(cls: Function);
    constructor(serial: number);
    constructor();
    constructor() {
        let value = arguments[0];
        if (value != null) {
            if (typeof value == "number") {
                this.serial = value;
            } else {
                this.serial = GetConverter(value).getSerial();
            }
        }
        this.children = [];
    }
}
/* 结算数据
 * 结算数据可以被序列化和反序列化
*/
@Type("DataSettle")
export class DataSettle<T> {
    public data: PropData<T>;
    public serial: number;
    public index: number;
    constructor(data: PropData<T>, index: number, serial: number) {
        this.index = index;
        this.serial = serial;
        this.data = data;
    }
}
/* 结算数据
 * 结算数据可以被序列化和反序列化
*/
@Type("EventSettle")
export class EventSettle<T> {
    public event: EventData<T>;
    public serial: number;
    public index: number;
    constructor(event: EventData<T>, index: number, serial: number) {
        this.index = index;
        this.serial = serial;
        this.event = event;
    }
}