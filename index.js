const { fetchMyIP, fetchCoordsByIP } = require("./iss");

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
    }
  
    console.log(`Coordinates, Latitude: ${lat}, Longitude: ${long}`  );
  });

});




