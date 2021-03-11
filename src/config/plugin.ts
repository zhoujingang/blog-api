import { EggPlugin } from 'egg';
export default {
  logrotator: false,  // disable when use @midwayjs/logger
  static: false,
  // mongoose: {
  //   enable: true,
  //   package: 'egg-mongoose'
  // },
  // joi: {
  //   enable: true,
  //   package: 'egg-joi',
  // },
} as EggPlugin;
