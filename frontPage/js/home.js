$(document).ready(function(){
    window.sidbarLeft = 0;
    window.sidbarRight = 0;
    window.feedback = 0;

    //阻止右键事件
    $(window).contextmenu(function(e){
        e.preventDefault()
    });
    // 初始化标签的叉
    $(".label-son i").css("display","none");


    // 查询所有的localStorage
    for(var i=0;i<localStorage.length;i++){
        var key = localStorage.key(i)
        console.log(key);
       // console.log(key+"----"+localStorage.getItem(key));
    }


    // 获取浏览器基本版本信息
    var broswer = window.navigator.userAgent;

    // 判断浏览器类型
    var broChromeType = broswer.indexOf("Chrome");
    var broFirefoxType = broswer.indexOf("Firefox");
    var broEdgType = broswer.indexOf("Edg");

    // 判断拥有谷歌内核的浏览器具体类型
    if (broChromeType != -1) {
        if (broEdgType != -1) {
            //alert("Edge浏览器");
        }else{
            //alert("谷歌浏览器");
        }
    }
    if (broFirefoxType != -1) {
        //alert("火狐浏览器");
        $("#searchBlurBox").css("display","none");
        $(".body-five").css("background","rgba(0,0,0,0.8)");
        $(".add-label-form").css("background","rgba(0,0,0,0.8)");
        $("#settingBlurBox").css("display","none").prev().css("display","none");
        $("#labelBlurBox").css("display","none").prev().css("display","none");
        // -------------------------------------------------------
        $(".body-six").css("background","rgba(0,0,0,0.9)");
        $(".login-form").css("background","rgba(255,255,255,0.3)")
        $(".register-form").css("background","rgba(255,255,255,0.3)")
        $(".forget-form").css("background","rgba(255,255,255,0.3)")
    }
    
    // console.log(window.navigator.userAgent);

    $(".search-btn").click(function(){
        $(".search-box form").submit();
        
    });


    // 左侧边栏弹出按钮
    $(".sidbar-left-btn").click(function(){
        if(sidbarLeft == 1){
            $(".body-two").removeClass("bodyTwoActive");
            // $(".vague").removeClass("vagueActive")
            sidbarLeft=0;
            
            return false;
        }
        $(".body-two").addClass("bodyTwoActive");
        
        // $(".vague").addClass("vagueActive")
        sidbarLeft=1;
        setTimeout(function(){
            window.RadioLeft = $(".loadeBox .bar").offset().left;
	        window.BarLeft = $(".loadeBox .bar").offset().left;
        },500);
        return false;
    });
   
    //*****************************************************************
    // 右侧边栏弹出按钮
    $(".sidbar-right-btn").click(function(){
        if(sidbarRight == 1){
            $(".body-three").removeClass("sidbarActive");
            sidbarRight = 0;
            return false;
        }
        $(".body-three").addClass("sidbarActive");
        sidbarRight = 1;
        return false;
    });
    //*****************************************************************
    // 问题反馈弹出按钮
    $(".feedback-btn").click(function(){
    
        if(feedback == 1){
            $(".body-four").removeClass("bodyFourActive");
            feedback = 0;
            return false;
        }
        $(".body-four").addClass("bodyFourActive");
        feedback = 1;
        return false;
    });
    //*****************************************************************
    // 点击body-one实现收回其他弹出层
    $(".body-one").click(function(){
        $(".body-two").removeClass("bodyTwoActive");
        $(".body-three").removeClass("sidbarActive");
        $(".label-son i").css("display","none");
        sidbarRight = 0;
        sidbarLeft=0;
        return false;
    });
    



    // 左侧边栏设置模块滑动
    $(".left-box ul li").click(function(){
        var classVal = $(this).attr("class");
        var cv = classVal.split("-");
        $(".long-box-"+cv[1]).addClass("longBoxActive").siblings().removeClass("longBoxActive");
        $(this).addClass("liActive").siblings().removeClass("liActive");
    });

    // 预览图片
    $("[type='file']").change(function(){
       var r= new FileReader();

        var f=document.getElementById('Img').files[0];
        var fback=document.getElementById('ImgBack').files[0];
        console.log(f);
        console.log(fback);

        if (f != null) {
            // 设置标签图标预览图
            r.readAsDataURL(f);
            r.onload=function (e) {
                window.labelImg = this.result;
                $(".upload-img").prop("src",this.result)
            };
        }else if (fback != null) {
            // 设置背景图片预览图
            r.readAsDataURL(fback);
            r.onload=function (e) {
                window.bgResult = this.result;
                $(".upload-back-img").prop("src",this.result)
                window.backImgName = fback;
            };
            $("#upload-btn").css("display","block");
            $("#but").css("display","block");
        }
        
        
    });

    // 添加标签
    $(".add-label").click(function(){
        $(".body-five").css("display","block");  
    });
    $(".closeFormBtn").click(function(){
        $(".body-five").css("display","none");  
    });


    // 打开登入框
    $(".login-btn").click(function(){
        $(".body-six").css("display","block");
        $(".login-form").css("display","block")
    });
    // 关闭登入框
    $(".login-form span").click(function(){
        $(".body-six").css("display","none");
        $(".login-form").css("display","none")
    });


    // 打开注册栏
    $(".regiest-btn").click(function(){
        $(".body-six").css("display","block");
        $(".register-form").css("display","block")
    });
    // 关闭注册栏
    $(".register-form span").click(function(){
        $(".body-six").css("display","none");
        $(".register-form").css("display","none")
    });


    // 关闭登入栏，打开重置密码
    $(".forgetPassword").click(function(){
        $(".login-form").css("display","none");
        $(".forget-form").css("display","block");
    });
    // 关闭重置密码，打开登入栏
    $(".forget-form span").click(function(){
        $(".login-form").css("display","block");
        $(".forget-form").css("display","none");
    });



    // 添加常用标签
    $(".label-lib").on("click",".label-lib-son",function(){
        var imgSrc = $(this).find("img").attr("src");
        var imgLink = $(this).find("input").val();
        var imgName = $(this).find("input").attr("name");

        var labelRadiusSon = $(".title2").text();
        $(".label-box").append(
            "<div class='label-son' style='border-radius:"+labelRadiusSon+";'>"+
            "<i class='fa fa-close'></i>"+
            "<a href='"+imgLink+"'><img src='"+imgSrc+"' width='100%'></a>"+
            "<p>"+imgName+"</p>"+
            "</div>");
        var labelSon = $(".label-box").html();
        localStorage.setItem("labelSon",labelSon);
        
    })
 
    // 跳转页面
    $(".label-box").on("click",".label-son a",function(){      
        var hrefVal = $(this).attr("href");
        window.location.href=hrefVal;
    })
   

    // $(".add-label").click(function(){
    //     var labelSon = $(".title2").text();
    //     $(".label-box").append("<div class='label-son' style='border-radius:"+labelSon+";'></div>")
    // });
})
