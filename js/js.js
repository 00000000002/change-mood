$(function(){
    $("#backGroungPage").click(function(){
        window.open(chrome.extension.getURL("back.html"));
    });
    $("#getBackGroundTitle").click(function(){
        var backPage = chrome.extension.getBackgroundPage();
        alert("后台标题为："+backPage.document.title);
    });

    $("#setBackGroundTitle").click(function(){
        var titles = prompt("设置后台标题","新标题");
        var backPage = chrome.extension.getBackgroundPage();
        backPage.document.title = titles;
        alert("后台标题为："+backPage.document.title);
    });

    $("#callBackFun").click(function () {  
        var back = chrome.extension.getBackgroundPage();
        back.backjs();
    });
});
