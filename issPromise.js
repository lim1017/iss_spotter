const request = require('request-promise-native');


const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};


const fetchCoordsByIP = function(data) {
  // console.log(body, ' iss promise fetch')
  const IP=data.ip
  console.log(IP,'IPIPIPI')
  return request(`https://ipvigilante.com/${IP}`)
};


const fetchISSFlyOverTimes = function(data) {
  const lat=data.latitude
  const long=data.longitude
  return request(`http://api.open-notify.org/iss-pass.json?lat=${lat}&lon=${long}`)


}


module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };