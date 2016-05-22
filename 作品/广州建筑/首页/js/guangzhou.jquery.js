$(function(){
			//大轮播
			var num=0;
			var t;
			$(".imgbox a img").fadeOut(400).eq(0).fadeIn(400);
			t=setInterval(move,2000)
				function move(){
					num++;
					if(num>$(".imgbox a img").length-1){
						num=0;
					}
					$(".imgbox a img").fadeOut(400).eq(num).fadeIn(400);
					$(".btnbox div").removeClass("active").eq(num).addClass("active")
				}
			// 鼠标移上效果
			
			$(".box").mouseover(function(){
				clearInterval(t);				
			})
			$(".box").mouseout(function () {
			t=setInterval(move,3000)					
			})
			//点击按钮与图片对应
			$(".btnbox div").click(function () {
				var index=$(this).index();
				num=index;
				$(".imgsbox a img").fadeOut(400).eq(num).fadeIn(400);
			    $(".btnbox div").removeClass("active").eq(num).addClass("active")
			})



			//小轮播
			var num1=0;
			var tt;
			$(".imgbox1 a img").fadeOut(300).eq(0).fadeIn(300);
			tt=setInterval(move1,2500)
				function move1(){
					num1++;
					if(num1>$(".imgbox1 a img").length-1){
						num1=0;
					}
					$(".imgbox1 a img").fadeOut(300).eq(num1).fadeIn(300);
					$(".btnbox1 div").removeClass("active1").eq(num1).addClass("active1")
				}
			// 鼠标移上效果
			
			$(".box1").mouseover(function(){
				clearInterval(tt);				
			})
			$(".box1").mouseout(function () {
			tt=setInterval(move1,1000)					
			})
			//点击按钮与图片对应
			$(".btnbox1 div").click(function () {
				var index=$(this).index();
				num=index;
				$(".imgsbox1 a img").fadeOut(300).eq(num).fadeIn(300);
			    $(".btnbox1 div").removeClass("active1").eq(num).addClass("active1")
			})




			//选项卡
			 $(".tab li").mouseover(function(){
	        	$(".tab li").eq($(this).index()).addClass("hot").siblings().removeClass('hot');
				$(".bd").hide().eq($(this).index()).show();

	        });

})