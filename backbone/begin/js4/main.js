require(['string','../js/jquery-1.11.1'],function(str){
  $('#Button1').bind('click',function(){
    var $a=$('#Text1').val();
    var $s=str.OrE($a);
    $('#tip').html('您输入的是：'+$s);
  });
});