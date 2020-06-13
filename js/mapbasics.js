ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map('map', {
        center: [55.651889, 37.765434],
        zoom: 15
    }, {
        searchControlProvider: 'yandex#search'
    });

    myMap.geoObjects
        .add(new ymaps.Placemark([55.651889, 37.765434], {
            balloonContent: 'Россия, Москва, Братиславская улица, 30'
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }))

}