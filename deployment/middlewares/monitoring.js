const BitbucketPayload = require('bitbucket-payload');

const repositoryEvent = 'push';

module.exports = ({ body: payload }, res, next) => {

	let bitbucketPayload;

	try {
		bitbucketPayload = new BitbucketPayload(payload, repositoryEvent);		
	} catch(err) { /* ... */ }

	const payloadObject = bitbucketPayload.getPurged();
	const messages = [];

	for (const commit of payloadObject.commits) {
		messages.push(commit.message);
	}

	console.log('Log ::: payloadObject ::: ', payloadObject);
	console.log('Log ::: messages ::: ', messages); 

	next();
}