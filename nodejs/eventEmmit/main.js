/*
var EventEmitter=require('events').EventEmitter;
var event=new EventEmitter();
event.on('some_event',function(){
  console.log('some_event 事件触发');
});
setTimeout(function(){
  event.emit('some_event');
},1000);
*/
/*
var events=require('events');
var emmit=new events.EventEmitter();
emmit.on('someEvent',function(arg1,arg2){
  console.log('listener1',arg1,arg2);
});
emmit.on('someEvent',function(arg1,arg2){
  console.log('listener2',arg1,arg2);
});
emmit.emit('someEvent','arg1参数','arg2参数');
*/
/*
var events=require('events');
var eventEmitter=new events.EventEmitter();
var listener1=function listener1(){
  console.log('监听器listener1执行。');
};
var listener2=function listener2(){
  console.log('监听器listener2执行。');
};
eventEmitter.addListener('connection',listener1);
eventEmitter.on('connection',listener2);

var eventListeners=require('events').EventEmitter.listenerCount(eventEmitter,'connection');

console.log(eventListeners+'监听器监听连接事件。');
eventEmitter.emit('connection');
eventEmitter.removeListener('connection',listener1);
console.log('listener1不再受监听');
eventEmitter.emit('connection');
var eventListeners=require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+'监听器监听连接事件。');
console.log('程序执行完毕！');
*/
/*
var events=require('events');
var emmiter=new events.EventEmitter();
emitter.emit('error');
*/