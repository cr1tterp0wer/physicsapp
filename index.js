//libs
var express = require('express');
var app     = express();
var path    = require('path');
var http    = require('http'); //http server obj

app.use(express.static('public'));

//define routes
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname + '/public/pages/dot-product.html'));
});

//spin up server
var server = app.listen(app.get('port'),function(){

  var port = server.address().port;
  console.log('Listening on port ' + port);
});


