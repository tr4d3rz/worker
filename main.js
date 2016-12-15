
var express = require('express'),
    fs      = require('fs'),
    app     = express(),
    eps     = require('ejs'),
    morgan  = require('morgan');

Object.assign=require('object-assign')

app.engine('html', require('ejs').renderFile);
app.use(morgan('combined'))

// setup ports
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

app.get('/', function(req, res) {

	res.end('Node JS running!');

});

// server listens in on port
app.listen(server_port, server_ip_address, function () {
	 console.log( "Listening on " + server_ip_address + ", server_port " + server_port );
});
