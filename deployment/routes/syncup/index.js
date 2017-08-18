const path = require('path');

const { execFile } = require('child_process');

module.exports.post = ({ body: payload }, res) => {
	spinner.start();

	const { projectName, hash } = payload;

	if (!projectName || !hash) {
		throw new Error('Payload should contain project name and commit hash.');
	}

	const spinner = require('ora')(`Sync up "${projectName}" project ...`);

	execFile(path.join(__dirname, 'syncup.sh'), [projectName, hash], (err, stdout) => {
		if (err) {
			console.error(err);
			spinner.fail(`Couldn\'t sync up project "${projectName}"`);
		} else {
			console.log(stdout);
			spinner.succeed(`Project "${projectName}" is now up to date!`);
		}
	});

	res.end();
}
