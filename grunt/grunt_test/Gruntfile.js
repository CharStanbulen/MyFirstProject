//包装函数
module.exports=function(grunt){
  //任务配置，所有插件的配置信息
  grunt.initConfig({
    //获取package.json的信息
    pkg:grunt.file.readJSON('package.json'),
    
    //uglify插件的配置信息
    uglify:{
      options:{
        stripBanners:true,
        banner:'/*<%=pkg.name%>-<%pkg.version%>.js <%=grunt.template.today("yyyy-mm-dd")%>*/\n'
      },
      build:{
        src:'src/*.js',
        dest:'build/<%=pkg.name%>-<%=pkg.version%>.js.min.js'
      }
    },
    //压缩css文件
    cssmin:{
      build:{
        files:[
          {
            expand:true,
            cwd:'src',
            src:'**/*.css',
            dest:'build',
            ext:'.min.css'
          }
        ]
      }
    },
    //编译less文件
    less:{
      build:{
        files:[
          {
            expand:true,
            cwd:'less',
            src:'**/*.less',
            dest:'src',
            ext:'.css'
          }
        ]
      }
    },
    //压缩图片文件
    imagemin:{
      dist:{
        options:{
          //定义png图片优化水平
          optimizationLevel:3
        },
        files:[
        {
          expand:true,
          cwd:'images/',
          src:['**/*.{png,jpg,jpeg}'],
          dest:'imagesmin/'
        }
        ]
      }
    },
    //jshint插件的配置信息
    jshint:{
      build:['Gruntfile.js','src/*.js'],
      options:{
        jshintrc:'.jshintrc'
      }
    },
    watch:{
      build:{
        files:['src/*.js','less/*.less','images/*.{png,jpg,jpeg}'],
        tasks:['jshint','uglify','less','cssmin','imagemin'],
        options:{spawn:false}
      }
    }
  });
  //告诉grunt需要使用插件
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  //告诉grunt当我们在终端输入grunt时需要做些什么，注意先后顺序
  grunt.registerTask('default',['jshint','uglify','less','cssmin','imagemin','watch']);
};