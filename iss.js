const request = require("request");

const fetchMyIP = function(callback) {
  const api = "https://api.ipify.org?format=json";

  request(api, (error, response, body) => {
    const data = JSON.parse(body);
    // console.log(data)
    // console.log(response.statusCode, "status code");

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    } else return callback(null, `${data.ip}`);
  });
};

const fetchCoordsByIP = function(ip, callback) {
  const api = `https://ipvigilante.com/${ip}`;

  request(api, (error, response, body) => {
    const data = JSON.parse(body).data;
    // console.log(data)

    // console.log(response.statusCode, "status code");
    // console.log(data.latitude, 'lats  ')
    // if (error) {
    //   callback("ERROR ERROR!", null);
    //   return;
    if (response.statusCode !== 200) {
      callback("Error", null);
      return;
    } else callback(null, `${data.latitude}`, `${data.longitude}`);
  });
};


const fetchISSFlyOverTimes = function(lat, long, callback) {
  const api = `http://api.open-notify.org/iss-pass.json?lat=${lat}&lon=${long}`;

  request(api, (error, response, body) => {
    const data = JSON.parse(body);
    // console.log(data)
    // console.log(data.response)
    
    if (response.statusCode !== 200) {
      callback("Error", null);
      return;
    } else callback(null, JSON.parse(body).response);
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };
