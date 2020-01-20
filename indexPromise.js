const request = require('request-promise-native');
const {fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes} = require('./issPromise')

fetchMyIP()
  .then(body =>{
    const data=JSON.parse(body)
    console.log(data.ip)
    return fetchCoordsByIP(data)
  })
  .then(body =>{
    console.log(body, 'bobobobobo')
    const data = JSON.parse(body).data;
    console.log(`latitude: ${data.latitude}, longitude: ${data.longitude}`)
    return data
  })
  .then(fetchISSFlyOverTimes)
  .then(body =>{
  // const data = JSON.parse(body)
  console.log(body, 'fly time data')
    
  })