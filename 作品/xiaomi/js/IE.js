// 解决获取元素时的兼容性

// 1、getElementsByClassName兼容性解决
function getClass(classname,obj){
	obj=obj||document;
	if(document.getElementsByClassName!=undefined){  //如果浏览器支持getElementsByClassName这个属性，执行这个条件
		return obj.getElementsByClassName(classname);
	}else{
		var allTag=obj.getElementsByTagName('*');  //先找到对象下面的所有标签
		for(var i=0; i<allTag.length; i++){
			if(biJiao(allTag[i].className,classname)){  //如果标签的标签名和需要的标签名一样，则这个标签就是要找的标签
				var arr=[];
				arr.push(allTag[i]);
				return arr;
			}
		}
	}
}
function biJiao(allclassname,needclassname){   //解决多类名时想要获取其中某个类名的时候部分浏览器不兼容，获取不到
	var arr=allclassname.split(" ");
	for(var i=0; i<arr.length; i++){
		if (arr[i]==needclassname) {
			return true;
		}
	}
	return false;
}

//2、解决操作内容时innerText和textContent兼容性问题
function text(obj,val){
	if(obj.innerText){
		// alert(1);
		obj.innerText=val;
		return obj.innerText;
	}else if(obj.textContent){
		// alert(2);
		obj.textContent=val;
		return obj.textContent;
	}
}

//3、获取行内样式和外部样式的通用方法兼容性解决
function getStyle(obj,attr){
	if (obj.currentStyle) {
		alert(1);
		return obj.currentStyle[attr];   //因为attr是一个变量，不是属性，所有加上中括号，attr就代表属性的名字，如obj.currentStyle["width"]
	}else {
		alert(2);
		return getComputedStyle(obj,null)[attr];
	}
}

//4、轮播函数
function wheel(images,imagesnum,numstyle,time){
	var num=0;
	images[0].style.zIndex=images.length;
	setInterval(function(){
		num++;
		if (num>images.length-1) {
			num=0;
		}
		for(var i=0; i<images.length; i++){
			images[i].style.zIndex="";
			imagesnum[i].className="";
		}
		images[num].style.zIndex=images.length;
		imagesnum[num].className=numstyle;
	},time)
}

// 5、选项卡函数
function tab(tabtitles,tabcontents,titlestyle){
	for(var i=0; i<tabtitles.length; i++){
		tabtitles[i].index=i;
		tabtitles[i].onmouseover=function(){
			for(var j=0;j<tabcontents.length;j++){
				tabcontents[j].style.display="none";
				tabtitles[j].className="";
			}
			tabcontents[this.index].style.display="block";
			tabtitles[this.index].className=titlestyle;
		}
	}
}