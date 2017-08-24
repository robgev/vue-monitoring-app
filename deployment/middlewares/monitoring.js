const db = require('../lowDb/');
const converter = require('../libs/converter-bitbucket-payload.js');

module.exports = (req, res, next) => {


	const { body: payload, app, uuid } = req;

	try {
		const convertedData = converter.set(payload).getInfo(['push', 'commits']);

		convertedData.uuid = convertedData.push.hash;

		const { repo, branch } = convertedData.push;

		// send only when change in master branch

		if (branch === 'master') {

			const changes = db
				.get('companies')
				.get(req.params.company)
				.get('projects')
				.get(repo)
				.get('changes');

			const changesValue = changes.value();

			let changed = changes.push(convertedData);

			if (changesValue.length === 20) {
				changed = changed.shift();
			}
				
			changed.write();

			const { io } = app.settings;

			// broadcast
			io.sockets.emit('push', convertedData);
		}


		res.locals.repo = repo;
		res.locals.branch = branch;

	} catch(err) { console.log('Log ::: Error ::: ', err) }

	next();
}
