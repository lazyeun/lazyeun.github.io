$(document).ready(function(){
    
    $(window).scroll(function(){
       win_scr = $(window).scrollTop();
        if(win_scr <= 0){
            $(".top-btn").stop().fadeOut();
        }else{
            $(".top-btn").css({display:"flex",
                               justifyContent: "center",
                                alignItems: "center"});
            $(".top-btn").stop().fadeIn();
        }
    });
    
    //top버튼 클릭
    $(".top-btn").click(function(){
       $("html, body").stop().animate({scrollTop:0},500);
    });

    $(document).ready(function(){
        menu_click();
    });
    
});