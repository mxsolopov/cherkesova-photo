export const scrollTop = (function () {

    let goTopBtn = document.querySelector('.back-to-top'),
        gallery = document.querySelector('.gallery');

    window.addEventListener('scroll', () => {

        let scrolled = gallery.offsetTop + window.pageYOffset,
            coords = document.documentElement.clientHeight * 5;

        if (scrolled > coords) {
            goTopBtn.classList.add('back-to-top_show');
        }
        if (scrolled < coords) {
            goTopBtn.classList.remove('back-to-top_show');
        }
    });

    goTopBtn.addEventListener('click', function (e) {

        e.preventDefault();

        const blockID = goTopBtn.getAttribute('href');

        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}());