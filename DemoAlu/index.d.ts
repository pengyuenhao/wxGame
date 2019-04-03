export = alu;
declare module alu {
    const CONST_MessageBinder: any;
    /**
     * 获取版本号
     */
    function version(): string;

    /**静态编码函数 */
    function To(value: any, writer?: Writer): Uint8Array;
    function ToShell(value: ISettler<any>, writer?: Writer): Uint8Array
    /**静态解码函数 */
    function From<T>(data: Uint8Array, reader?: Reader): T;
    function FromShell<T>(data: Uint8Array, reader?: Reader): ISettler<T>;
    /**转换规则装饰器 */
    function Convert(cls: Function, type?: string);
    /**类型标记装饰器 */
    function Type(type: string): Function;
    /**转换规则属性标记 */
    function Code(type: Function, identifyName: string, isArray?: boolean): Function;

    /**构造函数，根据指定的名称构造对应的实例 */
    function Ctor(cls: new () => any): any;
    function Ctor(type: string): any;
    function Ctor(value: any);
    /**通过类型名称获取构造函数 */
    function GetCtorByType(type: string): Function;
    /**获取类型名称 */
    function GetType(serial: number): string;
    function GetType(cls: new (...any: any[]) => any): string;
    /**获取构造类型 */
    function GetCtorByValue(value: any): new () => any;
    /**获取类型名称 */
    function GetTypeByValue(value: any): string;
    function GetSerial(value: Object): number;
    function GetSerial(cls: Function): number;

    function GetSerialByValue(value: any): number;

    function GetCtor(serial: number): new (...any: any[]) => any;
    function GetCtor(type: string): new (...any: any[]) => any;
    /**获取规则转换器 */
    function GetConverter<T>(name: string): ISettleConverter<T>;
    function GetConverter<T>(cls: Function): ISettleConverter<T>;
    function GetConverter<T>(serial: number): ISettleConverter<T>;

    /**获取结算规则创建方法 */
    function GetCtorOfSettler(cls: Function): new (value: any, index: number, parent: IParent<any>) => IOperate<any>;
    /**获取结算规则 */
    function GetSettler<T>(value: T, cls: Function, index?: number, parent?: IParent<T>): IOperate<T>;

    class RootMain {
        public context: any;
        public entitys: IEvent<EntityData>[];
        public frameBuffer: FrameData[];
        public lastframe: number;
        public cmdMap: Map<string, Function>;
        public init();
        public start();
        public update();
        public push(packet: FrameData);
        public on(event: "Enter" | "Leave", listen: Function);
        public register(entity: IEvent<EntityData>);
    }
    class WorldBehavior extends BehaviorAttribute<EntityData> {
        position: IEvent<Vector2>;
        missile: IEventArray<Missile>;
    }
    class PlayerBehavior extends BehaviorAttribute<EntityData> {
        position: IEvent<Vector2>;
    }
    class EntityData extends RootObject<EntityData> {

    }
    class CommandData {
        /**
         * 指令的类型
         */
        public type: string;
        /**
         * 指令执行的任务
         */
        public task: string
        /**
         * 参数
        */
        public value: number[];
    }

    class PacketData {
        /**
         * 指令的发送者
         */
        public actor: number;
        /**
         * 数据包携带的指令
        */
        public commands: CommandData[];
    }

    /**帧数据模型定义 */
    class FrameData {
        /**数据帧 */
        frame: number;

        /**经过的时间 */
        delta: number;

        packet: PacketData[];
    }

    class InitData {
        id: number;
        worldFrame: number;
        systemTime: number;
        entitys: Uint8Array;
    }
    class InitInfo {
        id: number;
        systemTime: number;
    }
    interface IOperateArray<T> extends Array<IOperate<T>>, IEvent<T> {
        /**添加对象到数组队尾 */
        add(value: T, index?: number): IOperateArray<T>;
        /**移除数组指定索引的值 */
        remove(index: number): IOperateArray<T>;

        on(caller: any, listener: (value: IEvent<T>, old: T, index: number) => void);
    }
    interface IConverter<T> {
        cls: new () => T;
        /**转换对象为字节数组方法 */
        to(writer: Writer, value: T, cls?: Function): void;
        /**转换字节数组为对象方法 */
        from(reader: Reader, cls?: Function): T;
        /**解析对象方法 */
        parse(obj: any, cls?: Function): T;
        /**转为JSON文本 */
        json(obj: any, cls?: Function): string;
    }
    interface ISettleConverter<T> extends IConverter<T> {
        serial: number;
        settler: (value: T, index?: number, parent?: IParent<T>) => IOperate<T>;
        /**转换封装对象为字节数组的方法 */
        toShell(writer: Writer, value: IValue<T>, cls?: Function);
        /**转换字节数组为对象并且封装的方法 */
        fromShell(reader: Reader, cls?: Function, index?: number, parent?: IParent<T>): IOperate<T>;
        /**解析对象并封装在可结算外壳内的方法 */
        parseShell(obj: any, cls?: Function, index?: number, parent?: IParent<T>): IOperate<T>;
        /**转为JSON文本 */
        jsonShell(obj: IValue<T>, cls?: Function): string;
    }
    /**
 * 结算属性，这里相当于接口，主要提供代码提示部分
 * 所有经过Field解码的公共值都会被封装进结算属性里
 * 结算属性有+，-，*，/，=，几种操作方法，任何操作均不改变Get值，只在统一时刻进行结算
 */
    interface IOperate<T> extends ISettler<T> {
        //对于不同的值类型应该有不同的操作方法
        add(value?: T): IOperate<T>;
        sub(value?: T): IOperate<T>;
        mul(value?: T): IOperate<T>;
        div(value?: T): IOperate<T>;

        /**等于方法优先度最高，如果使用了等于，则会在结算时忽略其他操作，优先级高的将会作为实际结果 */
        eq(value: T): IOperate<T>;
    }
    interface ISkill {
        /**实体单位 */
        entity: ISettler<RootObject<any>>;
        /**技能更新周期性检查函数 */
        check();
        /**技能首次初始化执行函数 */
        init();
        /**技能在首次启用时执行的函数 */
        enable();
    }
    /** Wire format reader using `Uint8Array` if available, otherwise `Array`. */
    class Reader {

        /**
         * Constructs a new reader instance using the specified buffer.
         * @param buffer Buffer to read from
         */
        constructor(buffer: Uint8Array);

        /** Read buffer. */
        public buf: Uint8Array;

        /** Read buffer position. */
        public pos: number;

        /** Read buffer length. */
        public len: number;

        /**
         * Creates a new reader using the specified buffer.
         * @param buffer Buffer to read from
         * @returns A {@link BufferReader} if `buffer` is a Buffer, otherwise a {@link Reader}
         * @throws {Error} If `buffer` is not a valid buffer
         */
        public static create(buffer: (Uint8Array | Buffer)): (Reader | BufferReader);

        /**
         * Reads a varint as an unsigned 32 bit value.
         * @returns Value read
         */
        public uint32(): number;

        /**
         * Reads a varint as a signed 32 bit value.
         * @returns Value read
         */
        public int32(): number;

        /**
         * Reads a zig-zag encoded varint as a signed 32 bit value.
         * @returns Value read
         */
        public sint32(): number;

        /**
         * Reads a varint as a signed 64 bit value.
         * @returns Value read
         */
        public int64(): Long;

        /**
         * Reads a varint as an unsigned 64 bit value.
         * @returns Value read
         */
        public uint64(): Long;

        /**
         * Reads a zig-zag encoded varint as a signed 64 bit value.
         * @returns Value read
         */
        public sint64(): Long;

        /**
         * Reads a varint as a boolean.
         * @returns Value read
         */
        public bool(): boolean;

        /**
         * Reads fixed 32 bits as an unsigned 32 bit integer.
         * @returns Value read
         */
        public fixed32(): number;

        /**
         * Reads fixed 32 bits as a signed 32 bit integer.
         * @returns Value read
         */
        public sfixed32(): number;

        /**
         * Reads fixed 64 bits.
         * @returns Value read
         */
        public fixed64(): Long;

        /**
         * Reads zig-zag encoded fixed 64 bits.
         * @returns Value read
         */
        public sfixed64(): Long;

        /**
         * Reads a float (32 bit) as a number.
         * @returns Value read
         */
        public float(): number;

        /**
         * Reads a double (64 bit float) as a number.
         * @returns Value read
         */
        public double(): number;

        /**
         * Reads a sequence of bytes preceeded by its length as a varint.
         * @returns Value read
         */
        public bytes(): Uint8Array;

        /**
         * Reads a string preceeded by its byte length as a varint.
         * @returns Value read
         */
        public string(): string;

        /**
         * Skips the specified number of bytes if specified, otherwise skips a varint.
         * @param [length] Length if known, otherwise a varint is assumed
         * @returns `this`
         */
        public skip(length?: number): Reader;

        /**
         * Skips the next element of the specified wire type.
         * @param wireType Wire type received
         * @returns `this`
         */
        public skipType(wireType: number): Reader;
    }
    /** Wire format reader using node buffers. */
    class BufferReader extends Reader {

        /**
         * Constructs a new buffer reader instance.
         * @param buffer Buffer to read from
         */
        constructor(buffer: Buffer);

        /**
         * Reads a sequence of bytes preceeded by its length as a varint.
         * @returns Value read
         */
        public bytes(): Buffer;
    }
    class Writer {
        /** Constructs a new writer instance. */
        constructor();

        /** Current length. */
        public len: number;

        /** Operations head. */
        public head: object;

        /** Operations tail */
        public tail: object;

        /** Linked forked states. */
        public states: (object | null);

        /**
         * Creates a new writer.
         * @returns A {@link BufferWriter} when Buffers are supported, otherwise a {@link Writer}
         */
        public static create(): (BufferWriter | Writer);

        /**
         * Allocates a buffer of the specified size.
         * @param size Buffer size
         * @returns Buffer
         */
        public static alloc(size: number): Uint8Array;

        /**
         * Writes an unsigned 32 bit value as a varint.
         * @param value Value to write
         * @returns `this`
         */
        public uint32(value: number): Writer;

        /**
         * Writes a signed 32 bit value as a varint.
         * @param value Value to write
         * @returns `this`
         */
        public int32(value: number): Writer;

        /**
         * Writes a 32 bit value as a varint, zig-zag encoded.
         * @param value Value to write
         * @returns `this`
         */
        public sint32(value: number): Writer;

        /**
         * Writes an unsigned 64 bit value as a varint.
         * @param value Value to write
         * @returns `this`
         * @throws {TypeError} If `value` is a string and no long library is present.
         */
        public uint64(value: (Long | number | string)): Writer;

        /**
         * Writes a signed 64 bit value as a varint.
         * @param value Value to write
         * @returns `this`
         * @throws {TypeError} If `value` is a string and no long library is present.
         */
        public int64(value: (Long | number | string)): Writer;

        /**
         * Writes a signed 64 bit value as a varint, zig-zag encoded.
         * @param value Value to write
         * @returns `this`
         * @throws {TypeError} If `value` is a string and no long library is present.
         */
        public sint64(value: (Long | number | string)): Writer;

        /**
         * Writes a boolish value as a varint.
         * @param value Value to write
         * @returns `this`
         */
        public bool(value: boolean): Writer;

        /**
         * Writes an unsigned 32 bit value as fixed 32 bits.
         * @param value Value to write
         * @returns `this`
         */
        public fixed32(value: number): Writer;

        /**
         * Writes a signed 32 bit value as fixed 32 bits.
         * @param value Value to write
         * @returns `this`
         */
        public sfixed32(value: number): Writer;

        /**
         * Writes an unsigned 64 bit value as fixed 64 bits.
         * @param value Value to write
         * @returns `this`
         * @throws {TypeError} If `value` is a string and no long library is present.
         */
        public fixed64(value: (Long | number | string)): Writer;

        /**
         * Writes a signed 64 bit value as fixed 64 bits.
         * @param value Value to write
         * @returns `this`
         * @throws {TypeError} If `value` is a string and no long library is present.
         */
        public sfixed64(value: (Long | number | string)): Writer;

        /**
         * Writes a float (32 bit).
         * @param value Value to write
         * @returns `this`
         */
        public float(value: number): Writer;

        /**
         * Writes a double (64 bit float).
         * @param value Value to write
         * @returns `this`
         */
        public double(value: number): Writer;

        /**
         * Writes a sequence of bytes.
         * @param value Buffer or base64 encoded string to write
         * @returns `this`
         */
        public bytes(value: (Uint8Array | string)): Writer;

        /**
         * Writes a string.
         * @param value Value to write
         * @returns `this`
         */
        public string(value: string): Writer;

        /**
         * Forks this writer's state by pushing it to a stack.
         * Calling {@link Writer#reset|reset} or {@link Writer#ldelim|ldelim} resets the writer to the previous state.
         * @returns `this`
         */
        public fork(): Writer;

        /**
         * Resets this instance to the last state.
         * @returns `this`
         */
        public reset(): Writer;

        /**
         * Resets to the last state and appends the fork state's current write length as a varint followed by its operations.
         * @returns `this`
         */
        public ldelim(): Writer;

        /**
         * Finishes the write operation.
         * @returns Finished buffer
         */
        public finish(): Uint8Array;
    }
    /** Wire format writer using node buffers. */
    class BufferWriter extends Writer {

        /** Constructs a new buffer writer instance. */
        constructor();

        /**
         * Finishes the write operation.
         * @returns Finished buffer
         */
        public finish(): Buffer;

        /**
         * Allocates a buffer of the specified size.
         * @param size Buffer size
         * @returns Buffer
         */
        public static alloc(size: number): Buffer;
    }
    /**
    * Any compatible Buffer instance.
    * This is a minimal stand-alone definition of a Buffer instance. The actual type is that exported by node's typings.
    */
    interface Buffer extends Uint8Array {
    }
    class SettleAttribute<T>{
        /**转换规则索引 */
        public converter: number;
        /**数据值，索引值为操作码 */
        public data: T[];
        constructor(converter: number | Function);
    }
    class SettleData<T>{
        public data: any[];
        public serial: number;
        public uuid: Long;
        public index: number;
        constructor(data: any[], index: number, serial: number, priority?: Long);
    }
    interface ISettler<T> extends IEvent<T> {
        value: T;
        ctor();
        //对于不同的值类型应该有不同的操作方法
        add(value?: T): ISettler<T>;
        sub(value?: T): ISettler<T>;
        mul(value?: T): ISettler<T>;
        div(value?: T): ISettler<T>;
        push(value?: T): ISettler<T>;
        pop(value?: T): ISettler<T>;
        /**合并操作依据优先级进行，在处理异步的操作过程时，可以使用一个值作为优先级判定标准，一般推荐使用UUID值 */
        merge(data: SettleData<T>): SettleData<T>;
        execute(cache?: any);
        /**结算数据获取操作数组 */
        settle(): SettleData<T>;
        /**等于方法优先度最高，如果使用了等于，则会在结算时忽略其他操作，优先级高的将会作为实际结果 */
        eq(value: T): ISettler<T>;
    }
    /**默认基础转换器 */
    class Converter<T> implements IConverter<T>{
        public cls: new () => T;

        public to(writer: Writer, value: T);
        public from(reader: Reader, cls?: Function): T;
        /**
         * 默认的对象解析方法
        */
        public parse(value: T, cls?: Function): T;

        public json(value: T): string;
    }
    /**基础类型转换规则，基础类型的属性不再具有结算功能，也不可以从其中获取父级引用 */
    class BaseConverter<T> extends Converter<T>{
        public parse(value: T);
    }
    class Long {
        /**
         * Constructs a 64 bit two's-complement integer, given its low and high 32 bit values as signed integers. See the from* functions below for more convenient ways of constructing Longs.
         */
        constructor(low: number, high?: number, unsigned?: boolean);

        /**
         * Maximum unsigned value.
         */
        static MAX_UNSIGNED_VALUE: Long;

        /**
         * Maximum signed value.
         */
        static MAX_VALUE: Long;

        /**
         * Minimum signed value.
         */
        static MIN_VALUE: Long;

        /**
         * Signed negative one.
         */
        static NEG_ONE: Long;

        /**
         * Signed one.
         */
        static ONE: Long;

        /**
         * Unsigned one.
         */
        static UONE: Long;

        /**
         * Unsigned zero.
         */
        static UZERO: Long;

        /**
         * Signed zero
         */
        static ZERO: Long;

        /**
         * The high 32 bits as a signed value.
         */
        high: number;

        /**
         * The low 32 bits as a signed value.
         */
        low: number;

        /**
         * Whether unsigned or not.
         */
        unsigned: boolean;

        /**
         * Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits. Each is assumed to use 32 bits.
         */
        static fromBits(lowBits: number, highBits: number, unsigned?: boolean): Long;

        /**
         * Returns a Long representing the given 32 bit integer value.
         */
        static fromInt(value: number, unsigned?: boolean): Long;

        /**
         * Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.
         */
        static fromNumber(value: number, unsigned?: boolean): Long;

        /**
         * Returns a Long representation of the given string, written using the specified radix.
         */
        static fromString(str: string, unsigned?: boolean | number, radix?: number): Long;

        /**
         * Creates a Long from its byte representation.
         */
        static fromBytes(bytes: number[], unsigned?: boolean, le?: boolean): Long;

        /**
         * Creates a Long from its little endian byte representation.
         */
        static fromBytesLE(bytes: number[], unsigned?: boolean): Long;

        /**
         * Creates a Long from its little endian byte representation.
         */
        static fromBytesBE(bytes: number[], unsigned?: boolean): Long;

        /**
         * Tests if the specified object is a Long.
         */
        static isLong(obj: any): boolean;

        /**
         * Converts the specified value to a Long.
         */
        static fromValue(val: Long | number | string | { low: number, high: number, unsigned: boolean }): Long;

        /**
         * Returns the sum of this and the specified Long.
         */
        add(addend: number | Long | string): Long;

        /**
         * Returns the bitwise AND of this Long and the specified.
         */
        and(other: Long | number | string): Long;

        /**
         * Compares this Long's value with the specified's.
         */
        compare(other: Long | number | string): number;

        /**
         * Compares this Long's value with the specified's.
         */
        comp(other: Long | number | string): number;

        /**
         * Returns this Long divided by the specified.
         */
        divide(divisor: Long | number | string): Long;

        /**
         * Returns this Long divided by the specified.
         */
        div(divisor: Long | number | string): Long;

        /**
         * Tests if this Long's value equals the specified's.
         */
        equals(other: Long | number | string): boolean;

        /**
         * Tests if this Long's value equals the specified's.
         */
        eq(other: Long | number | string): boolean;

        /**
         * Gets the high 32 bits as a signed integer.
         */
        getHighBits(): number;

        /**
         * Gets the high 32 bits as an unsigned integer.
         */
        getHighBitsUnsigned(): number;

        /**
         * Gets the low 32 bits as a signed integer.
         */
        getLowBits(): number;

        /**
         * Gets the low 32 bits as an unsigned integer.
         */
        getLowBitsUnsigned(): number;

        /**
         * Gets the number of bits needed to represent the absolute value of this Long.
         */
        getNumBitsAbs(): number;

        /**
         * Tests if this Long's value is greater than the specified's.
         */
        greaterThan(other: Long | number | string): boolean;

        /**
         * Tests if this Long's value is greater than the specified's.
         */
        gt(other: Long | number | string): boolean;

        /**
         * Tests if this Long's value is greater than or equal the specified's.
         */
        greaterThanOrEqual(other: Long | number | string): boolean;

        /**
         * Tests if this Long's value is greater than or equal the specified's.
         */
        gte(other: Long | number | string): boolean;

        /**
         * Tests if this Long's value is even.
         */
        isEven(): boolean;

        /**
         * Tests if this Long's value is negative.
         */
        isNegative(): boolean;

        /**
         * Tests if this Long's value is odd.
         */
        isOdd(): boolean;

        /**
         * Tests if this Long's value is positive.
         */
        isPositive(): boolean;

        /**
         * Tests if this Long's value equals zero.
         */
        isZero(): boolean;

        /**
         * Tests if this Long's value is less than the specified's.
         */
        lessThan(other: Long | number | string): boolean;

        /**
         * Tests if this Long's value is less than the specified's.
         */
        lt(other: Long | number | string): boolean;

        /**
         * Tests if this Long's value is less than or equal the specified's.
         */
        lessThanOrEqual(other: Long | number | string): boolean;

        /**
         * Tests if this Long's value is less than or equal the specified's.
         */
        lte(other: Long | number | string): boolean;

        /**
         * Returns this Long modulo the specified.
         */
        modulo(other: Long | number | string): Long;

        /**
         * Returns this Long modulo the specified.
         */
        mod(other: Long | number | string): Long;

        /**
         * Returns the product of this and the specified Long.
         */
        multiply(multiplier: Long | number | string): Long;

        /**
         * Returns the product of this and the specified Long.
         */
        mul(multiplier: Long | number | string): Long;

        /**
         * Negates this Long's value.
         */
        negate(): Long;

        /**
         * Negates this Long's value.
         */
        neg(): Long;

        /**
         * Returns the bitwise NOT of this Long.
         */
        not(): Long;

        /**
         * Tests if this Long's value differs from the specified's.
         */
        notEquals(other: Long | number | string): boolean;

        /**
         * Tests if this Long's value differs from the specified's.
         */
        neq(other: Long | number | string): boolean;

        /**
         * Returns the bitwise OR of this Long and the specified.
         */
        or(other: Long | number | string): Long;

        /**
         * Returns this Long with bits shifted to the left by the given amount.
         */
        shiftLeft(numBits: number | Long): Long;

        /**
         * Returns this Long with bits shifted to the left by the given amount.
         */
        shl(numBits: number | Long): Long;

        /**
         * Returns this Long with bits arithmetically shifted to the right by the given amount.
         */
        shiftRight(numBits: number | Long): Long;

        /**
         * Returns this Long with bits arithmetically shifted to the right by the given amount.
         */
        shr(numBits: number | Long): Long;

        /**
         * Returns this Long with bits logically shifted to the right by the given amount.
         */
        shiftRightUnsigned(numBits: number | Long): Long;

        /**
         * Returns this Long with bits logically shifted to the right by the given amount.
         */
        shru(numBits: number | Long): Long;

        /**
         * Returns the difference of this and the specified Long.
         */
        subtract(subtrahend: number | Long | string): Long;

        /**
         * Returns the difference of this and the specified Long.
         */
        sub(subtrahend: number | Long | string): Long;

        /**
         * Converts the Long to a 32 bit integer, assuming it is a 32 bit integer.
         */
        toInt(): number;

        /**
         * Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa).
         */
        toNumber(): number;

        /**
         * Converts this Long to its byte representation.
         */

        toBytes(le?: boolean): number[];

        /**
         * Converts this Long to its little endian byte representation.
         */

        toBytesLE(): number[];

        /**
         * Converts this Long to its big endian byte representation.
         */

        toBytesBE(): number[];

        /**
         * Converts this Long to signed.
         */
        toSigned(): Long;

        /**
         * Converts the Long to a string written in the specified radix.
         */
        toString(radix?: number): string;

        /**
         * Converts this Long to unsigned.
         */
        toUnsigned(): Long;

        /**
         * Returns the bitwise XOR of this Long and the given one.
         */
        xor(other: Long | number | string): Long;
    }
    /**二维向量定义 */
    class Vector2 {
        public x: number;
        public y: number;
        constructor(v: Vector2);
        constructor(x: number, y: number);
        constructor(arr: number[]);
        constructor();
        /**
         * 从一般数组构造向量数组
         */
        public static fromNumberArray(v: number[]): Vector2[];
        /**(0, 0) */
        public static readonly Zero: Vector2;
        /**(1, 1) */
        public static readonly One: Vector2;
        /**(0, -1) */
        public static readonly Down: Vector2;
        /**(-1, 0) */
        public static readonly Left: Vector2;
        /**(1, 0) */
        public static readonly Right: Vector2;
        /**(0, 1) */
        public static readonly Up: Vector2;
        /**返回两个向量之间的弧度 */
        public static Euler(from: Vector2, to: Vector2);
        /**返回两个向量之间的角度 */
        public static Angle(from: Vector2, to: Vector2);
        /**返回两个向量之间的距离 */
        public static Distance(from: Vector2, to: Vector2);
        /**返回两个向量的叉积 */
        public static Cross(a: Vector2, b: Vector2): number;
        /**返回两个向量的点积 */
        public static Dot(a: Vector2, b: Vector2): number;
        /**转为字符串形式 */
        public toString(): string;
        /**转为数组形式 */
        public toNumberArray(): number[];
        /**判断向量是否均为0值 */
        public isZero(): boolean;
        /**判断向量是否均为1值 */
        public isOne(): boolean;
        /**判断向量是否为单位向量 */
        public isNorm(): boolean;
        /**返回标准单位向量 */
        public readonly normalized: Vector2;
        /**使向量标准化，返回原向量 */
        public toNormalize(): Vector2;
        /**向量之间的距离，返回一个定点数 */
        public distance(v: Vector2);
        /**向量之间的欧拉角，返回一个定点数，范围在-π到π之间 */
        public euler(v: Vector2);
        /**返回两个向量之间的角度 */
        public angle(v: Vector2);
        /**缩放向量的值 */
        public scale(v: number): Vector2;
        /**向量加法,返回一个新的向量 */
        public add(v: Vector2): Vector2;
        /**向量减法，返回一个新的向量*/
        public sub(v: Vector2): Vector2;
        /**向量反向，返回一个新的向量*/
        public neg(): Vector2;
        /**定义的向量普通乘法，相当于内部值互相乘 */
        public mul(v: Vector2): Vector2;
        /**定义的向量普通除法，相当于内部值互相除 */
        public div(v: Vector2): Vector2;

        /**叉积运算，返回结果值 */
        public cross(v: Vector2): number;
        /**点积运算，返回结果值 */
        public dot(v: Vector2): number;
        /**返回向量模长的平方 */
        public sqrMagnitude(): number;
        /**返回模长 */
        public magnitude(): number;
    }
    /**异步接口*/
    interface IAsync {
        /**异步完成时执行的回调 */
        method: (result: any) => void;
        /**注册异步执行的方法*/
        then(method: (result: any) => void): IAsync;
    }
    interface IRequestAsync {
        request(args: any): IAsync;
        resolve(...args: any[]);
        then(method: (resolve: (result: any) => void, request: any[], args: any[]) => void): IAsync;
    }
    class ByteArray {
        public push(unit8Arr: Uint8Array);
        public finish(): Uint8Array;
        public read(len: number);
    }
    class TypeObject {
        //标记的实体数据类型
        public type: ISettler<string>;
    }
    class StatusAttribute extends Number { }
    class SkillAttribute implements ISkill {
        public entity: ISettler<RootObject<any>>;

        public check();
        public init();
        public enable();
    }
    class AttributeObject extends TypeObject {
        //全局属性列表
        public attributes: ISettler<NumberAttribute>[];
        //全局技能列表
        public skills: ISettler<SkillAttribute>[];
        //全局状态属性
        public status: ISettler<StatusAttribute>[];
        /**使用类构造函数或者名称获取技能 */
        public getSkill<T extends SkillAttribute>(skillName: string): ISettler<T>;
        public getSkill<T extends SkillAttribute>(cls: new () => T): ISettler<T>;
        public getSkill<T extends SkillAttribute>(arg: any): ISettler<T>;
    }
    enum StatusEnum {
        /**处于攻击状态 */
        isAttacking,
        /**处于移动状态 */
        isMoving,
        /**处于空闲状态 */
        isIdle,
        /**属于地面单位 */
        isOnGround,
        /**属于空中单位 */
        isOnSky,
        /**属于实体单位 */
        isEntity,
        /**处于睡眠状态 */
        isSleeping,
        /**处于死亡状态 */
        isDeath,
    }
    class TurnOverData {
        /**转移的方向 */
        public isEnter: boolean;
        /**数据的来源区块 */
        public origin: string;
        /**数据的目标区块 */
        public target: string;
        /**转移的实体索引 */
        public index: number;
        /**序列号 */
        public serial: number;
        /**转移的实体数据 */
        public entity: ISettler<RootObject<any>>;
    }
    interface IParent<T> {
        /**类型索引值 */
        serial: number;
        /**父级引用 */
        parent: IParent<any>;
        /**处于父级中的索引序号 */
        index: number;
    }
    interface IValue<T> extends IParent<T> {
        value: T;
        /**初始化函数 */
        init(): void;
    }
    /**事件驱动外壳 */
    interface IEvent<T> extends IValue<T> {
        /**监听修改 */
        on(caller: any, listener: (value: IEvent<T>, old?: T) => void);
        /**汇报事件 */
        report(serial: number, newValue: T, oldValue: T, index?: number[]);
        /**发布事件 */
        emit(event?: EventData<T>);
    }
    interface IEventArray<T> extends Array<IEvent<T>>, IEvent<T> {
        /**添加对象到数组队尾 */
        add(value: T, index?: number): IOperateArray<T>;
        /**移除数组指定索引的值 */
        remove(index: number): IOperateArray<T>;

        on(caller: any, listener: (value: IEvent<T>, old: T, index: number) => void);
    }
    interface IBehavior<T extends RootObject<T>> {
        isInit: IEvent<boolean>;
        /**根结算点 */
        root: IEvent<T>;
        /**继承类型 */
        class: IEvent<string>;
        /**实际类型 */
        type: IEvent<string>
    }
    class NumberAttribute {
        //属性名称
        public name: IEvent<string>;
        //基础值
        public base: IEvent<number>;
        //百分比，按百分比增加或减少，均以Value为基数
        public percent: IEvent<number>;
        //固定值，固定增加或减少的值，不参与百分比计算
        public fixed: IEvent<number>;
        //附加的值，增加或减少基础值，参与百分比计算
        public addition: IEvent<number>;
        //是否能够为负值
        public isPositive: IEvent<boolean>;
        //是否是一个整数
        public isInteger: IEvent<boolean>;
        constructor();
        constructor(attr: NumberAttribute);
        /**获取计算结果值 */
        public readonly value: number;
    }
    class EventData<T>{
        /**类型索引值 */
        public serial: number;
        public oldValue: T;
        public newValue: T;
        /**子数据值，索引值为操作码 */
        public children: EventData<T>[];
        public clear();
        constructor(cls: Function);
        constructor(serial: number);
        constructor();
    }
    class RootObject<T extends RootObject<T>> extends TypeObject {
        /*全局属性列表**/
        public attributes: IEventArray<NumberAttribute>;
        /*全局技能列表**/
        public behaviors: IEventArray<IBehavior<T>>;
        /*全局状态属性**/
        public status: IEventArray<StatusAttribute>;
        /*每个根对象都有一个唯一的不可变序列号**/
        public serial: IEvent<number>;
        /*每个根对象都有一个位于数组中的索引值**/
        public index: IEvent<number>;
        /**使用类构造函数或者名称获取技能 */
        public getBehavior<B extends IBehavior<T>>(name: string): B;
        public getBehavior<B extends IBehavior<T>>(cls: new () => B): B;

        public on(stat: number, bool: boolean, caller: any, listener: (v: any) => void);
    }
    class BehaviorAttribute<T extends RootObject<T>> implements IBehavior<T> {
        /**更新周期，每次更新设置经过的时间修正常数，一般为1毫秒转换为秒的数值 */
        public static CONST_CTCLE;
        public root: IEvent<T>;
        public isInit: IEvent<boolean>;
        public class: IEvent<string>;
        public type: IEvent<string>;
        isDeath: boolean;
        isIdle: boolean;
        /**监听状态改变 */
        public on(stat: number, bool: boolean, caller: any, method: Function);
    }
    class Missile {
        public position: IEvent<Vector2>;
        public health: IEvent<number>;
        public rotate: IEvent<number>;
        public range: IEvent<number>;
        public speed: IEvent<number>;
        public serial: IEvent<number>;
    }
}