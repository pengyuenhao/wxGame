import { RootSettler } from "peng-field";
import { EntityData } from "../define/EntityDefine";

/**
 * 数据模型类
 */
export default class MainModel {
    public entitys: RootSettler<EntityData>[];

    constructor() {
        this.entitys = [];

    }
}