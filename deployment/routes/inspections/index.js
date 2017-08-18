const path = require('path');

const { execFile } = require('child_process');

module.exports.post = ({ body: payload }, res) => {
	const spinner = require('ora')('Updating "Inspections" project ...');

	spinner.start();

	execFile(path.join(__dirname, 'inspections.sh'), (err, stdout) => {
		if (err) {
			console.error(err);
			spinner.fail('Couldn\'t update project "Inspections"');
		} else {
			console.log(stdout);
			spinner.succeed('Project "Inspections" is now up to date!');
		}
	});

	res.end();
}
