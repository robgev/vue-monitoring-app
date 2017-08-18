const path = require('path');

const { execFile } = require('child_process');

module.exports.post = ({ body: payload }, res) => {
	const spinner = require('ora')('Updating "Circulars" project ...');

	spinner.start();

	execFile(path.join(__dirname, 'circulars.sh'), (err, stdout) => {
		if (err) {
			console.error(err);
			spinner.fail('Couldn\'t update project "Circulars"');
		} else {
			console.log(stdout);
			spinner.succeed('Project "Circulars" is now up to date!');
		}
	});

	res.end();
}
