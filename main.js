var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.end('Pagina principale!');
});

// server listens in on port
app.listen(server_port, server_ip_address, function () {
	 console.log( "...Listening on " + server_ip_address + ", server_port " + server_port );
});

console.log("Applicazione: tutto OK!");
