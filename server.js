/* global console */
var 
	express = require('express'),
	http = require('http'),	
	io = require('socket.io').listen(port);

/* serve them files */
var app =  express();

app.use(express.static(__dirname));

http.createServer(app).listen(80);

io.sockets.on('connection', function(client) {

	client.on()
	// check room
	// send room details
	// if room is not full, add user & show on screen
});

console.log('-> server is running');