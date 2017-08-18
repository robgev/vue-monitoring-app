const path = require('path');

const { execFile } = require('child_process');

module.exports.post = ({ body: payload }, res) => {

	const spinner = require('ora')('Updating "Towage" project ...');

	spinner.start();

	execFile(path.join(__dirname, 'towage.sh'), (err, stdout) => {
		if (err) {
			console.error(err);
			spinner.fail('Couldn\'t update project "Towage"');
		} else {
			console.log(stdout);
			spinner.succeed('Project "Towage" is now up to date!');
		}
	});

	res.end();
}
