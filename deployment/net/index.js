const net = require('net');

const server = net.createServer();

server.listen(1337);

module.exports = server;
