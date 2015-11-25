var express = require('express');
var app_json = require('../config.json');
var router = express.Router();

//设置跨域访问
router.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "application/json");
  next();
});

router.get('/', function (req, res, next) {
  res.render('api', { title: 'api 说明文档', useage: app_json.useage });
});

router.post('/', function (req, res, next) {  
  res.send(req.body);     
});


module.exports = router;
