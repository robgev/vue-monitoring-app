const converter = require('../libs/converter-bitbucket-payload.js');

module.exports = ({ body: payload, app, uuid }, res, next) => {

	try {
		const convertedData = converter.set(payload).getInfo(['push', 'commits']);

		convertedData.uuid = convertedData.push.hash;

		console.log('Log ::: Converted Data ::: ', convertedData);

		// send only when change in master branch

		if (convertedData.push.branch === 'master') {
			const { io } = app.settings;

			// broadcast
			io.sockets.emit('push', convertedData);
		}

	} catch(err) { console.log('Log ::: Error ::: ', err) }

	next();
}
