var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/assets'));

app.use("/assets", express.static(__dirname + '/assets'));
//app.use('/static', express.static(__dirname + '/assets'));

app.use("/images", express.static(__dirname + '/images'));

app.get('/', function(request, response) {
  response.sendfile('./index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

