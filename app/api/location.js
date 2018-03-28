
const axios = require('axios');
const express = require('express');

module.exports = () => {
  const router = express.Router();

  router.get('/location', (req, res) => {
    const query = req.query.search;

    if (query) {
      return axios.get(`https://www.metaweather.com/api/location/search/?query=${query}`)
        .then((response) => {
          res.send(response.data.filter(
            item => item.title.toLowerCase().startsWith(query)
          ));
        });
    }
    res.send([]);
  });

  return { router: router };
}
