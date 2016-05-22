/**
 * Created by Administrator on 2015/12/2.
 */
// ÂÖ²¥
$(function(){
    var flag=true;
    var box=$(".box")
    var list=$(".con .list");
    var width=list.outerWidth();
    var num=list.length;
    var lBtn=$(".lBtn");
    var rBtn=$(".rBtn");
    var con=$(".con");
    con.css("width",(width*num));
    var t=setInterval(move,3000);
    function move(){
        if(flag!=true){
            return false;
        };
        flag=false;
        con.animate({marginLeft:-3*width},function(){
            for (var i = 0; i < 3; i++) {
                $(".con .list:first").appendTo(".con");
            };
            $(".con").css({marginLeft:0});
            flag=true;
        })
    }
    function move1(){
        if(flag!=true){
            return false;
        };
        flag=false;
        for (var i = 0; i < 3; i++) {
            $(".con .list:last").prependTo(".con");
        };
        $(".con").css({marginLeft:-width*3});
        con.animate({marginLeft:0},function(){
            flag=true;
        })
    }
    box.hover(function(){
        clearInterval(t);
    },function(){
        t=setInterval(move,3000);
    });
    lBtn.delegate("div","click",function(){
        move();
    });
    rBtn.delegate("div","click",function(){
        move1();
    });
    lBtn.click=rBtn.click(function(e){
     var ev=e||window.event;
     if(ev.preventDefault){
     ev.preventDefault();
     }else{
     ev.returnValue=false;
     };
     });

})


$(function() {
    $("#name1").hover(function() {
        $(this).css({
            color: getcolor(),
            "opacity": 1
        });
    }, function() {
        $(this).css({color: getcolor(),"opacity":1})
    })

    function getcolor() {
        return "rgb(" + parseInt(255 * Math.random()) + "," + parseInt(255 * Math.random()) + "," + parseInt(255 * Math.random()) + ")";

    }
})
