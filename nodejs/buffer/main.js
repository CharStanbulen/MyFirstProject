/*
buf=new Buffer(256);
len=buf.write('www.runoob.com');
console.log('写入的字节数为'+len);
*/
/*
buf=new Buffer(26);
for(var i=0;i<26;i++){
  buf[i]=i+97;
};
console.log(buf.toString('ascii'));
console.log(buf.toString('ascii',0,5));
console.log(buf.toString('utf-8',0,5));
console.log(buf.toString(undefined,0,5));
*/
/*
var buf=new Buffer('www.runoob.com');
var json=buf.toJSON(buf);
console.log(json);
*/
/*
var buffer1=new Buffer('菜鸟教程');
var buffer2=new Buffer('www.runoob.com');
var buffer3=Buffer.concat([buffer1,buffer2]);
console.log(buffer3.toString());
*/
var buffer1=new Buffer('ABC');
var buffer2=new Buffer('ABCD');
var result=buffer1.compare(buffer2);
if(result<0){
  console.log(buffer1+'在'+buffer2+'之前');
}else if(result==0){
  console.log(buffer1+'与'+buffer2+'相同');
}else{
  console.log(buffer1+'在'+buffer2+'之后');
};