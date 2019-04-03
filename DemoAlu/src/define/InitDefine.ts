import { Type, Field } from "peng-field";

@Type("InitData")
export class InitData{
    @Field(Number,"id")
    id:number;
    @Field(Number,"worldFrame")
    worldFrame : number;
    @Field(Number,"systemTime")
    systemTime : number;
    @Field(Uint8Array,"entitys")
    entitys : Uint8Array;
}[]
@Type("InitInfo")
export class InitInfo{
    @Field(Number,"id")
    id:number;
    @Field(Number,"systemTime")
    systemTime : number;
}