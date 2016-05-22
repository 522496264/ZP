window.onload=function(){
//轮播图
  var bannerWheel=getClass("BANNERwheel")[0];
  //console.log(bannerWheel);
	var wimg=getClass("imgBox",bannerWheel)[0].getElementsByTagName("a");
  //console.log(wimg)
	var btns=getClass("banner-number",bannerWheel)[0].getElementsByTagName("p");
	var index1=0;
	var t=setInterval(move,2000)
		function move(){
            index1++;
            if(index1>wimg.length-1){
            	index1=0;
            }
            if(index1<0){//为左按钮而加
             index1=wimg.length-1;
             }
            for (var i=0;i<wimg.length;i++){
            	wimg[i].style.zIndex="";
            	btns[i].style.background="#3e3e3e";
            }
            wimg[index1].style.zIndex=5;
            btns[index1].style.background="#B61B1F";
            
		}
    for (var i = 0; i < btns.length; i++) {
    btns[i].index=i;

    btns[i].onclick=function(){
      for (var j = 0; j < btns.length; j++) {
        wimg[j].style.zIndex="0";
        btns[j].style.background="#3e3e3e";

      };
       wimg[this.index].style.zIndex="1";
        this.style.background="red";
        index1=this.index;//使下一次从单击的下一个开始  
    }
  };
  var wheel=getClass("wheel")[0];//获得全局
  //console.log(bannerWheel);
  wheel.onmouseover=function(){//鼠标移上去
    clearInterval(t);
  }
  wheel.onmouseout=function(){//鼠标移下去
    t=setInterval(move,2000)
  }
  var btnLeft=getClass("btnleft",bannerWheel)[0];
  var btnRight=getClass("btnright",bannerWheel)[0];
  //console.log(btnRight)
  btnRight.onclick=function(){
    move();
  }
  btnLeft.onclick=function(){
    index1-=2;
    move();
  }

	   /*  //一楼选项卡
      var zi=document.getElementsByClassName('f1-dh')[0].getElementsByTagName('a');
    var imgs=document.getElementsByClassName('f1-c')[0].getElementsByClassName('main');
    // console.log(zi)
    // consloe.log(imgs)
    for(var i=0;i<imgs.length;i++){
      zi[i].index=i;
      zi[i].onmouseover=function(){
            for(var j=0; j<imgs.length;j++){
                  imgs[j].style.display="none";
                  zi[j].style.cssText="background:none;color:#000;"
            }
            imgs[this.index].style.display="block";
            zi[this.index].style.cssText="background:red; color:#fff;"
      }
    }*/



     //选项卡
   
    function newWheel(zi2,img3){
      for(var i=0;i<img3.length;i++){
        zi2[i].index=i;
        zi2[i].onmouseover=function(){
              for(var j=0; j<img3.length;j++){
                    img3[j].style.display="none";
                   // zi2[j].style.cssText="background:none;color:#000;"
              }
              img3[this.index].style.display="block";
              //zi2[this.index].style.cssText="background:red; color:#fff;"
        }
      }  
    }
    //一楼
    var zi=document.getElementsByClassName('f1-dh')[0].getElementsByTagName('a');
    var imgs=document.getElementsByClassName('f1-c')[0].getElementsByClassName('main');
    newWheel(zi,imgs);
     //二楼
    var zi1=document.getElementsByClassName('f1-dh A')[0].getElementsByTagName('a');
    var img2=document.getElementsByClassName('f2-c')[0].getElementsByClassName('GHMZ');
    newWheel(zi1,img2);

    //三楼
    var zi2=document.getElementsByClassName('f1-dh B')[0].getElementsByTagName('a');
    var img3=document.getElementsByClassName('f2-c')[1].getElementsByClassName('f3-main');
    newWheel(zi2,img3);
    //四楼`
    var zi3=document.getElementsByClassName('f1-dh C')[0].getElementsByTagName('a');
    var img4=document.getElementsByClassName('f2-c')[2].getElementsByClassName('f3-main');
    newWheel(zi3,img4);
     //五楼
    var zi4=document.getElementsByClassName('f1-dh D')[0].getElementsByTagName('a');
    var img5=document.getElementsByClassName('f2-c')[3].getElementsByClassName('f3-main');
    newWheel(zi4,img5);
    //六楼
    var zi5=document.getElementsByClassName('f1-dh E')[0].getElementsByTagName('a');
    var img6=document.getElementsByClassName('f2-c')[4].getElementsByClassName('YDJS');
    newWheel(zi5,img6);
    //七楼
    var zi7=document.getElementsByClassName('f1-dh F')[0].getElementsByTagName('a');
    var img8=document.getElementsByClassName('f2-c')[5].getElementsByClassName('YDJS');
    newWheel(zi7,img8);
    //八楼
    var zi9=document.getElementsByClassName('f1-dh G')[0].getElementsByTagName('a');
    var img10=document.getElementsByClassName('f2-c')[6].getElementsByClassName('YDJS');
    newWheel(zi9,img10);
    //九楼
    var zi11=document.getElementsByClassName('f1-dh H')[0].getElementsByTagName('a');
    //console.log(zi11)
    var img12=document.getElementsByClassName('f2-c')[7].getElementsByClassName('YDJS');
    //console.log(img12)
    newWheel(zi11,img12);
    //十楼
    var zi13=document.getElementsByClassName('f1-dh I')[0].getElementsByTagName('a');
    // console.log(zi13)
    var img14=document.getElementsByClassName('f2-c')[8].getElementsByClassName('YDJS');
    newWheel(zi13,img14);


//图片左移
 var img1=getClass("xfx")[0].getElementsByTagName("img")[0];
 //console.dir(img1);
          img1.onmouseover=function(){
            animate(img1,{marginLeft:-10},300)
              }
              img1.onmouseout=function(){
                animate(img1,{marginLeft:0},300)
              }
var img=getClass("pzsh-block3A")[0].getElementsByTagName("img")[0];
          img.onmouseover=function(){
            animate(img,{marginLeft:-10},300)
              }
              img.onmouseout=function(){
                animate(img,{marginLeft:0},300)
              }
//网页右边栏
var fixed=getClass("fixed")[0];
  var onebottom=getClass("onebottom")[0];
     rightSolid(fixed,onebottom)
     for(var i=0;i<7;i++){
      var fu=getClass("fixed")[i];
      //console.log(fu)
      var zi=getClass("bottom")[i];
      //console.log(zi);
      rightSolid(fu,zi)
     }
    // rightSolid(fu,zi)

  // rightSolid(top[2],bottom[2]);
  function rightSolid(mouse,change){
        mouse.onmouseover=function(){
          animate(change,{right:30},300,Tween.Quad.easeIn)
        }
        mouse.onmouseout=function(){
          animate(change,{right:-30},400,Tween.Bounce.easeOut)
        }
    }




 //一楼轮播   
var wheel1=$(".wheel1")[0];
//console.log(wheel1);
FLOORwheel(wheel1);
function FLOORwheel(wheel1){
  var imgBox=$(".imgBox1",wheel1)[0];
  var imgimg=$(".img",wheel1)[0];
  var as=$("a",imgimg);
  var aw=getStyle(as[0],"width")
  var btnBox=$(".btnBox",wheel1)[0];
  var btnss=$("li",wheel1);
  var now=0;
  var next=0;
  var tt=setInterval(WHEEL1move,1000);
    var flag=true;
    function WHEEL1move(){
      if(flag==false){
        return;
      }
      flag=false;
      next++;
      if(next==as.length){
        next=0;
      }
      as[next].style.left=aw+"px";
      animate(as[now],{left:-aw},function(){
        flag=true;
      });
      animate(as[next],{left:0},function(){
        flag=true;
      });
      // btnss[now].className="";
      // btnss[next].className="hot";
      now=next;
    }    
    wheel1.onmouseover=function(){
      clearInterval(tt);
    }
    wheel1.onmouseout=function(){
      tt=setInterval(WHEEL1move,1000)
    }
    // var btnLeft0=$(".btnLeft1",wheel1)[0];
    // var btnRight0=$(".btnRight1",wheel1)[0];
    // btnRight0.onclick=function(){
    //   WHEEL1move();
    // }
    // btnLeft0.onclick=function(){
    //   if(flag==false){
    //     return;
    //   }
    //   flag=false;
    //   next--;
    //   if(next==-1){
    //     next=2;
    //   }
    //   //console.log(now);
    //   as[next].style.left=-aw+"px";
    //   animate(as[now],{left:aw},function(){
    //     flag=true;
    //   });
    //   //console.log(next);
    //   animate(as[next],{left:0},function(){
    //     flag=true;
    //   });
    //   btnss[now].className="";
    //   btnss[next].className="hot";
    //   now=next;
    // }
    // for (var i = 0; i < btnss.length; i++) {
    //   btnss[i].index=i;
    //   btnss[i].onclick=function(){

    //     if(this.index==next||flag==false){
    //       return
    //     }
    //     if(now<this.index){
    //       as[this.index].style.left=aw+"px";
    //       //console.log(now)
    //       animate(as[now],{left:-aw},function(){
    //         flag=true;
    //       });
    //       //console.log(this.index);
    //       animate(as[this.index],{left:0},function(){
    //         flag=true;
    //       });

    //     }else if(now>this.index){
    //       as[this.index].style.left=-aw+"px";
    //       //console.log(now)
    //       animate(as[now],{left:aw},function(){
    //         flag=true;
    //       });
    //       //console.log(this.index);
    //       animate(as[this.index],{left:0},function(){
    //         flag=true;
    //       });
    //     }
    //     btnss[now].className="";
    //       btnss[this.index].className="hot";
    //     now=next=this.index;
    //   }
    // };
}


//三楼轮播
var wheel2=$(".wheel2")[0];
//console.log(wheel2);
FLOORwheel2(wheel2);
function FLOORwheel2(wheel2){
  var imgBox=$(".imgBox2",wheel2)[0];
  var imgimg=$(".img2",wheel2)[0];
  //console.log(imgimg)
  var as=$("a",imgimg);
  var aw=getStyle(as[0],"width")
  var btnBox=$(".btnBoxx",wheel2)[0];
  var btnss=$("li",wheel2);
  var now=0;
  var next=0;
  var tt=setInterval(WHEEL1move,2000);
    var flag=true;
    function WHEEL1move(){
      if(flag==false){
        return;
      }
      flag=false;
      next++;
      if(next==as.length){
        next=0;
      }
      as[next].style.left=aw+"px";
      //console.log(now)
      animate(as[now],{left:-aw},function(){
        flag=true;
      });
      //console.log(next)
      animate(as[next],{left:0},function(){
        flag=true;
      });
      btnss[now].className="";
      btnss[next].className="hot";
      now=next;

  }
    
    wheel2.onmouseover=function(){
      clearInterval(tt);
    }
    wheel2.onmouseout=function(){
      tt=setInterval(WHEEL1move,2000)

    }
    var btnLeft0=$(".btnLeft2",wheel2)[0];
    var btnRight0=$(".btnRight2",wheel2)[0];
    btnRight0.onclick=function(){
      WHEEL1move();
    }
    btnLeft0.onclick=function(){
      if(flag==false){
        return;
      }
      flag=false;
      next--;
      if(next==-1){
        next=2;
      }
      //console.log(now);
      as[next].style.left=-aw+"px";
      animate(as[now],{left:aw},function(){
        flag=true;
      });
      //console.log(next);
      animate(as[next],{left:0},function(){
        flag=true;
      });
      btnss[now].className="";
      btnss[next].className="hot";
      now=next;
    }
    for (var i = 0; i < btnss.length; i++) {
      btnss[i].index=i;
      btnss[i].onclick=function(){

        if(this.index==next||flag==false){
          return
        }
        if(now<this.index){
          as[this.index].style.left=aw+"px";
          //console.log(now)
          animate(as[now],{left:-aw},function(){
            flag=true;
          });
          //console.log(this.index);
          animate(as[this.index],{left:0},function(){
            flag=true;
          });

        }else if(now>this.index){
          as[this.index].style.left=-aw+"px";
          //console.log(now)
          animate(as[now],{left:aw},function(){
            flag=true;
          });
          //console.log(this.index);
          animate(as[this.index],{left:0},function(){
            flag=true;
          });
        }
        btnss[now].className="";
          btnss[this.index].className="hot";
        now=next=this.index;
      }
    };
}

//四楼轮播
var wheel2=$(".wheel2")[1];
//console.log(wheel2);
FLOORwheel2(wheel2);
function FLOORwheel2(wheel2){
  var imgBox=$(".imgBox2",wheel2)[0];
  var imgimg=$(".img2",wheel2)[0];
  //console.log(imgimg)
  var as=$("a",imgimg);
  var aw=getStyle(as[0],"width")
  var btnBox=$(".btnBoxx",wheel2)[0];
  var btnss=$("li",wheel2);
  var now=0;
  var next=0;
  var tt=setInterval(WHEEL1move,2000);
    var flag=true;
    function WHEEL1move(){
      if(flag==false){
        return;
      }
      flag=false;
      next++;
      if(next==as.length){
        next=0;
      }
      as[next].style.left=aw+"px";
      //console.log(now)
      animate(as[now],{left:-aw},function(){
        flag=true;
      });
      //console.log(next)
      animate(as[next],{left:0},function(){
        flag=true;
      });
      btnss[now].className="";
      btnss[next].className="hot";
      now=next;

  }
    
    wheel2.onmouseover=function(){
      clearInterval(tt);
    }
    wheel2.onmouseout=function(){
      tt=setInterval(WHEEL1move,2000)

    }
    var btnLeft0=$(".btnLeft2",wheel2)[0];
    var btnRight0=$(".btnRight2",wheel2)[0];
    btnRight0.onclick=function(){
      WHEEL1move();
    }
    btnLeft0.onclick=function(){
      if(flag==false){
        return;
      }
      flag=false;
      next--;
      if(next==-1){
        next=2;
      }
      //console.log(now);
      as[next].style.left=-aw+"px";
      animate(as[now],{left:aw},function(){
        flag=true;
      });
      //console.log(next);
      animate(as[next],{left:0},function(){
        flag=true;
      });
      btnss[now].className="";
      btnss[next].className="hot";
      now=next;
    }
    for (var i = 0; i < btnss.length; i++) {
      btnss[i].index=i;
      btnss[i].onclick=function(){

        if(this.index==next||flag==false){
          return
        }
        if(now<this.index){
          as[this.index].style.left=aw+"px";
          //console.log(now)
          animate(as[now],{left:-aw},function(){
            flag=true;
          });
          //console.log(this.index);
          animate(as[this.index],{left:0},function(){
            flag=true;
          });

        }else if(now>this.index){
          as[this.index].style.left=-aw+"px";
          //console.log(now)
          animate(as[now],{left:aw},function(){
            flag=true;
          });
          //console.log(this.index);
          animate(as[this.index],{left:0},function(){
            flag=true;
          });
        }
        btnss[now].className="";
          btnss[this.index].className="hot";
        now=next=this.index;
      }
    };
}


//五楼轮播
var wheel2=$(".wheel2")[2];
//console.log(wheel2);
FLOORwheel2(wheel2);
function FLOORwheel2(wheel2){
  var imgBox=$(".imgBox2",wheel2)[0];
  var imgimg=$(".img2",wheel2)[0];
  //console.log(imgimg)
  var as=$("a",imgimg);
  var aw=getStyle(as[0],"width")
  var btnBox=$(".btnBoxx",wheel2)[0];
  var btnss=$("li",wheel2);
  var now=0;
  var next=0;
  var tt=setInterval(WHEEL1move,2000);
    var flag=true;
    function WHEEL1move(){
      if(flag==false){
        return;
      }
      flag=false;
      next++;
      if(next==as.length){
        next=0;
      }
      as[next].style.left=aw+"px";
      //console.log(now)
      animate(as[now],{left:-aw},function(){
        flag=true;
      });
      //console.log(next)
      animate(as[next],{left:0},function(){
        flag=true;
      });
      btnss[now].className="";
      btnss[next].className="hot";
      now=next;

  }
    
    wheel2.onmouseover=function(){
      clearInterval(tt);
    }
    wheel2.onmouseout=function(){
      tt=setInterval(WHEEL1move,2000)

    }
    var btnLeft0=$(".btnLeft2",wheel2)[0];
    var btnRight0=$(".btnRight2",wheel2)[0];
    btnRight0.onclick=function(){
      WHEEL1move();
    }
    btnLeft0.onclick=function(){
      if(flag==false){
        return;
      }
      flag=false;
      next--;
      if(next==-1){
        next=2;
      }
      //console.log(now);
      as[next].style.left=-aw+"px";
      animate(as[now],{left:aw},function(){
        flag=true;
      });
      //console.log(next);
      animate(as[next],{left:0},function(){
        flag=true;
      });
      btnss[now].className="";
      btnss[next].className="hot";
      now=next;
    }
    for (var i = 0; i < btnss.length; i++) {
      btnss[i].index=i;
      btnss[i].onclick=function(){

        if(this.index==next||flag==false){
          return
        }
        if(now<this.index){
          as[this.index].style.left=aw+"px";
          //console.log(now)
          animate(as[now],{left:-aw},function(){
            flag=true;
          });
          //console.log(this.index);
          animate(as[this.index],{left:0},function(){
            flag=true;
          });

        }else if(now>this.index){
          as[this.index].style.left=-aw+"px";
          //console.log(now)
          animate(as[now],{left:aw},function(){
            flag=true;
          });
          //console.log(this.index);
          animate(as[this.index],{left:0},function(){
            flag=true;
          });
        }
        btnss[now].className="";
          btnss[this.index].className="hot";
        now=next=this.index;
      }
    };
}




//楼层跳转
var elevator=$(".elevator")[0];//获取大盒子
var backItem=$(".backItem",elevator)[0];
var backli=backItem.getElementsByTagName('li');
var floorItem=$(".floorItem");//获取全部楼层
var elevatorf=$(".elevatorf");
// console.log(elevatorf)
var elevatorname=$(".elevatorname");
// console.log(floorItem)
var arr=[];

for (var i=0;i<floorItem.length; i++){
  arr.push(floorItem[i].offsetTop);
};
console.log(arr)
window.onscroll=function(){
    var doc=document.body.scrollTop?document.body:document.documentElement;

    for (var i = 0; i < arr.length; i++) {

      if(doc.scrollTop>=arr[i]){
        for (var j = 0; j < backli.length; j++) {
          elevatorf[j].style.display="block";
          elevatorname[j].style.display="none";
        };
          elevatorf[i].style.display="none";
          elevatorname[i].style.display="block";
      /*    backItem[i].style.background="red"*/
      };

        }

}

console.log(backli)
for (var i = 0; i < backli.length; i++) {
    backli[i].index=i;
    backli[i].onclick=function(){
      animate(document.body,{scrollTop:arr[this.index]});
      animate(document.documentElement,{scrollTop:arr[this.index]});
    }

};

//右拉框
// var lis=$("li",$(".inner-dh1")[0]);  //获取内部所有的头部链接
//     for (var i = 0; i < lis.length; i++) {
//       hover(lis[i],function(){
//         var lists=$(".inner-item",this)[0];
//         if(!lists){
//           return;
//         }
//         var as=$(".inner-item",lists);
//         lists.style.display="block";
//         animate(lists,{},300);
//       },function(){
//         var lists=$(".inner-item",this)[0];
//         if(!lists){
//           return;
//         }
//         animate(lists,{},300);
//       })
//     };
var lis=$("li",$(".head-right")[0]);  //获取内部所有的头部链接
    for (var i = 0; i < lis.length; i++) {
      hover(lis[i],function(){
        var lists=$(".XL",this)[0];
        if(!lists){
          return;
        }
        var as=$("a",lists);
        lists.style.display="block";
        animate(lists,{height:32*as.length},300);
      },function(){
        var lists=$(".list",this)[0];
        if(!lists){
          return;
        }
        animate(lists,{height:0},300);
      })
    };































}







      







