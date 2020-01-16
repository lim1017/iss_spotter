const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes} = require("./iss");

let globalIP=0;

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);


  fetchCoordsByIP(ip, (error, lat, long) => {
    if (error) {
      console.log("It didn't work!" , error);
      return;
    }else console.log(`Coordinates, Latitude: ${lat}, Longitude: ${long}`);


    fetchISSFlyOverTimes(lat, long, (error, flyTime) => {
      if (error) {
        console.log("It didn't work!" , error);
        return;
      }else {
        console.log(flyTime)
      }
      // console.log(`Coordinates, Latitude: ${lat}, Longitude: ${long}`);
    })
})
})
