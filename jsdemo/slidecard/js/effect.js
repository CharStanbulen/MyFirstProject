/**
 * Created by Administrator on 2016/2/2.
 */
$(function(){
    var currentLi=$('.indexTypes ul li');
    currentLi.eq(0).stop().animate({'width':'510px'},600);
    currentLi.eq(0).children('.con').animate({'left':'193px'},600);

    currentLi.hover(function(){
       $(this).siblings('li').stop().animate({'width':'193px'},600);
        $(this).siblings('li').removeClass('current');
        $(this).addClass('current');
        $(this).stop().animate({'width':'510px'},600);
    });
})
