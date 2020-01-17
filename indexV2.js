const {fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes} = require("./iss");


const nextISSTimesForMyLocation = function(callback) {


  fetchMyIP((error, ip) => {
    if (error) {
      console.log("It didn't work!", error);
      return;
    }
    console.log("It worked! Returned IP:", ip);

    fetchCoordsByIP(ip, (error, lat, long) => {
      if (error) {
        console.log("It didn't work!", error);
        return;
      } else console.log(`Coordinates, Latitude: ${lat}, Longitude: ${long}`);

      fetchISSFlyOverTimes(lat, long, (error, flyTime) => {
        if (error) {
          console.log("It didn't work!", error);
          return;
        } else {

          for (const pass of flyTime) {
            const datetime = new Date(0);
            datetime.setUTCSeconds(pass.risetime);  //chg risetime to ${datetime}
            const duration = pass.duration;
            console.log(`Next pass: ${datetime} for ${duration} seconds!`);
          }

          // console.log(flyTiclme);
          // callback(null, flyTime)
        }
      });
    });
  });
};

nextISSTimesForMyLocation();

// const printTime = function(passTimes) {
//   // console.log(passTimes, ' pass time')

//   for (const pass of passTimes) {
//     const datetime = new Date(0);
//     datetime.setUTCSeconds(pass.risetime);  //chg risetime to ${datetime}
//     const duration = pass.duration;
//     console.log(`Next pass: ${datetime} for ${duration} seconds!`);
//   }
// };