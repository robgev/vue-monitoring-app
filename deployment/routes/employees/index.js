const path = require('path');

const { execFile } = require('child_process');

module.exports.post = ({ body: payload }, res) => {
	const spinner = require('ora')('Updating "Employees" project ...');

	spinner.start();

	execFile(path.join(__dirname, 'employees.sh'), (err, stdout) => {
		if (err) {
			console.error(err);
			spinner.fail('Couldn\'t update project "Employees"');
		} else {
			console.log(stdout);
			spinner.succeed('Project "Employees" is now up to date!');
		}
	});

	res.end();
}
