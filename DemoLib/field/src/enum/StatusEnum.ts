export class StatusEnum {
    /**处于攻击状态 */
    public static readonly isAttacking = 0;
    /**处于移动状态 */
    public static readonly isMoving = 1;
    /**处于空闲状态 */
    public static readonly isIdle = 2;
    /**属于地面单位 */
    public static readonly isOnGround = 3;
    /**属于空中单位 */
    public static readonly isOnSky = 4;
    /**属于实体单位 */
    public static readonly isEntity = 5;
    /**属于虚无单位 */
    public static readonly isNihility = 6;
    /**处于睡眠状态 */
    public static readonly isSleeping = 7;
    /**处于静态模式 */
    public static readonly isStatic = 8;
    /**处于死亡状态 */
    public static readonly isDeath = 9;
}