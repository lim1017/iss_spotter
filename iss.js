const request = require("request");

const fetchMyIP = function(callback) {
  const api = "https://api.ipify.org?format=json";

  request(api, (error, response, body) => {
    const data = JSON.parse(body);
    // console.log(data)

    console.log(response.statusCode, "status code");

    if (error) {
      callback("ERROR ERROR!", null);
      return;
    } else if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    } else return callback(null, `${data.ip}`);
  });
};

module.exports = { fetchMyIP };
