$(function(){
    var wd = $(window).width();
    var scrBtn = $('.scrBtn');
    var clo = $('.navBoxWrap>.close>.btn');
    var i = 0;
    var ml = 0;
    var j = 0;
    var bnrBtn = $('.bnr02>.bnrTop>.btns>div');
    var bnrVw = $('.bnr02>.bnrBtm>.bnrView');
    var bnrGr = $('.bnr02>.bnrBtm>.bnrView>.bnrGroup');
    var txt = $('.bnr02>.bnrBtm>.bnrView>.bnrGroup>.bnrGr>.texts');

    if(wd > 1024){
        // pc버전
        ml = -83.33;
    }else if(wd >= 420 && wd <= 1024 ){
        // tab버전
        ml = -100;
    }else{
        // 모바일버전

        ml = -100;
        // 배너02 슬라이드_모바일
        bnrVw.swipeleft(function(){
            j++;
            bnrBtn.eq(0).css('opacity',1);
            if(j>=2){
                j=2;
                bnrBtn.eq(1).css('opacity',0.3);
            }
            bnrGr.css({
                marginLeft : j*ml+'%'
            });
            txt.removeClass('on');
            txt.eq(j).addClass('on');
        });
        bnrVw.swiperight(function(){
            j--;
            bnrBtn.eq(1).css('opacity',1);
            if(j<=0){
                j=0;
                bnrBtn.eq(0).css('opacity',0.3);
            }
            bnrGr.css({
                marginLeft : j*ml+'%'
            });
            txt.removeClass('on');
            txt.eq(i).addClass('on');
        });
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

    // 배너02 슬라이드
    bnrBtn.eq(1).click(function(){
        i++;
        bnrBtn.eq(0).css('opacity',1);
        if(i>=2){
            i=2;
            bnrBtn.eq(1).css('opacity',0.3);
        }
        bnrGr.css({
            marginLeft : i*ml+'%'
        });
        txt.removeClass('on');
        txt.eq(i).addClass('on');
    });
    bnrBtn.eq(0).click(function(){
        i--;
        bnrBtn.eq(1).css('opacity',1);
        if(i<=0){
            i=0;
            bnrBtn.eq(0).css('opacity',0.3);
        }
        bnrGr.css({
            marginLeft : i*ml+'%'
        });
        txt.removeClass('on');
        txt.eq(i).addClass('on');
    });
});