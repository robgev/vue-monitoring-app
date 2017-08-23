const path = require('path');

const { execFile } = require('child_process');

module.exports.post = ({ body: payload, params: { project: projectName } }, res) => {

	const { branch, repo } = res.locals;

	if ((repo === 'core-react' && branch === 'master') || (repo !== 'core-react' && branch === 'qa_env')) {
		const spinner = require('ora')(`Updating "${projectName}" project ...`);

		spinner.start();

		execFile(path.join(__dirname, 'update.sh'), [projectName], (err, stdout) => {
			if (err) {
				console.error(err);
				spinner.fail(`Couldn\'t update project "${projectName}"`);
			} else {
				console.log(stdout);
				spinner.succeed(`Project "${projectName}" is now up to date!`);
			}
		});
	}

	res.end();
}
