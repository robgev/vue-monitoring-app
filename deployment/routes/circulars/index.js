const path = require('path');

const { execFile } = require('child_process');

module.exports.post = ({ body: payload }, res) => {

	execFile(path.join(__dirname, 'circulars.sh'), (err, stdout) => {
		if (err) {
			console.error(err);
		} else {
			console.log(stdout);
		}
	});

	res.end();
}
