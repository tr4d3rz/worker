
var express = require('express');
var app = express();
var nCnt = 0;

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');

app.get('/', function(request, response) {
  console.log("--> Request main page");
  response.send('OK !!!!Test da GITHUB.COM!!!' + nCnt);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

setInterval(function(){
	console.log("--->setTimeout " + nCnt++);
}, 2000);
