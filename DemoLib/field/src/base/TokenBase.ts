import { Type } from "../decorator/TypeDecorator";
import { Field } from "../decorator/FieldDecorator";

@Type("Token")
export class Token{
    @Field(Number,"time")
    time:number;
    @Field(Number,"info")
    info:number;
}
@Type("AccessToken")
export class AccessToken extends Token{
    /**获取到的凭证 */
    @Field(String,"access_token")
    access_token:string;
    /**凭证有效时间，单位：秒 */
    @Field(Number,"expires_in")
    expires_in:number;
}