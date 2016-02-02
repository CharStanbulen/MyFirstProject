/*
var events=require('events');
var eventEmitter=new events.EventEmitter();

var connectHandler=function connected(){
  console.log('链接成功！');
  eventEmitter.emit('data_received');
};
eventEmitter.on('connection',connectHandler);
eventEmitter.on('data_received',function(){
  console.log('数据绑定成功！');
})
eventEmitter.emit('connection');
console.log('程序执行完毕！');
*/
var fs=require('fs');
fs.readFile('input.txt',function(err,data){
  if(err){
    console.log(err.stack);
    return;
  }
  console.log(data.toString());
})
console.log('程序执行完毕！');