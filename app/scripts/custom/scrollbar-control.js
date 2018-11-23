const scrollbarControl = {
    show() {
        document.body.classList.remove('hide-scroll');
        document.body.style.paddingRight = ``;
    },

    hide() {
        document.body.classList.add('hide-scroll');
        document.body.style.paddingRight = this._calcScrollbarWidth();
    },

    _calcScrollbarWidth() {
        let scrollbarMeasure = document.createElement('div');
        scrollbarMeasure.className = 'scroll-measure';

        document.body.appendChild(scrollbarMeasure);

        let offsetWidth = scrollbarMeasure.offsetWidth,
            clientWidth = scrollbarMeasure.clientWidth,
            scrollbarWidth = `${offsetWidth - clientWidth}px`;

        document.body.removeChild(scrollbarMeasure);

        return scrollbarWidth;
    }
};