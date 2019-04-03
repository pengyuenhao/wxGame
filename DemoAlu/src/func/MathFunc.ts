/**
 *线性同余生成器（LCG, Linear Congruential Generator)
 *I_{n+1}=a*I_{n}+c (mod m)
 *生成的伪随机数序列最大周期m，范围在0到m-1之间。要达到这个最大周期，必须满足
 *c与m互质
 *a - 1可以被m的所有质因数整除
 *如果m是4的倍数，a - 1也必须是4的倍数
 *以上三条被称为Hull-Dobell定理。
 *作为一个伪随机数生成器，周期不够大是不好意思混的，所以这是要求之一。
 *可以看到，a=9301, c = 49297, m = 233280这组参数，以上三条全部满足。
 *所以这里选取这组魔法值作为随机数生成基础值
*/
const A: number = 9301;
const C: number = 49297;
const M: number = 233280;
export class MathFunc {
    private _result: number;

    public seed(value: number) {
        this._result = value;
        //增加一次扰动
        this.randSeed();
    }
    private randSeed(){
        this._result = (this._result * A + C) % M;
        return this._result;
    }
    /**返回一个随机数 */
    public number(min: number, max: number): number {
        let diff = max - min + 1;
        let result = this.randSeed() % diff + min;
        return result;
    }
}