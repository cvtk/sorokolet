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
    $('#sectionFacts').imageScroll({
		holderClass: 'section section-facts',
		imgClass: 'section-facts__image'
	});
});