
// SWIPER - можно не трогать, можно оставить толкьо инициализацию, как по кайфу
document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 7500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    function updateSwiperHeight() {
        var activeSlide = document.querySelector('.swiper-slide-active img');
        if (activeSlide) {
            var imageHeight = activeSlide.clientHeight;
            document.querySelector('.swiper-container').style.height = imageHeight + 'px';
        }
    }

    document.querySelectorAll('.swiper-slide img').forEach(function (img) {
        img.addEventListener('load', updateSwiperHeight);
    });

    swiper.on('slideChange', function () {
        updateSwiperHeight();
    });
    updateSwiperHeight();
});


// BOOK SWIPER
var swiper = new Swiper(".books-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: '.books-swiper-button-next',
        prevEl: '.books-swiper-button-prev',
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
  });