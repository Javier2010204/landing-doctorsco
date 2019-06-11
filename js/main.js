$(document).ready(function(){
	$(".numero1").boxLoader({
	    direction:"x",
	    position: "100%",
	    effect: "fadeIn",
	    duration: "1s",
	    windowarea: "50%"
	});

	$("#numero2").boxLoader({
	    direction:"x",
	    position: "100%",
	    effect: "fadeIn",
	    duration: "1s",
	    windowarea: "50%"
	});

	$("#numero3").boxLoader({
	    direction:"x",
	    position: "100%",
	    effect: "fadeIn",
	    duration: "1s",
	    windowarea: "50%"
	});

	$("#numero4").boxLoader({
	    direction:"x",
	    position: "100%",
	    effect: "fadeIn",
	    duration: "1s",
	    windowarea: "50%"
	}); 

	$.jScrollability([
            {
                'selector': '.text-wrapper',
                'start': function($el) { return $el.offset().top + $el.height() },
                'end': 'parent',
                'fn': function($el,pcnt) {
                    var $spans = $el.find('span');
                    var point = Math.floor(($spans.length+1) * pcnt);
                    $spans.each(function(i,el) {
                        var $span = $(el);
                        if (i < point) {
                            $span.addClass('visible');
                        } else {
                            $span.removeClass('visible');
                        }
                    });
                }
            }
        ]);
})
