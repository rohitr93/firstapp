var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/2', function(req, res, next) {
    res.send('shit');
});

router.get('/a', function(req, res, next) {
    res.send('shirt');
});

module.exports = router;
