import { Type } from "../decorator/TypeDecorator";

/**二维向量定义 */
@Type("Vector2")
export class Vector2 {
    public x: number;
    public y: number;
    constructor(v: number);
    constructor(v: Vector2);
    constructor(x: number, y: number);
    constructor(arr: number[]);
    constructor();
    constructor() {
        switch (arguments.length) {
            case 0:
                this.x = 0;
                this.y = 0;
                break;
            case 1:
                let v = arguments[0];
                if (Array.isArray(v)) {
                    return new Vector2(v[0], v[1]);
                }
                if (typeof v == "number") {
                    return new Vector2(v, v);
                }
                if (v.x != null && v.y != null) {
                    return new Vector2(v.x, v.y);
                }
                break;
            case 2:
                this.x = arguments[0];
                this.y = arguments[1];
                break;
        }
    }
    /**
     * 从一般数组构造向量数组
     */
    public static fromNumberArray(v: number[]): Vector2[] {
        if (!v) return null;
        let n = [];
        let len = v.length;
        for (let i = 0; i < len; i++) {
            n.push(new Vector2(v[i], v[i + 1]));
        }
        return n;
    }
    /**返回零值向量 */
    public static get Zero() { return new Vector2(0, 0) };
    public static get One() { return new Vector2(1, 1) };
    public static get Down() { return new Vector2(0, -1) };
    public static get Left() { return new Vector2(-1, 0) };
    public static get Right() { return new Vector2(1, 0) };
    public static get Up() { return new Vector2(0, 1) };
    /**返回两个向量之间的弧度 */
    public static Euler(from: Vector2, to: Vector2) {
        return from.euler(to);
    }
    /**返回两个向量之间的角度 */
    public static Angle(from: Vector2, to: Vector2) {
        return from.angle(to);
    }
    /**返回两个向量之间的距离 */
    public static Distance(from: Vector2, to: Vector2) {
        return from.distance(to);
    }
    /**返回两个向量的叉积 */
    public static Cross(a: Vector2, b: Vector2): number {
        return a.cross(b);
    }
    /**返回两个向量的点积 */
    public static Dot(a: Vector2, b: Vector2): number {
        return a.dot(b);
    }
    /**转为字符串形式 */
    public toString(): string {
        return "(" + this.x + "," + this.y + ")";
    }
    /**转为数组形式 */
    public toNumberArray(): number[] {
        return [this.x, this.y];
    }
    /**判断向量是否均为0值 */
    public isZero(): boolean {
        return this.x == 0 && this.y == 0;
    }
    /**判断向量是否均为1值 */
    public isOne(): boolean {
        return this.x == 1 && this.y == 1;
    }
    /**判断向量是否为单位向量 */
    public isNorm(): boolean {
        return this.sqrMagnitude() == 1;
    }
    /**返回标准单位向量 */
    public get normalized(): Vector2 {
        let value = this.magnitude();
        //模长为0的向量单位化成零向量
        if (value == 0) {
            return Vector2.Zero;
        }
        //获取模长的倒数，防止出现0为被除数
        value = 1 / value;
        return new Vector2(this.x * value, this.y * value);
    }
    /**使向量标准化，返回原向量 */
    public toNormalize(): Vector2 {
        let value = this.magnitude();
        //模长为0的向量单位化成零向量
        if (value == 0) {
            return this;
        }
        //获取模长的倒数，防止出现0为被除数
        value = 1 / value;
        this.x *= value;
        this.y *= value;
    }
    /**向量之间的距离，返回一个定点数 */
    public distance(v: Vector2) {
        let dx = this.x - v.x;
        let dy = this.y - v.y;
        return Math.sqrt(dx * dx) + (dy * dy);
    }
    /**向量之间的欧拉角，返回一个定点数，范围在-π到π之间 */
    public euler(v: Vector2) {
        let n = Math.atan2(v.y, v.x) - Math.atan2(this.y, this.x);
        if (n > Math.PI) {
            return n - Math.PI * 2;
        }
        if (n < -Math.PI) {
            return n + Math.PI * 2;
        }
        return n;
    }
    /**返回两个向量之间的角度 */
    public angle(v: Vector2) {
        let rotate = this.euler(v);
        return rotate * 57.29577951;
    }
    /**缩放向量的值 */
    public scale(v: number): Vector2 {
        this.x *= v;
        this.y *= v;
        return this;
    }
    /**向量加法,返回一个新的向量 */
    public add(v: Vector2): Vector2 {
        return new Vector2(this.x + v.x, this.y + v.y);
    }

    /**向量减法，返回一个新的向量*/
    public sub(v: Vector2): Vector2 {
        return this.add(v.neg());
    }
    /**向量反向，返回一个新的向量*/
    public neg(): Vector2 {
        return new Vector2(-this.x, -this.y);
    }
    /**定义的向量普通乘法，相当于内部值互相乘 */
    public mul(v: Vector2): Vector2 {
        return new Vector2(this.x * v.x, this.y * v.y);
    }
    /**定义的向量普通除法，相当于内部值互相除 */
    public div(v: Vector2): Vector2 {
        return new Vector2(this.x / v.x, this.y / v.y);
    }

    /**叉积运算，返回结果值 */
    public cross(v: Vector2): number {
        //x1*y2 - x2*y1
        return this.x * v.y - v.x * this.y;
    }
    /**点积运算，返回结果值 */
    public dot(v: Vector2): number {
        //x1*x2 + y1*y2
        return this.x * v.x + this.y * v.y;
    }
    /**返回向量模长的平方 */
    public sqrMagnitude(): number {
        return this.x * this.x + this.y * this.y;
    }
    /**返回模长 */
    public magnitude(): number {
        return Math.sqrt(this.sqrMagnitude());
    }
}