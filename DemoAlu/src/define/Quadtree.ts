import { Vector2 } from "peng-field";
import { Rectangle, Shape } from "./GeometryDefine";

/**
 * 四叉树拓展
 */

// QuadTree
/**
 * 点
 */
export class TreeNode < T > {
  public point: Vector2;
  public data: T;
  constructor(x: number, y: number, data: T) {
    this.point = new Vector2(x, y);
    this.data = data;
  }
}

/**
 * 四叉树节点
 */
export class QuadTree <T> {
  /**
   * 矩形边界
   */
  public boundary: Rectangle;
  /**
   * 节点容量
   */
  public capacity: number;
  /**
   * 节点包含的点
   */
  public nodes: TreeNode < T > [];
  /**
   * 节点是否已经分裂
   */
  public divided: boolean;
  /**
   * [0]↗ 东北方向 
   */
  //public northeast: QuadTree < T > ;
  /**
   * [1]↖ 西北方向
   */
  //public northwest: QuadTree < T > ;
  /**
   * [2]↘ 东南方向
   */
  //public southeast: QuadTree < T > ;
  /**
   * [3]↙ 西南方向
   */
  //public southwest: QuadTree < T > ;
  public branchs: QuadTree<T>[];
  /**
   * 约束范围是一个矩形
   * @param boundary 限制范围
   * @param capacity 节点容量
   */
  constructor(boundary: Rectangle, capacity: number){
    this.nodes = [];
    this.branchs = [];
    this.divided = false;
    if (!boundary) {
      throw TypeError('boundary is null or undefined');
    }
    if (!(boundary instanceof Rectangle)) {
      throw TypeError('boundary should be a Rectangle');
    }
    if (typeof capacity !== 'number') {
      throw TypeError(`capacity should be a number but is a ${typeof capacity}`);
    }
    if (capacity < 1) {
      throw RangeError('capacity must be greater than 0');
    }
    this.boundary = boundary;
    this.capacity = capacity;
  }
  /**
   * 细分
   */
  subdivide() {
    let x = this.boundary.x;
    let y = this.boundary.y;
    let w = this.boundary.w/2;
    let h = this.boundary.h/2;
    let branchs = new Array(4);
    let ne = new Rectangle(x+w, y-h, w, h);
    let northeast = new QuadTree(ne, this.capacity);
    branchs[0] = northeast;
    let nw = new Rectangle(x-w, y-h, w, h);
    let northwest = new QuadTree(nw, this.capacity);
    branchs[1] = northwest;
    let se = new Rectangle(x+w, y+h, w, h);
    let southeast = new QuadTree(se, this.capacity);
    branchs[2] = southeast;
    let sw = new Rectangle(x-w, y+h, w, h);
    let southwest = new QuadTree(sw, this.capacity);
    branchs[3] = southwest;
    
    this.branchs = branchs;
    this.divided = true;
  }
  /**
   * 插入点，必须在矩形边界内
   * @param node 
   */
  insert(node: TreeNode < T > ) :QuadTree<T>{
    if (!this.boundary.contains(node.point)) {
      return null;
    }
    //如果这个分叉可以容纳节点
    if(this.nodes){
      if (this.nodes.length < this.capacity) {
        this.nodes.push(node);
        return this;
      }
    }
    
    if (!this.divided) {
      this.subdivide();
    }
    let result;
    for(let i =0;i<4;i++){
      result = this.branchs[i].insert(node);
      if(result)return result;
    }
    //尝试插入子分叉内
    //result = this.northeast.insert(node);
    //if(result)return result;
    //result = this.northwest.insert(node);
    //if(result)return result;
    //result = this.southeast.insert(node);
    //if(result)return result;
    //result = this.southwest.insert(node);
    //if(result)return result;
    //无法插入节点
    return null;
  }
  /**
   * 查询函数
   * @return 返回某个形状区域内所有的节点
   */
  query(range: Shape, found ? : TreeNode < T > []) {
    if (!found) {
      found = [];
    }

    if (!range.intersects(this.boundary)) {
      return found;
    }
    if(this.nodes){
      for (let n of this.nodes) {
        if (range.contains(n.point)) {
          found.push(n);
        }
      }
    }
    if (this.divided) {
      for(let i = 0;i<4;i++){
        this.branchs[i].query(range,found);
      }
      //this.northwest.query(range, found);
      //this.northeast.query(range, found);
      //this.southwest.query(range, found);
      //this.southeast.query(range, found);
    }

    return found;
  }
}

