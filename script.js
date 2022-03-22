

// SWIPER SLIDER
var mySwiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"><svg><circle r="18" cx="20" cy="20"></circle></svg></span>';
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})



$(window).scroll(function () {
    var $window = $(window),
        $body = $('body'),
        $panel = $('section, header');

    var scroll = $window.scrollTop() + ($window.height() / 3);

    $panel.each(function () {
        var $this = $(this);
        if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

            $body.removeClass(function (index, css) {
                return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
            });

            $body.addClass('color-' + $(this).data('color'));
        }
    });

}).scroll();


