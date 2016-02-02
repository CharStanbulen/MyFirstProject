/**
 * Created by Administrator on 2016/1/21.
 */
(function(){
    //构建人员资料信息数据模块类
    $(document).ready(function(){
       var Person=Backbone.Model.extend({
          defaults:{
              name:'',
              sex:'',
              email:''
          },
          search:function(key){
              if(typeof(key)=='undefined'||key===''||key==null)
              return true;
              key = key.toLowerCase();
              return this.get('name').toLowerCase().indexOf()
          }
       });
    });
})