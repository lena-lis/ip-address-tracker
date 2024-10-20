import { isValidIp } from '../helpers';
import { setInfo } from './set-info.js';

async function getData(ip) {
  if (isValidIp(ip)) {
    const apiKey = 'at_fndilXRdnbfIp5XH7crBgbqCMFMap';
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setInfo(data);
    } catch (error) {
      console.error('Error:', error);
    }
  } else {
    alert("You should enter a valid IP address");
  }
}

export {getData};