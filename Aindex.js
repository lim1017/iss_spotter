const request = require('request-promise-native');
const {fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, printFlyOverTimes} = require('./Aiss')

//, fetchCoordsByIP, fetchISSFlyOverTimes

fetchMyIP()
  .then(body=> {
    console.log(body, 'ip')
    return body
  })
  .then(fetchCoordsByIP)
  .then(body=> {
    let data= JSON.parse(body)
    // console.log(data)
    console.log(data.data.latitude, ' lat')
    console.log(data.data.longitude, ' long')
    return body
  })
  .then(fetchISSFlyOverTimes)
  .then(body66 => {
    // console.log(body66, 'body')
    console.log(JSON.parse(body66).response, 'body')
    return body66
   })
   .then(printFlyOverTimes)
