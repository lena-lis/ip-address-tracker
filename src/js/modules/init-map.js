import L from '../vendor/leaflet.js';

const currentMap = document.querySelector('.map');

currentMap.replaceChildren();

const map = L.map(currentMap, {
  center: [55.7748763, 37.6326415],
  zoom: 13,
  keyboard: false,
  zoomControl: false,
});

const customIcon = L.icon({
  iconUrl: 'images/icon-location.svg',
  iconSize: [30, 40],
});

const initMap = () => {
  if (!map && !customIcon) {
    return;
  }

  const tile = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a> Coded by <a href="https://github.com/lena-lis" target="_blank">Elena Lisichenok</a>'
  });
  tile.addTo(map);

  const marker = L.marker([55.7748763, 37.6326415], { icon: customIcon });
  marker.addTo(map);

  // установка фиксированной позиции маркера
  function updateMarkerPosition() {
    // получаем текущие координаты маркера
    let latLng = marker.getLatLng();
    marker.setLatLng([latLng.lat, latLng.lng]);
  }

  // обработчик изменения масштаба
  map.on('zoomend', () => {
    updateMarkerPosition();
  });

  const resizeObserver = new ResizeObserver(() => {
    map.invalidateSize();
  });

  resizeObserver.observe(currentMap);
};

export { map, customIcon, initMap };