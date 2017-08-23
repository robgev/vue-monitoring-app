const path = require('path');

const { execFile } = require('child_process');

module.exports.post = ({ body: payload, params: { project: projectName } }, res) => {

	const { hash } = payload;

	const spinner = require('ora')(`Sync up "${projectName}" project ...`);

	spinner.start();

	const result = {msg: ''};

	let flags = [projectName];

	if (hash) {
		flags.push(hash);
	}

	execFile(path.join(__dirname, 'syncup.sh'), flags, (err, stdout) => {
		if (err) {
			console.error(err);
			spinner.fail(`Couldn\'t sync up project "${projectName}"`);
			result.msg = 'success';
		} else {
			console.log(stdout);
			spinner.succeed(`Project "${projectName}" is now up to date!`);
			result.msg = 'error';
		}
	});

	res.send(result);
}
