const converter = require('../libs/converter-bitbucket-payload.js');

module.exports = (req, res, next) => {

	const { body: payload, app, uuid } = req;

	try {
		const convertedData = converter.set(payload).getInfo(['push', 'commits']);

		convertedData.uuid = convertedData.push.hash;

		// send only when change in master branch

		if (convertedData.push.branch === 'master') {
			const { io } = app.settings;

			// broadcast
			io.sockets.emit('push', convertedData);
		}

		const { repo, branch } = convertedData.push;

		res.locals.repo = repo;
		res.locals.branch = branch;

	} catch(err) { console.log('Log ::: Error ::: ', err) }

	next();
}
