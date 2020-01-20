const request = require('request-promise-native');


const fetchMyIP = function() {
  // console.log(request('https://api.ipify.org?format=json'))
  
  // console.log(body, 'ipbody')

  return request('https://api.ipify.org?format=json');
};


const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  return request(`https://ipvigilante.com/json/${ip}`);
};


const fetchISSFlyOverTimes = function(body) {
  const { latitude, longitude } = JSON.parse(body).data;
  const url = `http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`;
  return request(url);
};

const printFlyOverTimes = function(body) {

  for (const pass of flyTime) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);  //chg risetime to ${datetime}
    const duration = pass.duration;
    console.log(`Next pass: ${datetime} for ${duration} seconds!`);
  }

}





module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, printFlyOverTimes };     