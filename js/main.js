$(document).ready(function(){
        $('html').niceScroll({
        	touchbehavior: true,
        	mousescrollstep: 40,
        	cursorcolor: '#ffc400',
        	smoothscroll: true,
        	zindex: 100,
        	cursorborder: '1px soldi #000',
        	hwacceleration: true
        });
        $('#sectionFacts').imageScroll({
			holderClass: 'section section-facts',
			imgClass: 'section-facts__image'
		});
    });