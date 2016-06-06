console.log('Incluso file plugin!');

(function ($) {
    $.prototype.colore = function (opzioni) {
        var settings = $.extend({}, $.prototype.colore.defaults, opzioni);
        if (typeof opzioni == 'function') {
            $.prototype.colore.start();
            return this.each($.proxy(function (i, element) {
                debug(i);
                $.prototype.colore.apply(element, settings);
            }, this));
        } else if (typeof opzioni == 'string') {
            if (opzioni == 'invertiColori') {
                return this.each($.proxy(function (i, element) {
                    debug(i);
                    $.prototype.colore.applyInvertiti(element, settings);
                }, this));
            } else if(opzioni=='distruggiTutto') {
                
            }
        }
    }
    $.prototype.colore.apply = function (element, settings) {
        $(element).css(settings);
    }
    $.prototype.colore.applyInvertiti = function (element, settings) {

    }
    $.prototype.colore.start = function () {
        console.log('Inizio applicazione funzione.');
    }
    $.prototype.colore.defaults = {
        color: 'red',
        background: '#eee'
    }
    function debug(text) {
        console.log(text);
    }
    $.colore = $.prototype.colore;
})(jQuery)
