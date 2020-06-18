var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',messg:"hy this is message",name:"nitin" });
});

module.exports = router;
