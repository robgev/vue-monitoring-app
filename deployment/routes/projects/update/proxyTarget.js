const ipc = require('../../../net');

const db = require('../../../lowDb');

let proxyServer;

ipc.on('connection', socket => {
	proxyServer = socket;
});

module.exports.update = ({ body, params }, res) => {

	const { project, company } = params;

	db
		.get('companies')
		.get(company)
		.get('projects')
		.get(project)
		.set('proxy-target', body.target)
		.write();

	if (proxyServer) {
		proxyServer.write(JSON.stringify({
			msg: 'update-proxy-targets'
		}));
	}

	res.json({msg: 'success'});
}
