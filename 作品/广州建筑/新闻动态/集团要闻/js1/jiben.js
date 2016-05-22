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
}