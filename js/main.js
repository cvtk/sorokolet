$(document).ready(function(){
        $('html').niceScroll({
        	touchbehavior: true,
        	mousescrollstep: 25,
        	cursorcolor: '#ffc400',
        	smoothscroll: true,
        	zindex: 100,
        	cursorborder: '1px soldi #000'
        });
        $('#sectionFacts').imageScroll({
			holderClass: 'section section-facts',
			imgClass: 'section-facts__image'
		});
    });