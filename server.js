var express = require('express');

var app = express();


var http = require('http'),
    fs = require('fs');
    var main = require('./js/main')

var server = http.createServer (function (req,res){
	console.log('request was made:' + req.url);
	res.writeHead(200);
	var myReadStream = fs.createReadStream(__dirname + '/index.html','utf-8');
	myReadStream.pipe(res);
});

server.listen(3000,'127.0.0.1');
console.log("server has started");
