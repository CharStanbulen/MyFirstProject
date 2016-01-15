require(['max','../js/jquery-1.11.1'],function(max){
  $('#Button1').bind('click',function(){
    var $a=$('#Text1').val();
    var $b=$('#Text2').val();
    var $m=max.Max($a,$b);
    $('#tip').html('最大值：'+$m);
  });
});