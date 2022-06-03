$(function(){
    $('.hdrPc').load('./inc/header_pc.html');
    $('.hdrTab').load('./inc/header_tab.html', function(){
        var i = $('header>nav>i');
        i.click(function(){
            $('.navBoxWrap').css({
                marginLeft : 0,
            });
        });
    });
    $('.ftr').load('./inc/footer.html');
});