var j = jQuery.noConflict();




$(function() {
		var scene = $(".scene");
		var btns = $("div", $(".btnbox")[0]);
		var height = offsetWindow().height;
		for (var i = 0; i < scene.length; i++) {
			scene[i].style.height = height + "px";
		};
		var z = 2;
		var num = 0;
		   j(".iconfont").click(function(){
		   	
		   	   scene[0].style.top=height+"px";
		   	   
		   })
		for (var i = 0; i < btns.length; i++) {
			btns[i].index = i;
		
			btns[i].onclick = function() {
				var newnum = this.index;
				if (newnum > num) {
					scene[this.index].style.top = height + "px";
					scene[this.index].style.zIndex = z++;
					for (var j = 0; j < btns.length; j++) {
						btns[j].style.borderColor = "#ccc"
					};
					btns[this.index].style.borderColor = "";
					animate(scene[num], {
						top: -height
					}, 500)
					animate(scene[this.index], {
						top: 0
					}, 500)
					num = this.index;
				} else {
					scene[this.index].style.top = -height + "px";
					scene[this.index].style.zIndex = z++;
					for (var j = 0; j < btns.length; j++) {
						btns[j].style.background= "#ccc"
					};
					btns[this.index].style.background = "#000";
					animate(scene[num], {
						top: height
					}, 500)
					animate(scene[this.index], {
						top: 0
					}, 500)
					num = this.index;
				}
			}
		};
		var n = 0,
			flag1 = true,
			flag2 = true;
		mousewheel(document, function() {
			if (flag1) {
				flag1 = false;
				n--;
				if (n < 0) {
					n = 0;
					flag1 = true;
					flag2 = true;
				} else {
					scene[n].style.top = -height + "px";
					scene[n].style.zIndex = z++;
					for (var i = 0; i < btns.length; i++) {
						btns[i].style.background = "#ccc"
					};
					btns[n].style.background= "#000";
					if (n != 0) {
						animate(scene[n - 1], {
							top: height
						})
					}
					animate(scene[n], {
						top: 0
					}, 500, function() {
						flag1 = true;
						flag2 = true;
					})
				}
			}
		}, function() {
			if (flag2) {
				flag2 = false;
				n++;
				if (n > 4) {
					n = 4;
					flag1 = true;
					flag2 = true;
				} else {
					scene[n].style.top = height + "px";
					scene[n].style.zIndex = z++;
					for (var i = 0; i < btns.length; i++) {
						btns[i].style.background = "#ccc"
					};
					btns[n].style.background = "#000";
					animate(scene[n - 1], {
						top: -height
					})
					animate(scene[n], {
						top: 0
					}, 500, function() {
						flag1 = true;
						flag2 = true;
					})
				}
			}
		})
	})


//随机
j(function(){
	j(".boxbtn").css({
		background: getcolor()
	})
	function getcolor() {
		return "rgb(" + parseInt(255 * Math.random()) + "," + parseInt(255 * Math.random()) + "," + parseInt(255 * Math.random()) + ")";

	}
})
//随机颜色
j(function() {
	j(".boxbtn").hover(function() {
		j(this).css({
			background: getcolor(),
			"opacity": 1
		});
	}, function() {
		j(this).css("opacity", "0.5")
	})

	function getcolor() {
		return "rgb(" + parseInt(255 * Math.random()) + "," + parseInt(255 * Math.random()) + "," + parseInt(255 * Math.random()) + ")";

	}

})
j(function() {
	j(".three span").hover(function() {
		j(this).css({
			color: getcolor(),
			"opacity": 1
		});
	}, function() {
		j(this).css({color: getcolor(),"opacity":1})
	})

	function getcolor() {
		return "rgb(" + parseInt(255 * Math.random()) + "," + parseInt(255 * Math.random()) + "," + parseInt(255 * Math.random()) + ")";

	}
})

j(function() {
	j("h2>a").hover(function() {
		j(this).css({
			color: getcolor(),
			"opacity": 1
		});
	}, function() {
		j(this).css({color: getcolor(),"opacity":1})
	})

	function getcolor() {
		return "rgb(" + parseInt(255 * Math.random()) + "," + parseInt(255 * Math.random()) + "," + parseInt(255 * Math.random()) + ")";

	}
})
j(function() {
	j(".iconfont").hover(function() {
		j(this).css({
			color: getcolor(),
			"opacity": 1
		});
	}, function() {
		j(this).css({color: getcolor(),"opacity":1})
	})

	function getcolor() {
		return "rgb(" + parseInt(255 * Math.random()) + "," + parseInt(255 * Math.random()) + "," + parseInt(255 * Math.random()) + ")";

	}
})



window.onload=function(){
	var dx=document.documentElement.clientWidth/2;
	var dy=document.documentElement.clientHeight/2;
	var box=document.getElementsByClassName("box-dj")[0];
	document.onmousedown=function(e){
		if(e.preventDefault){
			e.preventDefault();
		}else{
			e.returnValue=false;
		}
		var cx=e.clientX;
		var cy=e.clientY;
		document.onmousemove=function(e){
			var xx=e.clientX;
			var yy=e.clientY;
			var rx=xx-dx;
			var ry=yy-dy;
			var m=Math.sqrt(rx*rx+ry*ry);
			var x=rx*m;
			var y=ry*m;
			var aa=Math.sqrt((xx-cx)*(xx-cx)+(yy-cy)*(yy-cy));
			console.log(aa)
			box.style.transform="rotate3d("+(-y)+","+x+",0,"+aa+"deg)";
		}
		document.onmouseup=function(){
			document.onmousemove=null;
		}
	}
}

j(function() {
	j(".box-dj>div").hover(function() {
		j(this).css({
			background: getcolor(),
			"opacity": 1
		});
	}, function() {
		j(this).css({color: getcolor(),"opacity":1})
	})

	function getcolor() {
		return "rgb(" + parseInt(255 * Math.random()) + "," + parseInt(255 * Math.random()) + "," + parseInt(255 * Math.random()) + ")";

	}
})
j(function() {
	j(".btnbox>div").hover(function() {
		j(this).css({
			background: getcolor(),
			"opacity": 1
		});
	}, function() {
		j(this).css({color: getcolor(),"opacity":1})
	})

	function getcolor() {
		return "rgb(" + parseInt(255 * Math.random()) + "," + parseInt(255 * Math.random()) + "," + parseInt(255 * Math.random()) + ")";

	}
})