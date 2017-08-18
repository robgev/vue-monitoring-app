const path = require('path');

const { execFile } = require('child_process');

module.exports.post = ({ body: payload }, res) => {

	const spinner = require('ora')('Updating "Blog" project ...');

	spinner.start();

	execFile(path.join(__dirname, 'blog.sh'), (err, stdout) => {
		if (err) {
			console.error(err);
			spinner.fail('Couldn\'t update project "Blog"');
		} else {
			console.log(stdout);
			spinner.succeed('Project "Blog" is now up to date!');
		}

	});

	res.end();
}
