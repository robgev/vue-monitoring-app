const path = require('path');

const { execFile } = require('child_process');

module.exports.post = ({ body: payload }, res) => {
	const spinner = require('ora')('Updating "Crewing" project ...');

	spinner.start();

	execFile(path.join(__dirname, 'crewing.sh'), (err, stdout) => {
		if (err) {
			console.error(err);
			spinner.fail('Couldn\'t update project "Crewing"');
		} else {
			console.log(stdout);
			spinner.succeed('Project "Crewing" is now up to date!');
		}
	});

	res.end();
}
