;(function () {
    "use strict";

    //= custom/polyfills.js
    //= custom/animation.js
    //= custom/scrollbar-control.js
    //= custom/preloader.js
    //= custom/menu.js

    const App = {
        init() {
            polyfills.init();
            preloader.init();

            Menu.init();
        }
    };

    App.init();
})();