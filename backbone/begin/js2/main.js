require(['json','../js/jquery-1.11.1'],function(json){
  $('#tip').html(json.name+'<br>'+
  json.sex+'<br>'+
  json.email
  );
});