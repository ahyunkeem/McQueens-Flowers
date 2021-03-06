$(function(){
    var wd = $(window).width();
    var q = 0;
    var j = 0;
    var i = 0;
    var vidBtn = $('.cnt01>.cntLeft>section>article>.image>.btn');
    var vidCls = $('.lightBox>.btn');
    var bnrVw = $('.bnr01>.images>.imgView');
    var bnrGr = $('.bnr01>.images>.imgView>.imgGroup');
    var bnrBtn = $('.bnr01>.texts>.btns>div');
    var paging = $('.bnr01>.paging>li');
    var cnt02Gr = $('.cnt02>section>.artView>.artGroup');
    var cnt02tab = $('.cnt02>section>.tab>li');
    var cnt02Vw = $('.cnt02>section>.artView');
    var scrBtn = $('.scrBtn');
    var clo = $('.navBoxWrap>.close>.btn');

    if(wd > 1024){
        // pc버전
        paging.click(page);
    }else if(wd >= 420 && wd <= 1024 ){
        // tab버전
        paging.click(page);
    }else{
        // 모바일버전
        bnrVw.swipeleft(bnrswipeLeft);
        bnrVw.swiperight(bnrswipeRight);
        cnt02Vw.swipeleft(left);
        cnt02Vw.swiperight(right);
    }

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
    
    // 컨텐츠01 라이트박스
    vidBtn.click(function(){
        $('.lightBox').css({
            display : 'block'
        });
    });
    vidCls.click(function(){
        $('.lightBox').css({
            display : 'none'
        });
    });

    // 배너01 슬라이드
    bnrBtn.eq(1).click(function(){
        i++;
        bnrBtn.eq(0).css('opacity','1');
        if( i >= 2){
            i = 2;
            $(this).css('opacity','0.4');
        }
        bnrGr.css({
            marginLeft : i*-100+'%'
        });
        paging.removeClass('show');
        paging.eq(i).addClass('show');
    });
    bnrBtn.eq(0).click(function(){
        i--;
        bnrBtn.eq(1).css('opacity','1');
        if( i <= 0){
            i = 0;
            $(this).css('opacity','0.4');
        }
        bnrGr.css({
            marginLeft : i*-100+'%'
        });
        paging.removeClass('show');
        paging.eq(i).addClass('show');
    });
    function page(){
        var ind = $(this).index();
        i = ind;
        bnrBtn.css('opacity','1');
        if(ind >= 2){
            bnrBtn.eq(1).css('opacity','0.4');
            bnrBtn.eq(0).css('opacity','1');
        }else if(ind <= 0){
            bnrBtn.eq(0).css('opacity','0.4');
            bnrBtn.eq(1).css('opacity','1');
        }
        bnrGr.css({
            marginLeft : ind*-100+'%' 
        });
        paging.removeClass('show');
        $(this).addClass('show');
    }
    // 배너01 슬라이드_모바일
    function bnrswipeLeft(){
        j++;
        if( j >= 2){
            j = 2;
        }
        bnrGr.css({
            marginLeft : j*-100+'%'
        });
        paging.removeClass('show');
        paging.eq(j).addClass('show');
    }
    function bnrswipeRight(){
        j--;
        if( j <= 0){
            j = 0;
        }
        bnrGr.css({
            marginLeft : j*-100+'%'
        });
        paging.removeClass('show');
        paging.eq(j).addClass('show');
    }

    // 컨텐츠02 슬라이드
    cnt02tab.click(liSlide);
    function liSlide(){
        var ind = $(this).index();
        cnt02Gr.css({
            marginLeft : ind*-100+'%'
        });
        cnt02tab.removeClass('on');
        $(this).addClass('on');
        q = ind;
    };
    function left(){
        q++;
        if(q >= 3){
            q = 3;
        }
        cnt02Gr.css({
            marginLeft : q*-100+'%'
        });
        cnt02tab.removeClass('on');
        cnt02tab.eq(q).addClass('on');
    };
    function right(){
        q--;
        if(q <= 0){
            q = 0;
        }
        cnt02Gr.css({
            marginLeft : q*-100+'%'
        })
        cnt02tab.removeClass('on');
        cnt02tab.eq(q).addClass('on');
    };
});