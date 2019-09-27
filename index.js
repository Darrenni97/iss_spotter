const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');


fetchMyIP((error, ip) => {
  fetchCoordsByIP(ip, (error, coords) => {
    fetchISSFlyOverTimes(coords, (error, data) => {
      if (error) {
        console.log(error);
      } else console.log(data);
    })
  });
});



