$(function(){
    var wd = $(window).width();
    var hi = 0;
    var hidw = 0;
    var scrBtn = $('.scrBtn');
    var clo = $('.navBoxWrap>.close>.btn');


    if(wd > 1024){
        // pc버전
        hi = 120;
        hidw = 40;
    }else if(wd >= 420 && wd <= 1024 ){
        // tab버전
        hi = 120;
        hidw = 40;
    }else{
        // 모바일버전
        hi = 60;
        hidw = 20;
    }

    // 스크롤 버튼
    var btm = $('html').offset().top+$('html').outerHeight();
    scrBtn.mouseenter(function(){
        scrBtn.css('height',hi+'px');
    });
    scrBtn.mouseleave(function(){
        scrBtn.css('height',hidw+'px');
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