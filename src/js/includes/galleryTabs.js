export const galleryTabs = (function () {

    let tabItemBox = document.querySelector('.gallery__tabs'),
        tabItem = document.querySelectorAll('.gallery__tabs-item'),
        tabContent = document.querySelectorAll('.gallery__content');

    // Обработчик клика на табу
    tabItemBox.addEventListener('click', (e) => {

        let target = e.target;
        let tab = target.classList.contains('gallery__tabs-item');

        document.querySelectorAll('.gallery__tabs-item_active').forEach((item) => {
            item.classList.remove('gallery__tabs-item_active');
        });

        if (target && tab) {

            target.classList.add('gallery__tabs-item_active');

            for (let i = 0; i < tabItem.length; i++) {
                if (target == tabItem[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // Функция скрывает контент неактивных табов
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
        }
    }

    // Функция показывает контент активной табы
    function showTabContent(b) {
        tabContent[b].classList.add('show');
    }

}());