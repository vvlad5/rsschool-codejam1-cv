const preloader = {
    _disablingPreloader() {
        let preloader = document.querySelector('.js-preloader');

        setTimeout(() => {
            let handler = () => {
                preloader.style.display = 'none';
                preloader.classList.remove('hide');
                preloader.removeEventListener('animationend', handler);
                scrollbarControl.show();
            };

            preloader.addEventListener('animationend', handler);
            preloader.classList.add('hide');
        }, 700);
    },

    init() {
        scrollbarControl.hide();
        window.addEventListener('load', this._disablingPreloader);
    }
};