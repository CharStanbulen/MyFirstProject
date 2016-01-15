define(['status'],function(data){
  var html=function(y){
    if(data.OddOrEvent(y))
      return '偶数';
    else
      return '奇数';
  };
  return{
    OrE:html
  };
})