$(document).ready(function(){
    menu_inx = 0;
    
    //menu 클릭 시 라인 이동
    function menu_click(){
        li_width = $(".header .menu-li").eq(menu_inx).width();
        li_left = $(".header .menu-li").eq(menu_inx).position().left;
        $(".header .menu-line").stop().animate({left:li_left +10 , width:li_width},300);
    }
    
    //main 타이틀 텍스트 타이핑 효과
    function typeTxt(){
        typingIdx = 0;
        typingBool = false;
        typingTxt = $(".main-txt-title").text();
        typingTxt = typingTxt.split("");

        if(typingBool == false){
            typingBool = true;        
            typeInt = setInterval(typing,  100);
        }
        
    }
    
    function typing(){
        if(typingIdx < typingTxt.length){
            $(".typing").append(typingTxt[typingIdx]);
            typingIdx++;
        }else{
            clearInterval(typeInt);
        }
    }
    
    
    $("a").click(function(event){
        event.preventDefault();
    });
    
    $(window).scroll(function(){
        var scr_top = $(window).scrollTop();
        var s2_top = $(".section2").offset().top;
        var s3_top = $(".section3").offset().top;
        var s3_height = $(".section3").height();
        var s3_bottom = s3_top + s3_height;
        
        //top버튼 hide /show
        if(scr_top <= 0){
            $(".top-btn").stop().fadeOut();
        }else{
            $(".top-btn").stop().fadeIn();
        }
        
        //메뉴바 hide / show
        if(scr_top >= s2_top){
            $(".header").show();
        }else{
            $(".header").hide();
        }
        
        //섹션3 스킬 애니메이션
        if(scr_top >= s3_top && scr_top < s3_bottom){
        $(".chart1").easyPieChart({
            barColor: '#d4a9e2',  //차트가 그려질 색
            trackColor: '#eeeeee',  // 차트가 그려지는 트랙의 기본 배경색(chart1 의 회색부분)
            scaleColor: '#fff', // 차트 테두리에 그려지는 기준선 (chart2	의 테두리 선)
            lineCap: 'butt', // 차트 선의 모양 chart1 butt / chart2 round / chart3 square
            lineWidth: 30, // 차트 선의 두께
            size: 200, // 차트크기
            animate: 1000, // 그려지는 시간 
            onStart: $.noop,
            onStop: $.noop
          });
        $(".chart2").easyPieChart({
            barColor: '#fabbe6',  //차트가 그려질 색
            trackColor: '#eeeeee',  // 차트가 그려지는 트랙의 기본 배경색(chart1 의 회색부분)
            scaleColor: '#fff', // 차트 테두리에 그려지는 기준선 (chart2	의 테두리 선)
            lineCap: 'butt', // 차트 선의 모양 chart1 butt / chart2 round / chart3 square
            lineWidth: 30, // 차트 선의 두께
            size: 200, // 차트크기
            animate: 1000, // 그려지는 시간 
            onStart: $.noop,
            onStop: $.noop
          });
        $(".chart3").easyPieChart({
            barColor: '#d4a9e2',  //차트가 그려질 색
            trackColor: '#eeeeee',  // 차트가 그려지는 트랙의 기본 배경색(chart1 의 회색부분)
            scaleColor: '#fff', // 차트 테두리에 그려지는 기준선 (chart2	의 테두리 선)
            lineCap: 'butt', // 차트 선의 모양 chart1 butt / chart2 round / chart3 square
            lineWidth: 30, // 차트 선의 두께
            size: 200, // 차트크기
            animate: 1000, // 그려지는 시간 
            onStart: $.noop,
            onStop: $.noop
          });
        $(".chart4").easyPieChart({
            barColor: '#fabbe6',  //차트가 그려질 색
            trackColor: '#eeeeee',  // 차트가 그려지는 트랙의 기본 배경색(chart1 의 회색부분)
            scaleColor: '#fff', // 차트 테두리에 그려지는 기준선 (chart2	의 테두리 선)
            lineCap: 'butt', // 차트 선의 모양 chart1 butt / chart2 round / chart3 square
            lineWidth: 30, // 차트 선의 두께
            size: 200, // 차트크기
            animate: 1000, // 그려지는 시간 
            onStart: $.noop,
            onStop: $.noop
          });
        $(".chart5").easyPieChart({
            barColor: '#d4a9e2',  //차트가 그려질 색
            trackColor: '#eeeeee',  // 차트가 그려지는 트랙의 기본 배경색(chart1 의 회색부분)
            scaleColor: '#fff', // 차트 테두리에 그려지는 기준선 (chart2	의 테두리 선)
            lineCap: 'butt', // 차트 선의 모양 chart1 butt / chart2 round / chart3 square
            lineWidth: 30, // 차트 선의 두께
            size: 200, // 차트크기
            animate: 1000, // 그려지는 시간 
            onStart: $.noop,
            onStop: $.noop
          });
        }
        
    });
    
    $(".header .menu-li").click(function(){
        //메뉴 인덱스
        menu_inx = $(this).index();
        //섹션별 top 값
        var s2_top = $(".section2").offset().top;
        var s3_top = $(".section3").offset().top;
        var s4_top = $(".section4").offset().top;
        var s5_top = $(".section5").offset().top;
        menu_click();
        
        if(menu_inx == 0){
            $("html").stop().animate({scrollTop:s2_top},500);
        }else if(menu_inx == 1){
            $("html").stop().animate({scrollTop:s3_top},500);
        }else if(menu_inx == 2){
            $("html").stop().animate({scrollTop:s4_top},500);
        }else if(menu_inx == 3){
            $("html").stop().animate({scrollTop:s5_top},500);
        }
        
    });
    
    $(".top-btn").click(function(){
       $("html, body").stop().animate({scrollTop:0},500);
    });
    
    //포트폴리오 바로가기
    $(".hanyul").click(function(){
        var openNewWin = window.open("about:blank");
        openNewWin.location.href="http://geekgirl.dothome.co.kr/hanyul/index.html";
    });
    $(".deeps").click(function(){
        var openNewWin = window.open("about:blank");
        openNewWin.location.href="http://geekgirl.dothome.co.kr/deeps/index.html";
        
    });
    $(".terarosa").click(function(){
        var openNewWin = window.open("about:blank");
        openNewWin.location.href="http://geekgirl.dothome.co.kr/bootstrap/index.html";
        
    });
    $(".ksure").click(function(){
        var openNewWin = window.open("about:blank");
        openNewWin.location.href="http://geekgirl.dothome.co.kr/ksure/index.html";
        
    });
    $(".lazyeun").click(function(){
        var openNewWin = window.open("about:blank");
        openNewWin.location.href="http://lazyeun.github.io";
        
    });
    
    
    $(document).ready(function(){
        typeTxt();
        menu_click();
    });
    
});