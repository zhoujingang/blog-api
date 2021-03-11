import { Blogger } from '../entity/blogger';
import { Provide, Init } from '@midwayjs/decorator';
import { getModelForClass } from '@midwayjs/typegoose';

@Provide('blogerService')
export class BlogerService {
    blogerModel;
    @Init()

    async init() {
        this.blogerModel = getModelForClass(Blogger); 
    }
    async getList(condition: any, skip = 0, limit = 0) {
        // const BlogerModel = getModelForClass(Blogger);
        const res = await this.blogerModel.find(condition).skip(skip).limit(limit).sort({_id: 1});
        const count = await this.blogerModel.find(condition).countDocuments();
        return {
            count,
            list: res
        }
    }

    async add(data) {
        const res = await this.blogerModel.create(data);
        return res
    }
}