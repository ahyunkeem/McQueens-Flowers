$(function(){
    $('.hdr').load('../inc/header.html', function(){
        // 각 위치를 넣어줄 방을 생성
        var loc = [$('body>div')];
        for(var i = 0; i < $('body>div').length; i++){
            loc[i] = $('body>div').eq(i).offset().top;
        }
        $('.hdrWrap h4').click(function(){
            ind = $(this).index();
            $('html').animate({scrollTop : loc[ind]});
        });
        console.log(loc);
    });
    $('.ftr').load('../inc/footer.html');
});