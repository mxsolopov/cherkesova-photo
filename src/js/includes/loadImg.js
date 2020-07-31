export const loadImg = (function () {

    let tabsContent = document.querySelectorAll('.gallery__content');

    for (let i = 0; i < tabsContent.length; i++) {

        let sum = tabsContent[i].children.length;

        // Добавление значения кол-ва элементов к изображению 
        tabsContent[i].querySelectorAll('.gallery__number-curr').forEach((item) => {
            item.textContent = sum;
        });

        // Добавление номера текущего элемента к изображению 
        tabsContent[i].querySelectorAll('.gallery__number-sum').forEach((item, i) => {
            item.textContent = `${i + 1}/`;
        });

        // Создать кнопку "Показать ещё"
        let seeMoreBtn = document.createElement('button');
        seeMoreBtn.textContent = 'Показать ещё';
        seeMoreBtn.classList.add('button', 'see-more');

        // Если в контенте табы меньше 9 изображений, то показывать все
        if (tabsContent[i].children.length <= 9) {

            for (let j = 0; j < tabsContent[i].children.length; j++) {

                tabsContent[i].children[j].classList.add('view');
            }

            // Если в контенте табы больше 9 изображений, то показывать первые 9
        } else {

            for (let k = 0; k < 9; k++) {

                tabsContent[i].children[k].classList.add('view');
            }

            // Добавлять кнопку "Показать ещё"
            tabsContent[i].appendChild(seeMoreBtn);
        }
    }

    // Клик на кнопку "Показать ещё"
    document.addEventListener('click', (e) => {

        let target = e.target,
            seeMoreBtn = target.closest('.see-more'),
            content = target.closest('.gallery__content');

        if (target && seeMoreBtn) {

            let viewGalleryArray = content.querySelectorAll('.gallery__slide.view'),
                mainGalleryArray = content.querySelectorAll('.gallery__slide'),
                numUnviewImg = mainGalleryArray.length - viewGalleryArray.length,
                startIndex = mainGalleryArray.length - numUnviewImg;

            // Если скрытых изображений меньше 6, то показать все
            if (numUnviewImg <= 6) {

                for (let t = startIndex; t < mainGalleryArray.length; t++) {
                    mainGalleryArray[t].classList.add('view');
                }

                /* Если скрытых изображений больше 6, то при каждом клике
                показывать по 6 или меньше */
            } else {

                for (let t = startIndex; t < 6 + startIndex; t++) {
                    mainGalleryArray[t].classList.add('view');
                }
            }

            // При открытии последних скрытых изображений убирать кнопку "Показать ещё"
            if (content.children.length - 1 == content.querySelectorAll('.gallery__slide.view').length) {
                seeMoreBtn.classList.add('hide');
            }
        }
    });

}());