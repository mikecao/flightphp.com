function ready() {
    var menu = document.getElementById('menu');

    if (menu) {
        var rect = menu.getBoundingClientRect();
        var offset = rect.top + document.body.scrollTop;

        window.addEventListener('scroll', function () {
            if (window.pageYOffset > offset) {
                menu.style.position = 'fixed';
            } else {
                menu.style.position = 'absolute';
            }
        });
    }
}

if (document.readyState != 'loading'){
    ready();
} else {
    document.addEventListener('DOMContentLoaded', ready);
}
