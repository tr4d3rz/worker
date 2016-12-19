var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');

app.get('/', function(request, response) {
  console.log("--> Request main page");
  response.send('OK !!!!Test da GITHUB.COM!!!');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

var nCnt = 0;
setTimeout(function(){
	console.log("--->setTimeout " + nCnt++);
}, 2000);
