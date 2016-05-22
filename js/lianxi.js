$(function() {
    $(".iconfont").hover(function() {
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