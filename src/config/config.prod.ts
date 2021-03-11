import * as typegoose from '@midwayjs/typegoose';

export const mongoose: typegoose.DefaultConfig = {
  uri: 'mongodb://127.0.0.1:27017',
  options: { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    dbName: 'blog' 
  }
}