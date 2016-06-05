(function ($) {
    var settings;
    $.fn.myplugin = function (options) {
        settings = $.extend({}, $.fn.myplugin.defaults, options);
        return this.each(function () {
            var a = $(this);
            debug(a.text());
            if (a.text().length > $.fn.myplugin.defaults.maxlength)
                return;
            if (settings.mode == 'upper') {
                a.text(a.text().toUpperCase());
            } else if (settings.mode == 'lower') {
                var a = $(this);
                a.text(a.text().toLowerCase());
            } else if (settings.mode == 'novocali') {
                var a = $(this);
                a.text($.fn.myplugin.noVocali(a.text()));
            }
        });
    };

    function debug(text) {
        if (settings.debug)
            console.log(text);
    }

    $.fn.myplugin.noVocali = function (string) {
        return string.replace(/[aeiouAEIOU]+/g, '');
    }

    $.fn.myplugin.defaults = {
        debug: false,
        mode: 'upper',
        maxlength: 10
    }

})(jQuery);