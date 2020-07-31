export const scrollTop = (function () {

    let link = document.querySelectorAll('a'), // Все ссылки
        goTopBtn = document.querySelector('.back-to-top'), // Кнопка "Наверх"
        gallery = document.querySelector('.gallery'); // Блок с фотографиями

    window.addEventListener('scroll', () => {

        let scrolled = window.pageYOffset, // Расстояние, проскролленное от начала страницы
            // Точка появления кнопки "Наверх"
            coordsView = gallery.offsetTop + document.documentElement.clientHeight * 0.5,
            // Точка исчезновения кнопки "Наверх"
            coordsUnview = gallery.offsetTop + gallery.clientHeight - document.documentElement.clientHeight * 0.4;

        // Добавление кнопки "Наверх"
        if (scrolled > coordsView && scrolled < coordsUnview) {
            goTopBtn.classList.add('back-to-top_show');
        } else if (scrolled < coordsView) {
            goTopBtn.classList.remove('back-to-top_show');
        } else if (scrolled > coordsUnview) {
            goTopBtn.classList.remove('back-to-top_show');
        }
    });

    // Плавный переход между разделами
    for (let key of link) {

        key.addEventListener('click', (e) => {

            e.preventDefault();
            const blockID = key.getAttribute('href');

            document.querySelector(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

}());