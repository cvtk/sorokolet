function initMap() {
    var markers = [
        {lat: 57.5947799, lng: 39.8840093},
        {lat: 57.5781059, lng: 39.8443823},
        {lat: 57.6498977, lng: 39.9483299},
        {lat: 57.5842799, lng: 39.8698753}
    ];

    var map = new google.maps.Map(document.getElementById('googleMap'), {
    center: markers[0],
    scrollwheel: false,
    zoom: 11
  });

    new google.maps.Marker({
    map: map,
    position: markers[0],
    title: 'Центральный склад'
    });

    new google.maps.Marker({
    map: map,
    position: markers[1],
    title: 'Детское питание Кроха'
    });

    new google.maps.Marker({
    map: map,
    position: markers[2],
    title: 'Детское питание "Заволга"'
    });

    new google.maps.Marker({
    map: map,
    position: markers[3],
    title: 'Детское Питание "Суздальская Ярмарка"'
    });
}

$(document).ready(function(){
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1500);
                return false;
            }
        }
    });

    $('#partnersCarousel').slick({
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
        });
    $('#sectionFacts').imageScroll({
		holderClass: 'section section-facts',
		imgClass: 'section-facts__image'
	});
});