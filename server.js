var express = require("express");
var app     = express();
var path    = require("path");


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/css/main.css',function(req,res){
    res.sendFile(path.join(__dirname + '/css/main.css')); 
});

app.get('/js/main.js',function(req,res){
    res.sendFile(path.join(__dirname + '/js/main.js')); 
});



app.listen(3000);

console.log("Running at Port 3000");
