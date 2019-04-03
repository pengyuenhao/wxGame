import {Writer,Reader, Convert, BaseConverter, GetConverter, Vector2 } from "peng-field";
/**
 * 方向枚举值
 */
export enum DirectionEnum {
  /**内部 */
  Inside = 0,
  /**左边溢出 */
  Left = 1,
  /**右边溢出 */
  Right = 2,
  /**上边溢出 */
  Up = 4,
  /**下边溢出 */
  Down = 8,
  LeftAndUp = 5,
  LeftAndDown = 9,
  RightAndUp = 6,
  RightAndDown = 10,
  /**覆盖全部区域并溢出 */
  Overflow = 15,
}
/**
 * 几何图形接口
 */
export interface Shape {
  /**
   * 检查点是否包含在形状内
   */
  contains(point: Vector2);
  /**
   * 检查形状是否存在相交 
  */
  intersects(range: Rectangle);
  /**
   * 检查本形状相对于目标矩形的方位关系
   * @param range 
   */
  orientation(range: Rectangle): DirectionEnum;
  /**
   * 检查目标点相对于本形状的方位关系
   * @param x 
   * @param y 
   */
  orientation(x: number, y: number): DirectionEnum;
}
/**
 * 几何矩形
 * @see 注意，矩形的原点在中心位置
 * @example
 *  h____________ (x+w,y+h)
 *  |            |
 *  |            |
 *  |     .O(x,y)|
 *  |            |
 *  |____________|w
 * (x-w,y-h)   
*/
export class Rectangle implements Shape {
  public x: number;
  public y: number;
  public w: number;
  public h: number;
  constructor(x: number, y: number, w: number, h: number) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  /**
   * @param x
   * @param y 
  */
  contains(x: number, y: number): boolean;
  /**
   * @param point 
  */
  contains(point: Vector2): boolean;
  /**
   * 检查点是否包含在矩形内
   * @param point 
  */
  contains(): boolean {
    let x;
    let y;
    switch (arguments.length) {
      case 1:
        x = arguments[0].x;
        y = arguments[0].y;
        break;
      case 2:
        x = arguments[0];
        y = arguments[1];
        break;
    }
    return (
      x >= this.x - this.w &&
      x <= this.x + this.w &&
      y >= this.y - this.h &&
      y <= this.y + this.h);
  }

  /**
   * 检查矩形是否存在相交 
  */
  intersects(range: Rectangle) {
    return !(range.x - range.w > this.x + this.w) ||
      range.x + range.w < this.x - this.w ||
      range.y - range.h > this.y + this.h ||
      range.y + range.h < this.y - this.h;
  }
  /**检查点相对于本矩形的方位，返回方位值 */
  orientation(x: number, y: number): DirectionEnum;
  /**检查本矩形相对于目标矩形的方位，返回方位值 */
  orientation(range: Rectangle): DirectionEnum;
  orientation() {
    //初始处于内部
    let direction: DirectionEnum = DirectionEnum.Inside;
    switch (arguments.length) {
      case 1:
        let range: Rectangle = arguments[0];
        //检查是否超出左边界
        if (range.x - range.w > this.x - this.w) {
          direction |= DirectionEnum.Left;
        }
        //检查是否超出右边界
        if (this.x + this.w > range.x + range.w) {
          direction |= DirectionEnum.Right;
        }
        //检查是否超出上边界
        if (this.y + this.h > range.y + range.h) {
          direction |= DirectionEnum.Up;
        }
        //检查是否超出下边界
        if (range.y - range.h > this.y - this.h) {
          direction |= DirectionEnum.Down;
        }
        return direction;
      case 2:
        let x: number = arguments[0];
        let y: number = arguments[1];
        //检查是否超出左边界
        if (x < this.x - this.w) {
          direction |= DirectionEnum.Left;
        }
        //检查是否超出右边界
        if (x > this.x + this.w) {
          direction |= DirectionEnum.Right;
        }
        //检查是否超出上边界
        if (y > this.y + this.h) {
          direction |= DirectionEnum.Up;
        }
        //检查是否超出下边界
        if (y < this.y - this.h) {
          direction |= DirectionEnum.Down;
        }
        return direction;
    }

  }
}
@Convert(Rectangle)
class RectangleConverter extends BaseConverter<Rectangle>{
  to(writer: Writer, value: Rectangle) {
    let tmp = GetConverter(Number);
    tmp.to(writer, value.x);
    tmp.to(writer, value.y);
    tmp.to(writer, value.w);
    tmp.to(writer, value.h);
  }
  from(reader: Reader) {
    let tmp = GetConverter(Number);
    let x = tmp.from(reader) as number;
    let y = tmp.from(reader) as number;
    let w = tmp.from(reader) as number;
    let h = tmp.from(reader) as number;
    let inst = new Rectangle(x, y, w, h);
    return inst;
  }
}
// circle class for a circle shaped query
/**
 * 几何圆形
 * @see 注意，圆形的原点在中心位置
*/
export class Circle implements Shape {
  public x: number;
  public y: number;
  public r: number;
  public rSquared: number;
  constructor(x: number, y: number, r: number) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.rSquared = this.r * this.r;
  }
  /**
   * 点是否包含在园内
   * @param point 
   */
  contains(point: Vector2) {
    // check if the point is in the circle by checking if the euclidean distance of
    // the point and the center of the circle if smaller or equal to the radius of
    // the circle
    /**@see 需要满足条件=>(x1-x2)^2+(y1-y2)^2<=r^2 */
    let dx = point.x - this.x;
    let dy = point.y - this.y;
    let d = dx * dx + dy * dy;
    return d <= this.rSquared;
  }
  /**
   * 与矩形是否存在相交
  */
  intersects(range: Rectangle) {

    let xDist = Math.abs(range.x - this.x);
    let yDist = Math.abs(range.y - this.y);

    // radius of the circle
    let r = this.r;

    let w = range.w;
    let h = range.h;

    let dx = xDist - w;
    let dy = yDist - h;
    let edges = dx * dx + dy * dy;

    // no intersection
    if (xDist > r + w || yDist > r + h)
      return false;

    // intersection within the circle
    if (xDist <= w || yDist <= h)
      return true;

    // intersection on the edge of the circle
    return edges <= this.rSquared;
  }
  /**检查点相对于本圆形的方位，返回方位值 */
  orientation(x: number, y: number): DirectionEnum;
  /**检查本圆形相对于目标矩形的方位，返回方位值 */
  orientation(range: Rectangle): DirectionEnum;
  orientation() {
    //初始处于内部
    let direction: DirectionEnum = DirectionEnum.Inside;
    switch (arguments.length) {
      case 1:
        let range : Rectangle= arguments[0];
        //检查是否超出左边界
        if (range.x-range.w>this.x-this.r) {
          direction |= DirectionEnum.Left;
        }
        //检查是否超出右边界
        if (this.x+this.r>range.x+range.w) {
          direction |= DirectionEnum.Right;
        }
        //检查是否超出上边界
        if (this.y+this.r>range.y+range.h) {
          direction |= DirectionEnum.Up;
        }
        //检查是否超出下边界
        if (range.y-range.h>this.y-this.r) {
          direction |= DirectionEnum.Down;
        }
        return direction;
      case 2:
        let x : number = arguments[0];
        let y : number = arguments[1];
        //检查是否超出左边界
        if (x<this.x-this.r) {
          direction |= DirectionEnum.Left;
        }
        //检查是否超出右边界
        if (x>this.x+this.r) {
          direction |= DirectionEnum.Right;
        }
        //检查是否超出上边界
        if (y>this.y+this.r) {
          direction |= DirectionEnum.Up;
        }
        //检查是否超出下边界
        if (y<this.y-this.r) {
          direction |= DirectionEnum.Down;
        }
        return direction;
    }
  }
}