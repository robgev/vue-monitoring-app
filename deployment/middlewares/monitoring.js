const converter = require('../libs/converter-bitbucket-payload.js');

module.exports = ({ body: payload, app, uuid }, res, next) => {

	try {
		const convertedData = converter.set(payload).getInfo(['push', 'commits']);

		convertedData.uuid = uuid;

		console.log('Log ::: Converted Data ::: ', convertedData);

		const { io } = app.settings;

		// broadcast
		io.sockets.emit('push', convertedData);
	} catch(err) { console.log('Log ::: Error ::: ', err) }

	next();
}
