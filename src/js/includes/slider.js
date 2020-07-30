export const slider = (function () {

    let gallery = document.querySelector('.gallery');

    // Функция для изменения стилей, открывающих изображение
    const openImg = (imgWrap, descr, img, num, close, next, prev) => {

        imgWrap.classList.add('gallery__slide_expanded');
        descr.classList.add('hide');
        img.classList.add('gallery__img_expanded');
        num.classList.add('view-flex');
        close.classList.add('view');
        close.classList.add('view');
        next.classList.add('gallery__slide-next_view');
        prev.classList.add('gallery__slide-prev_view');
    };

    // Функция для изменения стилей, закрывающих изображение
    const closeImg = (imgWrap, descr, img, num, close, next, prev) => {

        imgWrap.classList.remove('gallery__slide_expanded');
        descr.classList.remove('hide');
        img.classList.remove('gallery__img_expanded');
        num.classList.remove('view-flex');
        close.classList.remove('view');
        next.classList.remove('gallery__slide-next_view');
        prev.classList.remove('gallery__slide-prev_view');
    };

    // Общий обработчик события для открытия / закрытия изображения
    function imageAction(bgState, param, func, more) {

        document.addEventListener('click', (e) => {

            let target = e.target;

            if (target && target.classList.contains(param)) {

                let imgBlock = target.closest('.gallery__slide'),
                    content = target.closest('.gallery__content'),
                    seeMoreBtn = content.querySelector('.see-more'),
                    imgAbout = imgBlock.querySelector('.gallery__about'),
                    image = imgBlock.querySelector('.gallery__img'),
                    number = imgBlock.querySelector('.gallery__number'),
                    closeBtn = imgBlock.querySelector('.gallery__slide-close'),
                    bg = document.querySelector('.modal-bg'),
                    nextBtn = imgBlock.querySelector('.gallery__slide-next'),
                    prevBtn = imgBlock.querySelector('.gallery__slide-prev');

                /* Добавлять фон, измнеять состояние скролла,
                открывать/закрывать изображение */
                bg.classList.toggle('view');
                document.body.style.overflow = bgState;
                func(imgBlock, imgAbout, image, number, closeBtn, nextBtn, prevBtn);

                /* Если изображение открывается, 
                то кнопка временно перемещается из flex-контейнера */
                if (seeMoreBtn && more == 1) {

                    imgBlock.appendChild(seeMoreBtn);
                    seeMoreBtn.classList.add('hide');

                    /* Если изображение закрывается,
                    то кнопка возвращается во flex-контейнер,
                    скрывются ненужные изображения */
                } else if (seeMoreBtn && more == 0 && content.children.length != content.querySelectorAll('.gallery__slide.view').length) {

                    content.appendChild(seeMoreBtn);
                    seeMoreBtn.classList.remove('hide');

                    let hiddenImg = document.querySelectorAll('.view_mod');

                    for (let key of hiddenImg) {
                        key.classList.remove('view_mod');
                    }
                }
            }
        });
    }

    // Открытие изображения
    imageAction('hidden', 'gallery__about', openImg, 1);

    // Закрытие изображения
    imageAction('', 'gallery__slide-close', closeImg, 0);


    // Просмотр следующего изображения
    gallery.addEventListener('click', (e) => {

        /* Кнопка переключения на текущем изображении,
        контейнер изображений и блок текущего изображения */
        let target = e.target,
            nextBtn = target.closest('.gallery__slide-next'),
            content = target.closest('.gallery__content'),
            imgBlock = target.closest('.gallery__slide');

        if (target && nextBtn && nextBtn !== content.lastElementChild.querySelector('.gallery__slide-next')) {

            if (imgBlock.classList.contains('view_mod')) {
                imgBlock.classList.remove('view_mod');
            }

            // Блок соседнего изображения и его внутренние элементы
            let nextImgBlock = imgBlock.nextElementSibling,
                nextImgAbout = nextImgBlock.querySelector('.gallery__about'),
                nextImage = nextImgBlock.querySelector('.gallery__img'),
                nextNumber = nextImgBlock.querySelector('.gallery__number'),
                nextCloseBtn = nextImgBlock.querySelector('.gallery__slide-close'),
                nextNextBtn = nextImgBlock.querySelector('.gallery__slide-next'),
                nextPrevBtn = nextImgBlock.querySelector('.gallery__slide-prev');

            nextImgBlock.classList.add('view_mod');

            // Внутренние элементы блока текущего изображения 
            let imgAbout = imgBlock.querySelector('.gallery__about'),
                image = imgBlock.querySelector('.gallery__img'),
                number = imgBlock.querySelector('.gallery__number'),
                closeBtn = imgBlock.querySelector('.gallery__slide-close'),
                prevBtn = imgBlock.querySelector('.gallery__slide-prev');

            closeImg(imgBlock, imgAbout, image, number, closeBtn, nextBtn, prevBtn);

            openImg(nextImgBlock, nextImgAbout, nextImage, nextNumber, nextCloseBtn, nextNextBtn, nextPrevBtn);

        } else if (target && nextBtn && nextBtn == content.lastElementChild.querySelector('.gallery__slide-next')) {

            // Внутренние элементы блока текущего изображения 
            let imgAbout = imgBlock.querySelector('.gallery__about'),
                image = imgBlock.querySelector('.gallery__img'),
                number = imgBlock.querySelector('.gallery__number'),
                closeBtn = imgBlock.querySelector('.gallery__slide-close'),
                prevBtn = imgBlock.querySelector('.gallery__slide-prev');

            closeImg(imgBlock, imgAbout, image, number, closeBtn, nextBtn, prevBtn);

            // Блок первого изображения и его внутренние элементы
            let firstImgBlock = content.firstElementChild,
                firstImgAbout = firstImgBlock.querySelector('.gallery__about'),
                firstImage = firstImgBlock.querySelector('.gallery__img'),
                firstNumber = firstImgBlock.querySelector('.gallery__number'),
                firstCloseBtn = firstImgBlock.querySelector('.gallery__slide-close'),
                firstNextBtn = firstImgBlock.querySelector('.gallery__slide-next'),
                firstPrevBtn = firstImgBlock.querySelector('.gallery__slide-prev');

            openImg(firstImgBlock, firstImgAbout, firstImage, firstNumber, firstCloseBtn, firstNextBtn, firstPrevBtn);
        }

    });

    // Просмотр предыдущего изображения
    document.addEventListener('click', (e) => {

        /* Кнопка переключения на текущем изображении,
        контейнер изображений и блок текущего изображения */
        let target = e.target,
            prevBtn = target.closest('.gallery__slide-prev'),
            content = target.closest('.gallery__content'),
            imgBlock = target.closest('.gallery__slide');

        if (target && prevBtn && prevBtn !== content.firstElementChild.querySelector('.gallery__slide-prev')) {

            if (imgBlock.classList.contains('view_mod')) {
                imgBlock.classList.remove('view_mod');
            }

            // Блок соседнего изображения и его внутренние элементы
            let previousImgBlock = imgBlock.previousElementSibling,
                previousImgAbout = previousImgBlock.querySelector('.gallery__about'),
                previousImage = previousImgBlock.querySelector('.gallery__img'),
                previousNumber = previousImgBlock.querySelector('.gallery__number'),
                previousCloseBtn = previousImgBlock.querySelector('.gallery__slide-close'),
                previousNextBtn = previousImgBlock.querySelector('.gallery__slide-next'),
                previousPrevBtn = previousImgBlock.querySelector('.gallery__slide-prev');

            previousImgBlock.classList.add('view_mod');

            // Внутренние элементы блока текущего изображения
            let imgAbout = imgBlock.querySelector('.gallery__about'),
                image = imgBlock.querySelector('.gallery__img'),
                number = imgBlock.querySelector('.gallery__number'),
                closeBtn = imgBlock.querySelector('.gallery__slide-close'),
                nextBtn = imgBlock.querySelector('.gallery__slide-next');

            closeImg(imgBlock, imgAbout, image, number, closeBtn, nextBtn, prevBtn);

            openImg(previousImgBlock, previousImgAbout, previousImage, previousNumber, previousCloseBtn, previousNextBtn, previousPrevBtn);

        } else if (target && prevBtn && prevBtn == content.firstElementChild.querySelector('.gallery__slide-prev')) {

            // Внутренние элементы блока текущего изображения
            let imgAbout = imgBlock.querySelector('.gallery__about'),
                image = imgBlock.querySelector('.gallery__img'),
                number = imgBlock.querySelector('.gallery__number'),
                closeBtn = imgBlock.querySelector('.gallery__slide-close'),
                nextBtn = imgBlock.querySelector('.gallery__slide-next');

            closeImg(imgBlock, imgAbout, image, number, closeBtn, nextBtn, prevBtn);

            // Блок последнего изображения и его внутренние элементы
            let lastImgBlock = content.lastElementChild,
                lastImgAbout = lastImgBlock.querySelector('.gallery__about'),
                lastImage = lastImgBlock.querySelector('.gallery__img'),
                lastNumber = lastImgBlock.querySelector('.gallery__number'),
                lastCloseBtn = lastImgBlock.querySelector('.gallery__slide-close'),
                lastNextBtn = lastImgBlock.querySelector('.gallery__slide-next'),
                lastPrevBtn = lastImgBlock.querySelector('.gallery__slide-prev');

            lastImgBlock.classList.add('view_mod');

            openImg(lastImgBlock, lastImgAbout, lastImage, lastNumber, lastCloseBtn, lastNextBtn, lastPrevBtn);
        }
    });
}());