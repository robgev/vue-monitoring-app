const net = require('net');

const socket = new net.Socket();

socket.connect(1337, 'localhost', _ => {
	console.log('Log ::: Connected with server');
});

module.exports = socket;
