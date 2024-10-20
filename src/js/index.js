import '../style.css';
import './vendor/leaflet.js';
import './vendor/leaflet.css';
import { getData } from './modules/get-data.js';
import { initMap } from './modules/init-map.js';

const ipInput = document.querySelector('.search-bar__input');
const searchBtn = document.querySelector('.search-bar__btn');

initMap();
searchBtn.addEventListener('click', () => getData(ipInput.value));
ipInput.addEventListener('keydown', handleKey);

function handleKey(evt) {
  if (evt.key === 'Enter') {
    getData(ipInput.value);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  getData('195.70.196.197');
})