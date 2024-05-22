document.addEventListener('DOMContentLoaded', function () {
    // Инициализация Swiper
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Функция для обновления высоты контейнера Swiper
    function updateSwiperHeight() {
        var activeSlide = document.querySelector('.swiper-slide-active img');
        if (activeSlide) {
            var imageHeight = activeSlide.clientHeight;
            document.querySelector('.swiper-container').style.height = imageHeight + 'px';
        }
    }

    // Обновление высоты при загрузке изображения и смене слайда
    document.querySelectorAll('.swiper-slide img').forEach(function (img) {
        img.addEventListener('load', updateSwiperHeight);
    });

    swiper.on('slideChange', function () {
        updateSwiperHeight();
    });

    // Инициализация высоты при загрузке страницы
    updateSwiperHeight();
});
