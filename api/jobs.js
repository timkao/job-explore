const router = require('express').Router();
const axios = require('axios');

router.post('/', (req, res, next) => {
  axios.get(`https://jobs.github.com/positions.json?search=${req.body.query}`)
  .then(response => response.data)
  .then(jobs => {
    res.send(jobs)
  })
  .catch(err => {
    console.log(err)
  })
});

module.exports = router;
