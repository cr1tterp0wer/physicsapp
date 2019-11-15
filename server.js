//libs
var express = require('express');
var app     = express();
var path    = require('path');
var http    = require('http'); //http server obj
var port    = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

//define routes
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname + '/public/pages/dot-product.html'));
});

//spin up server
var server = app.listen( port, function(){

  var port = server.address().port;
  console.log('Listening on port ' + port);
});


