var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=a69aac0a41c68af7939bd9aa136278a2&units=metric';

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location),
        requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function(res) {
          if (res.data.cod && res.data.message) {
            throw new Error(res.data.message);
          } else {
            return res.data.main.temp;
          }
        }, function(e) {
            throw new Error('Cannot fetch weather. Try again later');
        });
  }
}
