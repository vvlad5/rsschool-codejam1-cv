const polyfills = {
    collection: [
        function raf() {
            window.raf = window.requestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.msRequestAnimationFrame;
        }
    ],

    init() {
        this.collection.forEach(item => item());
    }
}