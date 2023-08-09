$(function(){

    var sw = $(".switch-btn");
    $(".switch-btn").each(function(){
        console.log($(this).next().val());
        // 获取input隐藏域的值来判断是否开启
        var sw = $(this).next().val()

        // 获取id当前点击按钮的id来进行对应的设置
        var idVal = $(this).attr("id");

        // 默认开启，所以如果状态为 1 则不需要单独设置
        if (sw == 1) {
            // 显示开的状态
            addClassSwitch(idVal);
             // 如果当前点击的id为指定值则进行对应的初始显示
            if (idVal == "searchBlurSwitch") {
                $(".search-box").addClass("searchBoxBlurActive");
            }
            if (idVal == "searchBorderSwitch") {
                $(".search-box").addClass("searchBoxBorderActive");
            }
            if (idVal == "settingBulrSwitch") {
                $(".body-two").addClass("settingBoxBlurActive");
            }
            if (idVal == "labelBulrSwitch") {
                $(".body-three").addClass("labelBoxBlurActive");
            }
            if (idVal == "backgroundBulrSwitch") {
                $(".bgImg").addClass("vagueBlurAction");
            }
        }
        
        if (sw == 0) {
            // 显示关的状态
            removeClassSwitch(idVal);

            // 如果当前点击的id为指定值则进行对应的初始显示
            if (idVal == "searchBlurSwitch") {
                $(".search-box").removeClass("searchBoxBlurActive");
            }
            if (idVal == "searchBorderSwitch") {
                $(".search-box").removeClass("searchBoxBorderActive");
            }
            if (idVal == "settingBulrSwitch") {
                $(".body-two").removeClass("settingBoxBlurActive");
            }
            if (idVal == "labelBulrSwitch") {
                $(".body-three").removeClass("labelBoxBlurActive");
            }
            if (idVal == "backgroundBulrSwitch") {
                $(".bgImg").removeClass("vagueBlurAction");
            }
        }
    });


	$(".switch-btn").click(function(){
        // 判断当前开关类型 1：开启  0：关闭
        var i = $(this).next().val();
        if (i == 1) {
            // 默认值为 1 的时候点击关闭，变成0
            i = 0;
        }else{
            // 默认值为 0 的时候点击开启，变成1
            i = 1;
        }
        
        var idVal = $(this).attr("id");
    
		if(i == 0){ 
            // 为 0 关闭
            removeClassSwitch(idVal);

            // 关闭搜索框模糊度
            if (idVal == "searchBlurSwitch") {
                localStorage.setItem("searchBlur",i);
                $(".search-box").removeClass("searchBoxBlurActive");
            }
            // 关闭搜索框边框
            if (idVal == "searchBorderSwitch") {
                localStorage.setItem("searchBorder",i);
                $(".search-box").removeClass("searchBoxBorderActive");
            }
            // 关闭设置栏模糊
            if (idVal == "settingBulrSwitch") {
                localStorage.setItem("settingBulr",i);
                $(".body-two").removeClass("settingBoxBlurActive");
            }
            // 标签栏模糊
            if (idVal == "labelBulrSwitch") {
                localStorage.setItem("labelBulr",i);
                $(".body-three").removeClass("labelBoxBlurActive");
            }
            if (idVal == "backgroundBulrSwitch") {
                localStorage.setItem("backgroundBulr",i);
                $(".bgImg").removeClass("vagueBlurAction");
            }
        }
        if(i == 1){
            // 为 1 开启
            addClassSwitch(idVal);
            // 开启搜索框模糊度
            if (idVal === "searchBlurSwitch") { 
                localStorage.setItem("searchBlur",i); 
                $(".search-box").addClass("searchBoxBlurActive");
            }
            // 开启搜索框边框
            if (idVal == "searchBorderSwitch") {
                localStorage.setItem("searchBorder",i);
                $(".search-box").addClass("searchBoxBorderActive");
            }
             // 开启设置栏模糊
             if (idVal == "settingBulrSwitch") {
                localStorage.setItem("settingBulr",i);
                $(".body-two").addClass("settingBoxBlurActive");
            }
            // 标签栏模糊
            if (idVal == "labelBulrSwitch") {
                localStorage.setItem("labelBulr",i);
                $(".body-three").addClass("labelBoxBlurActive");
            }
            // 主背景模糊
            if (idVal == "backgroundBulrSwitch") {
                localStorage.setItem("backgroundBulr",i);
                $(".bgImg").addClass("vagueBlurAction");
            }
        }
	});  


    // 显示开启的代码
    function addClassSwitch(a){
        
        $("#"+a).parent().addClass("addSwitchBox");
        $("#"+a).addClass("addSwitchBtn").text("开").next().val(1);
    }
    // 显示关闭的代码
    function removeClassSwitch(a){
        $("#"+a).parent().removeClass("addSwitchBox");
        $("#"+a).removeClass("addSwitchBtn").text("关").next().val(0);
    }



    // 还原设置
    $(".recover").click(function(){
        confirm("是否还原到默认设置？");{
            localStorage.clear();
            // 百分比显示
            // 将宽度存入到localStorage中
            localStorage.setItem("searchBoxWidth","35%");
            localStorage.setItem("searchBoxRadius","0");
            localStorage.setItem("labelSonRadius","0%");
            localStorage.setItem("vagueBack","0");

            layer.msg("恢复成功，请刷新！");
        }
        
    });
});
