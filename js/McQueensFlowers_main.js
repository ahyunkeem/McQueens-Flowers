$(function(){
    var wd = $(window).width();
    var j = 0;
    var i = 0;
    var hi = 0;
    var hidw = 0;
    var vidBtn = $('.cnt01>.cntLeft>section>article>.image>.btn');
    var vidCls = $('.lightBox>.btn');
    var bnrVw = $('.bnr01>.images>.imgView');
    var bnrGr = $('.bnr01>.images>.imgView>.imgGroup');
    var bnrBtn = $('.bnr01>.texts>.btns>div');
    var paging = $('.bnr01>.paging>li');
    var cnt02Gr = $('.cnt02>section>.artView>.artGroup');
    var cnt02tab = $('.cnt02>section>.tab>li');
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
        // 배너01 슬라이드_모바일
        bnrVw.swipeleft(function(){
            j++;
            if( j >= 2){
                j = 2;
            }
            bnrGr.css({
                marginLeft : j*-100+'%'
            });
            paging.removeClass('show');
            paging.eq(j).addClass('show');
        });
        bnrVw.swiperight(function(){
            j--;
            if( j <= 0){
                j = 0;
            }
            bnrGr.css({
                marginLeft : j*-100+'%'
            });
            paging.removeClass('show');
            paging.eq(j).addClass('show');
        });
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
    paging.click(function(){
        var ind = $(this).index();
        i = ind; j = ind;
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
    });

    // 컨텐츠02 슬라이드
    cnt02tab.click(function(){
        var ind = $(this).index();
        cnt02Gr.css({
            marginLeft : ind*-100+'%'
        });
        cnt02tab.css('border-bottom','none');
        $(this).css('border-bottom','1px solid #000');
    });

});