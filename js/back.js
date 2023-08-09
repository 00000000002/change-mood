// function backjs(){

//     // 获取当前标签页
//     chrome.tabs.getSelected(null,function(tab){

//         var ttl = tab.title;
//         // 直接使用的话，调用的后台页面的js代码
//         // alert(ttl);
        
//         // 这样使用的话调用的当前标签页的js代码
//         chrome.tabs.executeScript(null,{code:"var kw = document.querySelector('#kw');kw.value = '英雄联盟';var button = document.querySelector('#su');button.click();"});
//     });
//     function autoSearch(){
        
        
//     }
    
// }
chrome.contextMenus.create({
    /**
     * 可以创建出二级菜单
     * radio 单选二级菜单
     * checkbox 多选二级菜单
     */
    // type:"radio",
    id :"1",
    title:"提交自动搜索",
    /**
     * 指定右键允许范围
     * editable 可编辑区域才可以右键显示
     * selection 选中范围内右键可显示
     */
    contexts:['editable','selection'],
    onclick:function(){
        chrome.tabs.executeScript(null,{code:"var kw = document.querySelector('#kw');kw.value = '英雄联盟';var button = document.querySelector('#su');button.click();"});
    },
    // 指定网址使用右键
    documentUrlPatterns:["https://www.baidu.com/*"]
});
chrome.contextMenus.create({
    /**
     * 可以创建出二级菜单
     * radio 单选二级菜单
     * checkbox 多选二级菜单
     */
    type:"radio",
    title:"子菜单1",
    parentId:"1",
    /**
     * 指定右键允许范围
     * editable 可编辑区域才可以右键显示
     * selection 选中范围内右键可显示
     */
    contexts:['editable','selection'],
    onclick:function(){
        chrome.tabs.executeScript(null,{code:"var kw = document.querySelector('#kw');kw.value = '英雄联盟';var button = document.querySelector('#su');button.click();"});
    },
    // 指定网址使用右键
    documentUrlPatterns:["https://www.baidu.com/*"]
});
chrome.contextMenus.create({
    /**
     * 可以创建出二级菜单
     * radio 单选二级菜单
     * checkbox 多选二级菜单
     */
    type:"radio",
    title:"子菜单2",
    parentId:"1",
    /**
     * 指定右键允许范围
     * editable 可编辑区域才可以右键显示
     * selection 选中范围内右键可显示
     */
    contexts:['editable','selection'],
    onclick:function(){
        chrome.tabs.executeScript(null,{code:"var kw = document.querySelector('#kw');kw.value = '英雄联盟';var button = document.querySelector('#su');button.click();"});
    },
    // 指定网址使用右键
    documentUrlPatterns:["https://www.baidu.com/*"]
});


