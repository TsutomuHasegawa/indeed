"use strict";

(function () {
    $(window).on('scroll',function (e) {
        if($(this).scrollTop() > 100 ) {
            $('.header').addClass('is-minify');
        }else {
            $('.header').removeClass('is-minify');
        }
    })

    $('a[href^="#"]').on('click',function(){
        var speed = 300;
        var href= $(this).attr("href");
        var HEADERHEIGHT = 70;
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - HEADERHEIGHT;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });

    //ヘッダーアイコンアニメーション制御
    $('.burger').on('click',function () {
        var $this = $('.burger');
        openModal($this);
    });

    $('.gnavlist--sp__item__link').on('click',function(){

        setTimeout( BurgerClick(), 200 );

    })

    function BurgerClick() {
        $('.burger').trigger('click');
    }

    function openModal($this) {

        if ($this.hasClass('is-active')) {

            $this.removeClass('is-active').addClass('is-inactive');

            $('.header__gnav--sp').css('display','none');

            $('body').css('overflow-y', 'scroll');
            $(window).off('.noScroll');//タッチスクロール禁止解除

        } else {

            $this.addClass('is-active');
            $('.header__gnav--sp').css('display','block');

            $(window).on('touchmove.noScroll', function (e) {//タッチスクロール禁止
                e.preventDefault();
            });

        }
    }

})();