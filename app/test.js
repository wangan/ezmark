var mysql = require('mysql');
var conf = require('./conf/db');

var conn = mysql.createConnection(conf.mysql);
conn.connect();

conn.query('select * from ez_market',function(err,res){
	console.log(res);
});