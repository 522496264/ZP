window.onload=function(){
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        loop: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });
    var end=document.querySelector('.end');
    var down=document.querySelector('.down');
    end.onclick=function(){
        down.style.display='none'
    }
   // var H=document.documentElement.clientHeight;
   // console.log(foot)
   //var footernav=document.querySelector('.footer-nav');
   // footernav.cssText=H+"px"
}