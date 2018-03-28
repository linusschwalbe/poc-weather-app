
const axios = require('axios');
const express = require('express');

module.exports = () => {
  const router = express.Router();

  router.get('/forecast', (req, res) => {
    const query = req.query.id;

    if (query) {
      return axios.get(`https://www.metaweather.com/api/location/${query}/`)
        .then((response) => {
          res.send({
            location: response.data.title,
            data: response.data.consolidated_weather.map((item) => {
              return {
                date: item.applicable_date,
                averageTemp: Math.round((item.min_temp + item.max_temp) / 2),
                weatherState: item.weather_state_name,
                predictability: item.predictability
              }
            })
          });
        });
    }
    res.send({});
  });

  return { router: router };
}
