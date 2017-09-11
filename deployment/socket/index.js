module.exports = function(server) {
	const io = require('socket.io').listen(server);

	io.sockets.on('connection', function(socket) {
		console.log('Log ::: WS ::: User was connected');
  	});

	io.sockets.on('error', function(err) {
		console.log('err');
	});

  	return io;
}
