export const animation = (function () {

    let featureTitle = document.querySelector('.features__wrap .title');
    let featureItemFirst = document.querySelector('.features__item:nth-child(1)');
    let featureItemSecond = document.querySelector('.features__item:nth-child(2)');
    let featureItemThird = document.querySelector('.features__item:nth-child(3)');
    let galleryTitle = document.querySelector('.gallery__head .title');
    let galleryTabs = document.querySelector('.gallery__tabs');
    let gallerySlide = document.querySelectorAll('.gallery__slide');
    let pricesTitle = document.querySelector('.prices__wrap .title');
    let pricesItemFirst = document.querySelector('.price-item:nth-child(1)');
    let pricesItemSecond = document.querySelector('.price-item:nth-child(2)');
    let pricesItemThird = document.querySelector('.price-item:nth-child(3)');
    let contactTitle = document.querySelector('.contact__wrap .title');
    let contactForm = document.querySelector('.contact__form');
    let footer = document.querySelector('.footer');

    function animOnScroll(animItem, animName, animStart, animOpt) {

        let animItemHeight = animItem.offsetHeight; // Высота объекта
        let animItemOffset = offset(animItem).top; // Позиция объекта относительно верха страницы
        // let animStart = 4; // Коэффициент появления элемента
        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('animate__animated', animName, animOpt);
        }
    }

    // Функция для вычисления расстояния от объекта до верхней и левой границ страницы
    function offset(el) {

        let rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
            top: rect.top + scrollTop,
            left: rect.left + scrollLeft
        };
    }

    // Добавление классов при скролле
    window.addEventListener('scroll', () => {
        animOnScroll(featureTitle, 'animate__fadeInLeft', 4);
        animOnScroll(featureItemFirst, 'animate__fadeInRight', 4, 'animate__delay-0_7s');
        animOnScroll(featureItemSecond, 'animate__fadeInRight', 4, 'animate__delay-0_5s');
        animOnScroll(featureItemThird, 'animate__fadeInRight', 4, 'animate__delay-0_3s');
        animOnScroll(galleryTitle, 'animate__fadeInLeft', 4, 'animate__delay-0_3s');
        animOnScroll(galleryTabs, 'animate__fadeIn', 4, 'animate__delay-0_6s');
        galleryTabs.classList.add('animate__fast');

        for (let key of gallerySlide) {
            animOnScroll(key, 'animate__fadeIn', 10, 'animate__slow');
        }

        animOnScroll(pricesTitle, 'animate__fadeInLeft', 4);
        animOnScroll(pricesItemThird, 'animate__fadeInRight', 4, 'animate__delay-0_5s');
        animOnScroll(pricesItemSecond, 'animate__fadeInRight', 4, 'animate__delay-0_4s');
        animOnScroll(pricesItemFirst, 'animate__fadeInRight', 4, 'animate__delay-0_3s');
        animOnScroll(contactTitle, 'animate__fadeInLeft', 4);
        animOnScroll(contactForm, 'animate__fadeInRight', 4, 'animate__delay-0_3s');
        animOnScroll(footer, 'animate__fadeIn', 4, 'animate__delay-0_1s');
    });

    document.addEventListener('click', (e) => {

        if (e.target && e.target.classList.contains('gallery__tabs-item') || e.target.classList.contains('see-more')) {

            for (let key of gallerySlide) {
                animOnScroll(key, 'animate__fadeIn', 10, 'animate__slow');
            }
        }
    });

}());