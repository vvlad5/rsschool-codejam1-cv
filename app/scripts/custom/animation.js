const anim = {
    raf2x(task) {
        raf(() => {
            raf(task)
        });
    },

    afterTransit(prop, fnc) {
        prop = new RegExp(prop, 'i');

        const handler = e => {
            e.currentTarget.removeEventListener('transitionend', handler);
            fnc(e);
        };

        return handler;
    }
};