import { App, Configuration } from '@midwayjs/decorator';
import * as typegoose from '@midwayjs/typegoose';
import { ILifeCycle } from '@midwayjs/core';
import { Application } from 'egg';
const path = require('path')

@Configuration( {
  imports: [
    typegoose
  ],
  importConfigs: [
    path.join(__dirname, './config')
  ]
})
export class ContainerLifeCycle implements ILifeCycle {

  @App()
  app: Application;

  async onReady() {
  }
}
