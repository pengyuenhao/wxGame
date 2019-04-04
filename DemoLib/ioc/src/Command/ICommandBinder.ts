import { CommandBinding } from "./CommandBinding";
import { IBinding } from "../Bind/Binding";
import { IConstructorName } from "../IocConst";

export interface ICommandBinder {
    bind(key: any): CommandBinding;
    getRawBinding(): IBinding;
}
export class NCommandBinder implements IConstructorName {
    get constructorName() {
        return "ICommandBinder";
    }
}