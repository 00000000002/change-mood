$(function(){
	new LoadBar('.bar','.radio','.title','.loading');
	new LoadBar('.bar2','.radio2','.title2','.loading2');
	new LoadBar('.bar3','.radio3','.title3','.loading3');
	new LoadBar('.bar4','.radio4','.title4','.loading4');

	function LoadBar(bar,radio,title,loading) {
		// 进入函数先取消绑定鼠标移动时间
		$(window).unbind("mousemove");

		// 总进度条宽度
		window.BarWidth = $(bar).width();
		// 总按钮宽度
		window.RadioWidth = $(radio).width();
		

		$(radio).mousedown(function(e){         
				
			// 点击之后绑定移动事件
			$(window).bind("mousemove");
			// 鼠标移动事件
			$(window).mousemove(function(e){

				// 判断当，当前X位置小于进度条左边距的时候为0 并且固定left值
				if(e.pageX < BarLeft){

					$(radio).css("left","0px");
					$(title).text("0%");
						
				}
				// 判断 当，当前X位置大于 进度条总宽度+左边距时定位到最右边
				else if(e.pageX >(BarLeft+BarWidth)){
					$(radio).css("right","0px");
					$(title).text("100%");
				}
				// 正常情况下 可移动
				else{
					
					$(radio).css("left",e.pageX-RadioLeft+"px");
					
					// 最新的按钮位置
					var newRadioLeft = $(radio).offset().left;
					// 最新的进度条位置
					var newBarLeft = $(bar).offset().left;
					// 计算位置移动的百分比
					var val = ((newRadioLeft-newBarLeft)/BarWidth)*100;
					// 向下取整
					val = Math.floor(val);
					if (val > 100) {
						val = 100;
					}
					$(title).text(val+"%");
					$(loading).width(val+"%");
				}
			});
		});


		$(radio).mouseup(function(e){
			$(window).unbind("mousemove"); 
		});
		$(window).mouseup(function(e){
			$(this).unbind("mousemove");   
		});
	}
	
})