const path = require('path');

const { execFile } = require('child_process');

module.exports.post = ({ body: payload }, res) => {
	const spinner = require('ora')('Updating "Core" ...');

	spinner.start();

	execFile(path.join(__dirname, 'core.sh'), (err, stdout) => {
		if (err) {
			console.error(err);
			spinner.fail('Couldn\'t update "Core"');
		} else {
			console.log(stdout);
			spinner.succeed('"Core" is now up to date!');
		}
	});

	res.end();
}
