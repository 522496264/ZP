window.onload=function(){
	var lis=$("li",$(".nav")[0]);  //获取内部所有的头部链接
		for (var i = 0; i < lis.length; i++) {
			hover(lis[i],function(){
				var lists=$(".list",this)[0];
				if(!lists){
					return;
				}
				var as=$("a",lists);
				lists.style.display="block";
				animate(lists,{height:30*as.length},300);
			},function(){
				var lists=$(".list",this)[0];
				if(!lists){
					return;
				}
				animate(lists,{height:0},300);
			})
		};
	


	// 左右拉
	//左侧
	var mainBox3Left=$(".mainBox3-1-bottom")[0];
	var mainBox31Item=$(".mainBox31Item");
	var mainBox31ItemLeft=$(".mainBox31ItemLeft");
	var mainBox31ItemRight=$(".mainBox31ItemRight");
	for (var i = 0; i < mainBox31ItemLeft.length; i++) {
		mainBox31ItemLeft[i].index=i;
		mainBox31ItemLeft[i].onmouseover=function(){
			for (var j = 0; j < mainBox31ItemRight.length; j++) {
				mainBox31ItemRight[j].style.display="none";
			};
			mainBox31ItemRight[this.index].style.display="block";
			//console.dir(mainBox31ItemRight[0]);
	        mainBox31ItemLeft[0].className="mainBox31ItemLeft mainBox31ItemLeft1";
	        mainBox31ItemLeft[1].className="mainBox31ItemLeft mainBox31ItemLeft2";
	        mainBox31ItemLeft[2].className="mainBox31ItemLeft mainBox31ItemLeft3";
	        if(this.index==0){
	        	mainBox31ItemLeft[this.index].className="mainBox31ItemLeft blue1";
	        }else if(this.index==1){
	        	mainBox31ItemLeft[this.index].className="mainBox31ItemLeft blue2";
	        }else if(this.index==2){
	        	mainBox31ItemLeft[this.index].className="mainBox31ItemLeft blue3";
	        }
		}
	};
	// 右侧
	var mainBox32Box=$(".mainBox3-21-content");
	function mainBox3Right(mainBox32Box){
		var mainBox32img=$(".mainBox3-21-img", mainBox32Box);
		var mainBox32word=$(".mainBox3-21-word", mainBox32Box);
		for (var i = 0; i < mainBox32word.length; i++) {
			mainBox32word[i].index=i;
			mainBox32word[i].onmouseover=function(){
				for (var j = 0; j < mainBox32img.length; j++) {
					mainBox32img[j].style.display="none";
				};
				mainBox32img[this.index].style.display="block";

			}
		};
	}
	for (var i = 0; i < mainBox32Box.length; i++) {
		mainBox3Right(mainBox32Box[i]);
	};

	/*mainBox3   END*/

}
