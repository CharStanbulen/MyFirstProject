(function(window,undefined){
  function add(a,b){
    var c=100;
    var test='监听函数';
    a = a + c + test;
    return a+b;
  }
  add(10,100);
})(window);