const path = require('path');

const { execFile } = require('child_process');

module.exports.post = ({ body: payload }, res) => {

	const { projectName, hash } = payload;

	if (!projectName || !hash) {
		throw new Error('Payload should contain project name and commit hash.');
	}

	execFile(path.join(__dirname, 'syncup.sh'), [projectName, hash] (err, stdout) => {
		if (err) {
			console.error(err);
		} else {
			console.log(stdout);
		}
	});

	res.end();
}
