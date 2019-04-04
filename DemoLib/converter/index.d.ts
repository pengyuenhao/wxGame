export = cv;
export as namespace cv;

declare namespace cv {
    /**
    * Raw data is stored in instances of the Buffer class.
    * A Buffer is similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap.  A Buffer cannot be resized.
    * Valid string encodings: 'ascii'|'utf8'|'utf16le'|'ucs2'(alias of 'utf16le')|'base64'|'binary'(deprecated)|'hex'
    */
    const Buffer: {
        /**
         * Allocates a new buffer containing the given {str}.
         *
         * @param str String to store in buffer.
         * @param encoding encoding to use, optional.  Default is 'utf8'
         * @deprecated since v10.0.0 - Use `Buffer.from(string[, encoding])` instead.
         */
        new(str: string, encoding?: string): Buffer;
        /**
         * Allocates a new buffer of {size} octets.
         *
         * @param size count of octets to allocate.
         * @deprecated since v10.0.0 - Use `Buffer.alloc()` instead (also see `Buffer.allocUnsafe()`).
         */
        new(size: number): Buffer;
        /**
         * Allocates a new buffer containing the given {array} of octets.
         *
         * @param array The octets to store.
         * @deprecated since v10.0.0 - Use `Buffer.from(array)` instead.
         */
        new(array: Uint8Array): Buffer;
        /**
         * Produces a Buffer backed by the same allocated memory as
         * the given {ArrayBuffer}/{SharedArrayBuffer}.
         *
         *
         * @param arrayBuffer The ArrayBuffer with which to share memory.
         * @deprecated since v10.0.0 - Use `Buffer.from(arrayBuffer[, byteOffset[, length]])` instead.
         */
        new(arrayBuffer: ArrayBuffer ): Buffer;
        /**
         * Allocates a new buffer containing the given {array} of octets.
         *
         * @param array The octets to store.
         * @deprecated since v10.0.0 - Use `Buffer.from(array)` instead.
         */
        new(array: any[]): Buffer;
        /**
         * Copies the passed {buffer} data onto a new {Buffer} instance.
         *
         * @param buffer The buffer to copy.
         * @deprecated since v10.0.0 - Use `Buffer.from(buffer)` instead.
         */
        new(buffer: Buffer): Buffer;
        prototype: Buffer;
        /**
         * When passed a reference to the .buffer property of a TypedArray instance,
         * the newly created Buffer will share the same allocated memory as the TypedArray.
         * The optional {byteOffset} and {length} arguments specify a memory range
         * within the {arrayBuffer} that will be shared by the Buffer.
         *
         * @param arrayBuffer The .buffer property of any TypedArray or a new ArrayBuffer()
         */
        from(arrayBuffer: ArrayBuffer , byteOffset?: number, length?: number): Buffer;
        /**
         * Creates a new Buffer using the passed {data}
         * @param data data to create a new Buffer
         */
        from(data: any[]): Buffer;
        from(data: Uint8Array): Buffer;
        /**
         * Creates a new Buffer containing the given JavaScript string {str}.
         * If provided, the {encoding} parameter identifies the character encoding.
         * If not provided, {encoding} defaults to 'utf8'.
         */
        from(str: string, encoding?: string): Buffer;
        /**
         * Creates a new Buffer using the passed {data}
         * @param values to create a new Buffer
         */
        of(...items: number[]): Buffer;
        /**
         * Returns true if {obj} is a Buffer
         *
         * @param obj object to test.
         */
        isBuffer(obj: any): obj is Buffer;
        /**
         * Returns true if {encoding} is a valid encoding argument.
         * Valid string encodings in Node 0.12: 'ascii'|'utf8'|'utf16le'|'ucs2'(alias of 'utf16le')|'base64'|'binary'(deprecated)|'hex'
         *
         * @param encoding string to test.
         */
        isEncoding(encoding: string): boolean | undefined;
        /**
         * Gives the actual byte length of a string. encoding defaults to 'utf8'.
         * This is not the same as String.prototype.length since that returns the number of characters in a string.
         *
         * @param string string to test.
         * @param encoding encoding used to evaluate (defaults to 'utf8')
         */
        byteLength(string: string | DataView | ArrayBuffer , encoding?: string): number;
        /**
         * Returns a buffer which is the result of concatenating all the buffers in the list together.
         *
         * If the list has no items, or if the totalLength is 0, then it returns a zero-length buffer.
         * If the list has exactly one item, then the first item of the list is returned.
         * If the list has more than one item, then a new Buffer is created.
         *
         * @param list An array of Buffer objects to concatenate
         * @param totalLength Total length of the buffers when concatenated.
         *   If totalLength is not provided, it is read from the buffers in the list. However, this adds an additional loop to the function, so it is faster to provide the length explicitly.
         */
        concat(list: Uint8Array[], totalLength?: number): Buffer;
        /**
         * The same as buf1.compare(buf2).
         */
        compare(buf1: Uint8Array, buf2: Uint8Array): number;
        /**
         * Allocates a new buffer of {size} octets.
         *
         * @param size count of octets to allocate.
         * @param fill if specified, buffer will be initialized by calling buf.fill(fill).
         *    If parameter is omitted, buffer will be filled with zeros.
         * @param encoding encoding used for call to buf.fill while initalizing
         */
        alloc(size: number, fill?: string | Buffer | number, encoding?: string): Buffer;
        /**
         * Allocates a new buffer of {size} octets, leaving memory not initialized, so the contents
         * of the newly created Buffer are unknown and may contain sensitive data.
         *
         * @param size count of octets to allocate
         */
        allocUnsafe(size: number): Buffer;
        /**
         * Allocates a new non-pooled buffer of {size} octets, leaving memory not initialized, so the contents
         * of the newly created Buffer are unknown and may contain sensitive data.
         *
         * @param size count of octets to allocate
         */
        allocUnsafeSlow(size: number): Buffer;
        /**
         * This is the number of bytes used to determine the size of pre-allocated, internal Buffer instances used for pooling. This value may be modified.
         */
        poolSize: number;
    };
    /**
    * Any compatible Long instance.
    * This is a minimal stand-alone definition of a Long instance. The actual type is that exported by long.js.
    */
    interface Long {
        /** Low bits */
        low: number;

        /** High bits */
        high: number;

        /** Whether unsigned or not */
        unsigned: boolean;
    }
    class Long {
        constructor();
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
}