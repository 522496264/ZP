
// window.onload=function() {
// 	var links=getClass('link')[0].getElementsByTagName('a');
//     var lists=getClass('list')[0].getElementsByTagName('img');

//     for(i=0;i<links.length;i++){
//         links[i].index=i;
//         links[i].onmouseover=function() {
// 	        for(var j=0;j<lists.length;j++){
// 	   	        lists[j].style.display="none";
// 	   	        links[j].style.cssText="background:none;color:#000;"
	   	  
// 	        }
// 	    lists[this.index].style.cssText="display:block;";
// 	    links[this.index].style.cssText="background:red;color:#fff;";
//             }
//     }
// }
//搭配选项卡
window.onload=function(){
   for(var i=0; i<getClass('dp').length; i++){  //把父元素遍历出来
		var titleRight=getClass('dp-list',getClass('dp')[i])[0].getElementsByTagName('li');

		var dpContentRight=getClass('znyjRight',getClass('dp')[i]);
	        tab(titleRight,dpContentRight,"title-right-style");  //调用选项卡函数

   }
}
//轮播

