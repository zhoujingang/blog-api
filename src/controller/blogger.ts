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
  async getUser(@Query() uid) {
    const res = await this.blogerService.getList({});
    return { success: true, message: 'OK', data: res };
  }

  @Post('/add')
  async add(@Body(ALL) body: any) {
    const res = await this.blogerService.add(body);
    return { success: true, message: 'OK', data: res };

  }
}
