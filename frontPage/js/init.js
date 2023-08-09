$(function(){
    // 判断是否为第一次使用
    if (localStorage.length == 0) {
        localStorage.setItem("searchBoxWidth","35%");
        localStorage.setItem("searchBoxRadius","0");
        localStorage.setItem("labelSonRadius","0%");
        localStorage.setItem("vagueBack","0");
    }
    init();
    function init() {
        var labelSon = localStorage.getItem("labelSon");
        $(".label-box").append(labelSon);


        // 获取本地缓存的输入框宽度
        var searchBoxWidth = localStorage.getItem("searchBoxWidth");
        // 输入框宽度
        $(".search-box").width(searchBoxWidth);
        // 进度条进度
        $(".searchBox>div .loading").width(searchBoxWidth);
        // 百分比显示
        $(".searchBoxWidthTitle").text(searchBoxWidth);
        // 滑动按钮显示
        $(".radio").css("left",searchBoxWidth);

        // 获取开关的本地缓存
        var searchBlur =localStorage.getItem("searchBlur");
        var searchBorder =localStorage.getItem("searchBorder");
        var settingBulr =localStorage.getItem("settingBulr");
        var labelBulr =localStorage.getItem("labelBulr");
        var backgroundBulr =localStorage.getItem("backgroundBulr");
        // 搜索框模糊
        $("#searchBlurSwitch").next().val(searchBlur);
        $("#searchBorderSwitch").next().val(searchBorder);
        $("#settingBulrSwitch").next().val(settingBulr);
        $("#labelBulrSwitch").next().val(labelBulr);
        $("#backgroundBulrSwitch").next().val(backgroundBulr);

        // 获取标签圆角
        var labelSonRadius = localStorage.getItem("labelSonRadius");
        // 标签圆角
        $(".label-box .label-son").css("border-radius",labelSonRadius);
        $("#labelSonTitle").text(labelSonRadius);
        $("#labelSonRadio").css("left",labelSonRadius);
        $("#labelSonLoading").css("width",labelSonRadius);

        // 获取搜索栏圆角
        var searchBoxRadius = localStorage.getItem("searchBoxRadius");
        // 搜索栏圆角
        $(".search-box").css("border-radius",searchBoxRadius+"px");
        $("#searchBoxRadiusTitle").text(searchBoxRadius+"%");
        $("#searchBoxRadiusRadio").css("left",searchBoxRadius+"%");
        $("#searchBoxRadiusLoading").css("width",searchBoxRadius+"%");

        // 获取背景蒙版
        var vagueBack = localStorage.getItem("vagueBack");
        // 背景蒙版
        $(".vague").css("background","rgba(0,0,0,"+vagueBack+")");
        $(".title4").text(vagueBack*100+"%");
        $(".radio4").css("left",vagueBack*100+"%");
        $(".loading4").css("width",vagueBack*100+"%");

        var bgImg = localStorage.getItem("bgImg");
        // $(".bgImg").prop("src","");
        if (bgImg != null) {
            $(".bgImg").prop("src",bgImg);
        }
    }

    
    
});