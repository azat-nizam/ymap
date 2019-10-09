ymaps.ready(init);

function init() {
    var fujidaMap = new ymaps.Map('map', {
            center: [53.70, 47.00],
            zoom: 5
        }, {
            searchControlProvider: 'yandex#search'
        }),
        objectManager = new ymaps.ObjectManager({
            // Кластеризация меток
            clusterize: true,
            gridSize: 32,
            clusterDisableClickZoom: true
        });

    // Вид маркеров
    objectManager.objects.options.set('preset', 'islands#greenDotIcon');
    objectManager.clusters.options.set('preset', 'islands#greenClusterIcons');
    fujidaMap.geoObjects.add(objectManager);

    $.ajax({
        url: "address.json"
    }).done(function(data) {
        objectManager.add(data);
    });

}