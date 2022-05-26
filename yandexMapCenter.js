myMap = new ymaps.Map("map", {
    center: [55.76, 37.64],
    zoom: 11,
    controls: ["zoomControl", "fullscreenControl"]
});

//создаете точки (несколько штук)
myPlacemark = new ymaps.Placemark([50.76, 36.64], {
    hintContent: "подсказка",
    balloonContent: "контент балуна"
});

//добавляете к карте
myMap.geoObjects.add(myPlacemark);

//центровка карты по всем точкам
myMap.setBounds(myMap.geoObjects.getBounds(), {
    checkZoomRange: true,
    zoomMargin: 35
});
