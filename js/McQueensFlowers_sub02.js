$(function(){
    var wd = $(window).width();
    var hi = 0;
    var hidw = 0;
    var scrBtn = $('.scrBtn');
    var clo = $('.navBoxWrap>.close>.btn');
    var li = $('.bnr01>.accordion>li');
    var linum = $('.bnr01>.accordion>li:nth-child(odd)');
    var bnrBtn = $('.bnr02>.btns');
    var imgVw = $('.bnr02>.imgView');
    var imgGr = $('.bnr02>.imgView>.imgGroup');
    var con = $('.bnr02>.control');
    var i = 0;
    var ml = 0;
    var auto = setInterval(right,1200);


    if(wd > 1024){
        // pc버전
        hi = 120;
        hidw = 40;
        ml = 20.5;
    }else if(wd >= 420 && wd <= 1024 ){
        // tab버전
        hi = 120;
        hidw = 40;
        ml = 33.6;
    }else{
        // 모바일버전
        hi = 60;
        hidw = 20;
        ml = 50;
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

    // 배너01 아코디언
    linum.click(function(){
        li.removeClass('show');
        $(this).addClass('show');
        li.find('span').text('SPREAD');
        $(this).find('span').text('FOLD');
    });

    // 배너02 슬라이드
    imgGr.find('.image:last').prependTo(imgGr);
    imgGr.css('margin-left',-ml+'%');
    bnrBtn.find('.right').click(right);
    bnrBtn.find('.left').click(left);
    function right(){
        imgGr.stop().animate({
            marginLeft : 2*-ml+'%'
        },500,function(){
            imgGr.find('.image:first').appendTo(imgGr);
            imgGr.css('margin-left',-ml+'%');
        });
    }
    function left(){
        imgGr.stop().animate({
            marginLeft : 0
        },500,function(){
            imgGr.find('.image:last').prependTo(imgGr);
            imgGr.css('margin-left',-ml+'%');
        });
    }
    con.find('.play').click(play);
    con.find('.pause').click(pause);
    function play(){
        auto = setInterval(right,1200);
    }
    function pause(){
        clearInterval(auto);
    }
});