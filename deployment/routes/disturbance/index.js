const path = require('path');

const { execFile } = require('child_process');

module.exports.post = ({ body: payload }, res) => {
	const spinner = require('ora')('Update "Disturbance" project ...');

	spinner.start();

	execFile(path.join(__dirname, 'disturbance.sh'), (err, stdout) => {
		if (err) {
			console.error(err);
			spinner.fail('Couldn\'t update project "Disturbance"');
		} else {
			console.log(stdout);
			spinner.succeed('Project "Disturbance" is now up to date!');
		}
	});

	res.end();
}
