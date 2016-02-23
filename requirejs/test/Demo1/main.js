require.config({
  paths:{
    jquery:'jquery-1.11.1'
  }
});
require(['jquery'],function($){
  alert($().jquery);
})