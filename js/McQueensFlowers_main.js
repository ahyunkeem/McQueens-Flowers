$(function(){
    var i = 0;
    var hi = 0;
    var vidBtn = $('.cnt01>.cntLeft>section>article>.image>.btn');
    var vidCls = $('.lightBox>.btn');
    var bnrGr = $('.bnr01>.images>.imgView>.imgGroup');
    var bnrBtn = $('.bnr01>.texts>.btns>div');
    var paging = $('.bnr01>.paging>li');
    var cnt02Gr = $('.cnt02>section>.artView>.artGroup');
    var cnt02tab = $('.cnt02>section>.tab>li');
    var scrBtn = $('.scrBtn');

    // scrBtn.click(function(){
    //     alert('선택완료');
    // });
    
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


    if (width<420){
        
    }else if(width<=1024){
        
    }else if(width>1024){
        hi = 120;
    }


    // 스크롤 버튼
    scrBtn.click(function(){
        scrBtn.css('height',hi+'px');
    });



});