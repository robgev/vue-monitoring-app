const path = require('path');

const { execFile } = require('child_process');

module.exports.post = ({ body: payload }, res) => {
	const spinner = require('ora')('Updating "Maintenance" project ...');

	spinner.start();

	execFile(path.join(__dirname, 'maintenance.sh'), (err, stdout) => {
		if (err) {
			console.error(err);
			spinner.fail('Couldn\'t update project "Maintenance"');
		} else {
			console.log(stdout);
			spinner.succeed('Project "Maintenance" is now up to date!');
		}
	});

	res.end();
}
