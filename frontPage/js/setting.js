$(function(){
    // 搜索框长度
    $(".radio").mousemove(function(){
        var searchBox = $(".title").text()
        // 截取数字部分
        var a = searchBox.substring(0,searchBox.indexOf("%"));
        console.log(a);
        /* if(a > 80 || a == 100){
            searchBox = 80+"%";
            var searchBox = $(".title").text("80%");
            $(".loading").css("width","80%");
            $(".radio").css("left","80%");
        }
        if (a < 30 || a == 0) {
            searchBox = 30+"%";
            var searchBox = $(".title").text("30%");
            $(".loading").css("width","30%");
            $(".radio").css("left","30%");
        } */

        // 将宽度存入到localStorage中
        localStorage.setItem("searchBoxWidth",searchBox);
        
        // 搜索框长度
        $(".search-box").width(searchBox);
        
    });

    // 标签角度
    $(".radio2").mousemove(function(){
        var labelSon = $(".title2").text();
        $(".label-box .label-son").css("border-radius",labelSon);
        // 记录标签圆角值
        localStorage.setItem("labelSonRadius",labelSon);
        
    });

    // 搜索框圆角
    $(".radio3").mousemove(function(){
        var searchRadius = $(".title3").text();
        
         // 截取数字部分
         var a = searchRadius.substring(0,searchRadius.indexOf("%"));
         searchRadius = a;

        //  if (a > 50) {
        //     searchRadius = 50;
        //  }else{
        //      searchRadius = a;
        //  }
         $(".search-box").css("border-radius",searchRadius+"px");
         // 储存搜索栏圆角值
         localStorage.setItem("searchBoxRadius",searchRadius);
    });


    // 背景蒙版
    $(".radio4").mousemove(function(){
        var vagueBlackTitle = $(".title4").text();
        var a = vagueBlackTitle.substring(0,vagueBlackTitle.indexOf("%"));
        localStorage.setItem("vagueBack",a/100);
        $(".vague").css("background","rgba(0,0,0,"+(a/100)+")");

    });

    // 设置背景图片
    $("#upload-btn").click(function(){
        // alert(bgResult.length);
        $(".bgImg").prop("src",bgResult);
        localStorage.setItem("bgImg",bgResult);
    });

    // 添加自定义标签
    $("#addLabelSon").click(function(){
        // 获取标签圆角值
        var labelRadiusSon = $(".title2").text();
        // 获取输入的地址
        var ipName = $(this).parent().find("[name='ipName']").val();
        var ipAddr = $(this).parent().find("[name='ipAddr']").val();
        // 获取标签名称
        $(".label-box").append(
            "<div class='label-son' style='border-radius:"+labelRadiusSon+";'>"+
            "<i class='fa fa-close'></i>"+
            "<a href='"+ipAddr+"'><img src='"+labelImg+"' width='100%'></a>"+
            "<p>"+ipName+"</p>"+
            "</div>");
        // 添加之后获取所有标签
        var labelSon = $(".label-box").html();
        localStorage.setItem("labelSon",labelSon);
        return false;
    });

    // 删除标签
    $(".label-box").on("contextmenu",".label-son",function(e){
        
       $(".label-son i").css("display","block");
    });
    $(".label-box").on("click",".label-son i",function(){
        $(this).parent().remove();
        // 删除之后获取所有标签
        var labelSon = $(".label-box").html();
        localStorage.setItem("labelSon",labelSon);
        return false;
    });

});