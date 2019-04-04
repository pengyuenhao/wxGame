import { Shape, Rectangle } from "../define/GeometryDefine";
import { StatusEnum, IOperate } from "peng-field";
import { Async } from "../define/AsyncDefine";
import { TreeNode, QuadTree } from "../define/Quadtree";
import { EntityData } from "../define/EntityDefine";
import { inject } from "peng-ioc";
import MainModel from "../model/MainModel";

export class SerachFunc {
    @inject(MainModel)
    mMdl:MainModel;
    /**搜索句柄数组 */
    public searchArr: SearchHandler[];
    /**过滤规则字典数组 */
    public filterMapArr: Map<number, QuadTree<number>>[];
    /**分类缓存单位索引 */
    public classifyIndexBuf: Array<number[]>;
    /**区块的逻辑区域 */
    public boundary: Rectangle;

    public search(shape: Shape, filter?: StatusEnum[], exclude?: StatusEnum[]): Async {
        let handler = new SearchHandler();
        let async = new Async();
        handler.async = async;
        handler.filter = filter;
        handler.shape = shape;
        this.searchArr.push(handler);
        return async;
    }

    private searchRequest(){
        /*由于过滤规则特征值最大只能32位，超出可能会有问题，所以将特征值划分为多个值分别缓存 */
        this.transformFilter(this.searchArr, (handler, signArr: []) => {
            //建立索引四叉树，无论是否需要跨区块搜索，这里都需要建立搜索缓存
            let arr: field.ISettler<EntityData>[] = [];
            arr = this.getLocalSearch(signArr, handler.shape);
            //不需要跨区块的部分直接执行回调
            handler.async.resolve(arr);
        });
        //清空搜索数组
        this.searchArr = [];
    }

    /** 将过滤规则数组转换为特征数组 */
    private transformFilter<T extends FilterHandler>(handlerArr: T[], method: (handler: T, arr: number[]) => void) {
        let handler: T;
        let len = handlerArr.length;
        for (let i = 0; i < len; i++) {
            handler = handlerArr[i];
            let signArr = [];
            //如果没有指定任何过滤条件
            if (!handler.filter) {
                //必须指定过滤条件，否则会建立超级巨大的四叉树，这将极度影响性能
                continue;
            } else {
                //提取特征值
                for (let j = 0; j < handler.filter.length; j++) {
                    //处于过滤规则中的序号
                    let serial = (<number>handler.filter[j]) >>> 5;
                    signArr[serial] |= 1 << (<number>handler.filter[j]);
                }
            }
            method.call(this, handler, signArr);
        }
    }
    /** 获取本地对应标识符的形状内的所有索引实体 */
    public getLocalSearch(signArr: number[], shape: Shape): IOperate<EntityData>[] {
        let arr: IOperate<EntityData>[] = [];
        let filterMapArr = this.filterMapArr;
        for (let i = 0; i < signArr.length; i++) {
            let dict = filterMapArr[i];
            if (!dict) {
                dict = new Map<number, QuadTree<number>>();
                filterMapArr[i] = dict;
            }
            let sign = signArr[i];
            let tree: QuadTree<number>;
            //根据特征值获取树
            if (!dict.has(sign)) {
                //根据特征值获取符合条件的实体节点
                let indexAllArr = [];
                let tmp = sign;
                let count = 0;
                while (tmp) {
                    if (tmp & 1) {
                        let indexArr = this.classifyIndexBuf[count];
                        if (indexArr) indexAllArr.push(...indexArr);
                    }
                    //无符号右移一位
                    tmp >>>= 1;
                    count += 1;
                }
                //如果存在索引值
                if (indexAllArr.length != 0) {
                    tree = new QuadTree<number>(this.boundary, 20);
                    for (let j = 0; j < indexAllArr.length; j++) {
                        let entity = this.mMdl.entitys[indexAllArr[j]];
                        let node = new TreeNode(entity.value.position.value.x, entity.value.position.value.y, entity.value.index.value);
                        tree.insert(node);
                    }
                } else {
                    tree = null;
                }
                dict.set(sign, tree);
            } else {
                tree = dict.get(sign);
            }
            //没有任何单位时不创建树
            if (!tree) continue;
            let n = tree.query(shape);
            for (let j = 0; j < n.length; j++) {
                //这里获取本地实体数组中指定索引的数据
                let entity = this.mMdl.entitys[n[j].data];
                if (!entity) continue;
                arr.push(entity);
            }
        }
        return arr;
    }

    public runSearch() {
        let loop = 0;
        while (true) {
            this.searchRequest();
            if (this.searchArr.length != 0) {
                if (loop > 100) {
                    console.error("[注意！存在循环搜索，请注意检查代码]");
                    break;
                } else {
                    loop += 1;
                    continue;
                }
            } else {
                //通知外部已经完成了搜索构建
                break;
            }
        }
    }

    constructor() {
        this.searchArr = [];
        this.classifyIndexBuf = [];
        this.filterMapArr = [];
        this.boundary = new Rectangle(0,0, 2000, 2000);
    }
}

export class FilterHandler {
    /**筛选条件 */
    public filter: StatusEnum[];
    /**搜索回调方法 */
    public async: Async;
}

/**搜索句柄类，这里缓存搜索结果，因为一个周期会执行多次搜索 */
export class SearchHandler extends FilterHandler {
    /**搜索范围形状 */
    public shape: Shape;
    /**搜索结果 */
    public result: TreeNode<number>[];
}

