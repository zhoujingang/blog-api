import { Inject, Controller, Get, Post, Provide, Query, Body, ALL } from '@midwayjs/decorator';
import { Context } from 'egg';
// import { UserService } from '../service/user';

@Provide()
@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject('blogerService')
  blogerService

  @Get('/list')
  async getUser(@Query(ALL) query: any) {
    const pn = Number(query.pn) || 1;
    const rn = Number(query.rn) || 10;
    const condition = {};
    const res = await this.blogerService.getList(condition, (pn - 1) * rn,rn);
    return { code: 200, message: 'OK', data: res };
  }

  @Post('/add')
  async add(@Body(ALL) body: any) {
    const res = await this.blogerService.add(body);
    return { code: 200, message: 'OK', data: res };

  }
}
