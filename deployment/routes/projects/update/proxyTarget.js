const ipc = require('../../../net');

let proxyServer;

ipc.on('connection', socket => {
	proxyServer = socket;
});

module.exports = (req, res) => {
	if (proxyServer) {
		socket.write(JSON.stringify({
			msg: 'update-proxy-targets'
		}));
	}
}
