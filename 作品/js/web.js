jQuery.fn.extend({      //给jQuery添加鼠标滚轮事件
    mouseWheel:function(upfun,downfun)
    {
        this.each(function(index,obj){
            if(obj.attachEvent){
                obj.attachEvent("onmousewheel",scrollFn);  //IE、 opera
            }else if(document.addEventListener){
                obj.addEventListener("mousewheel",scrollFn,false);  //chrome,safari -webkit-
                obj.addEventListener("DOMMouseScroll",scrollFn,false);  //firefox     -moz-
            }
            function scrollFn(e)
            {
                var ev=e||window.event;
                var num=ev.wheelDelta||ev.detail;//谷歌上120下-120  ff上-3下3  监测鼠标滚轮动向
                if (num==120||num==-3)
                {
                    upfun.call(obj);
                }else if (num==-120||num==3)
                {
                    downfun.call(obj);
                }
                // }
                if (ev.preventDefault) {ev.preventDefault();} //阻止默认浏览器动作(W3C)
                else {ev.returnValue = false};
            }
        })
    }
})


$(function(){
    $(".design-box li").mouseenter(function(){
        var index=$(".design-box li").index(this);
        $($(".design-box p").get(index)).stop(true);
        $($(".design-box p").get(index)).animate({height:30},500);
        $(this).mouseleave(function(){
            $(".design-box p").animate({height:0},300);
        });
    });
    var H=$("#ban").height();
    var arr=[];
    var floors=$(".floor");
    $(".return").css("display","none");
    window.onscroll=function(){
        for (var i=0;i<6;i++){
            arr[i]=floors[i].offsetTop;
        }
        var cc=document.body.scrollTop?document.body.scrollTop:document.documentElement.scrollTop;
        if(cc>=H+100){
            $(".return").css("display","block");
        }else{
            $(".return").css("display","none");
        }
    }
    window.onscroll();

    $(".return").click(function(){
        $("html,body").animate({scrollTop:0},600);
    })

    $(".nav-right>li>div").click(function(){
        var index=$(".nav-right>li>div").index(this);
        $("html,body").animate({scrollTop:arr[index]},600);
    });
})

