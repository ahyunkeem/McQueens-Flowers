$(function(){
    var wd = $(window).width();
    var scrBtn = $('.scrBtn');
    var clo = $('.navBoxWrap>.close>.btn');


    // 스크롤 버튼
    var btm = $('html').offset().top+$('html').outerHeight();
    scrBtn.mouseenter(function(){
        scrBtn.css('height',120+'px');
    });
    scrBtn.mouseleave(function(){
        scrBtn.css('height',40+'px');
    });
    scrBtn.find('.top').click(function(){
        $('html,body').stop().animate({
            scrollTop : 0
        },500)
    });
    scrBtn.find('.btm').click(function(){
        $('html,body').stop().animate({
            scrollTop : btm
        },500);
    });

    // 네브박스
    clo.click(function(){
        $('.navBoxWrap').css({marginLeft : -100+'vw'});
    });

});