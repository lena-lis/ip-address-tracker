import { map, customIcon } from './init-map.js';
import { getOffset } from '../helpers';


const ipInfo = document.getElementById('ip');
const locationInfo = document.getElementById('location');
const timezoneInfo = document.getElementById('timezone');
const ispInfo = document.getElementById('isp');

function setInfo(mapData) {
  if (!ipInfo || !locationInfo || !timezoneInfo || !ispInfo) return;
  
  const {lat, lng, country, region, timezone} = mapData.location;
  ipInfo.textContent = mapData.ip;
  locationInfo.textContent = `${country} ${region}`;
  timezoneInfo.textContent = timezone;
  ispInfo.textContent = mapData.isp;
  
  map.setView([lat, lng]);
  L.marker([lat, lng], { icon: customIcon }).addTo(map);

  if (window.matchMedia("(max-width: 1023px)")) {
    getOffset(map);
  }
}

export {setInfo};