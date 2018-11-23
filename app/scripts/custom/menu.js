class Menu {
  constructor(menu) {
    this._menu = menu;
    this._busy = false;
    this._addEvents();
  }

  _addEvents() {
    this._menu.addEventListener('click', e => {
      if (this._busy) return false;

      const item = e.target.closest('.menu__item');

      if (!item) return false;

      if (!item.classList.contains('active')) {
        this._busy = true;
        const activeBtn = this._menu.querySelector('.menu__item.active');
        const lastActiveTab = document.querySelector('.section.active');

        lastActiveTab.classList.remove('active');
        activeBtn.classList.remove('active');

        const newActiveTab = document.querySelector(`#${item.dataset.for}`);

        item.classList.add('active');
        newActiveTab.classList.add('active');
        newActiveTab.classList.add('enter');
        newActiveTab.addEventListener('transitionend', anim.afterTransit('transform', () => {
          newActiveTab.classList.remove('enter');
          newActiveTab.classList.remove('show');
          this._busy = false;
        }));
        anim.raf2x(() => {
          newActiveTab.classList.add('show');
        });
      }
    });
  }

  static init() {
    const menu = document.querySelector('.js-menu');

    if (!menu) {
      return false;
    }

    new Menu(menu);
  }
}