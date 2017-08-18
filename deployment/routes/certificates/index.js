const path = require('path');

const { execFile } = require('child_process');

module.exports.post = ({ body: payload }, res) => {

	const spinner = require('ora')('Updating "Certificates" project ...');

	spinner.start();

	execFile(path.join(__dirname, 'certificates.sh'), (err, stdout) => {
		if (err) {
			console.error(err);
			spinner.fail('Couldn\'t update project "Certificates"');
		} else {
			console.log(stdout);
			spinner.succeed('Project "Certificates" is now up to date!');
		}
	});

	res.end();
}
