const path = require('path');

const { execFile } = require('child_process');

module.exports.post = ({ body: payload }, res) => {
	const spinner = require('ora')('Updating "Miscellaneous" project ...');

	spinner.start();

	execFile(path.join(__dirname, 'miscellaneous.sh'), (err, stdout) => {
		if (err) {
			console.error(err);
			spinner.fail('Couldn\'t update project "Miscellaneous"');
		} else {
			console.log(stdout);
			spinner.succeed('Project "Miscellaneous" is now up to date!');
		}
	});

	res.end();
}
