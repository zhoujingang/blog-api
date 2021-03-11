import { prop } from '@typegoose/typegoose';

export class Blogger {
    @prop()
    public name?: string;

    @prop()

    public tags?: string;
}