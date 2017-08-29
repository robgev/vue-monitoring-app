const net = require('net');

let client = new net.Socket();

const PORT = 1337;

const HOST = '127.0.0.1';

const getMessageForConnection = _ => console.log('Log ::: Connected to server');

const setConnection = _ => client.connect(PORT, HOST, getMessageForConnection);

setConnection();

client.on('close', _ => client.setTimeout(500, setConnection));

module.exports = client;
