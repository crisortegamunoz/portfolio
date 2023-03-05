(function($) {
    $.fn.prognroll = function(options) {

        var settings = $.extend({
			width: 5, 
            height: 5, 
            color: "#50bcb6", 
            custom: false 
        }, options);

        return this.each(function() {
            if ($(this).data('prognroll')) {
                return false;
            }
            $(this).data('prognroll', true);

            var $span = $("<span>", {
                class: "bar"
            });
            $("#scrollbar-right").prepend($span);

            $span.css({
                position: "fixed",
                top: 0,
                left: 0,
                width: 0,
                height: settings.height,
                backgroundColor: settings.color,
                zIndex: 9999999
            });

            if (settings.custom === false) {

                $(window).scroll(function(e) {
                    e.preventDefault();
                    var windowScrollTop = $(window).scrollTop();
                    var windowHeight = $(window).outerHeight();
                    var bodyHeight = $(document).height();

                    var total = (windowScrollTop / (bodyHeight - windowHeight)) * 100;

                    $(".bar").css("width", total + "%");
                });

            } else {

                $(this).scroll(function(e) {
                    e.preventDefault();
                    var customScrollTop = $(this).scrollTop();
                    var customHeight = $(this).outerHeight();
                    var customScrollHeight = $(this).prop("scrollHeight");

                    var total = (customScrollTop / (customScrollHeight - customHeight)) * 100;

                    $(".bar").css("width", total + "%");
                });

            }

            $(window).on('hashchange', function(e) {
                e.preventDefault();
                console.log($(window).scrollTop());
            });
            $(window).trigger('hashchange');

            var windowScrollTop = $(window).scrollTop();
            var windowHeight = $(window).outerHeight();
            var bodyHeight = $("body").outerHeight();

            var total = (windowScrollTop / (bodyHeight - windowHeight)) * 100;

            $(".bar").css("width", total + "%");

        });
    };
})(jQuery);
