const router = require('express').Router()

router.get('/', (req, res, next) => {
  console.log('test route')
  next()
})

router.post('/', (req, res, next) => {
  console.log('post it')
});

module.exports = router;
