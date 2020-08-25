export const modal = (function () {

    // Модальная форма для заказа услуги
    let modalForm = document.querySelector('.modal'),
        // Кнопка закрытия формы
        modalClose = document.querySelector('.modal__close'),
        // Фон модальной формы
        modalBg = document.querySelector('.modal-bg'),
        // Кнопки заказа услуги
        btnOrder = document.querySelectorAll('.button_order'),
        // Радио-кнопки выбора вида услуги
        typeOrder = document.querySelectorAll('input[name="type-order"]'),
        // Визуальные блоки радио-кнопок
        checkBox = document.querySelectorAll('.check');

    // Клик по кнопке открывает модальную форму
    btnOrder.forEach((item, i) => {

        item.addEventListener('click', () => {

            typeOrder[i].setAttribute('checked', '');
            checkBox[i].classList.add('check_active');

            document.body.style.overflow = 'hidden';
            modalBg.classList.add('view');
            modalForm.classList.add('view');
        });
    });

    // Закрытие модальной формы
    modalClose.addEventListener('click', () => {

        removeActiveInput();

        document.body.style.overflow = '';
        modalBg.classList.remove('view');
        modalForm.classList.remove('view');
    });

    // Добавление активного атрибута к радио-кнопкам
    document.addEventListener('click', (e) => {

        let target = e.target,
            input = target.closest('input[name="type-order"]');

        if (target && input) {

            removeActiveInput();

            input.setAttribute('checked', '');
            input.nextElementSibling.classList.add('check_active');
        }
    });

    // Очистка атрибутов радио-кнопок
    function removeActiveInput() {

        for (let key of typeOrder) {
            key.removeAttribute('checked');
        }

        for (let key of checkBox) {
            key.classList.remove('check_active');
        }
    }
}());