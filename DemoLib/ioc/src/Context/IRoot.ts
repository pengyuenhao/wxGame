import {IConstructorName} from "../IocConst";
import {IContext} from "./Context";

export class NRoot implements IConstructorName {
    get constructorName() {
        return "IRoot";
    }
}

export interface IRoot {
    context: IContext;
}