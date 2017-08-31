const db = require('../../../lowDb/');

const path = require('path');

const { execFile } = require('child_process');

const apolloProjects = [
    'maintenance',
    'blog',
    'crewing',
    'miscellaneous',
    'disturbance',
    'inspections',
    'certificates',
    'circulars',
    'towage',
    'employees'
];

const getProjects = params => {

	const company = params.company;

	const companies = db.get('companies').value();

	const projects = companies[company].projects;

	return projects;
}

module.exports.get = (req, res) => {

	const projects = getProjects(req.params);

	const project = req.params.project;

	res.json(projects[project]);
}

module.exports.getAll = (req, res) => {
	const projects = getProjects(req.params);

	res.json(projects);
}

module.exports.proxyTargets = (req, res) => {
	const projects = getProjects(req.params);

	const targets = Object.keys(projects).reduce((targets, project) => {
		const current = projects[project];

		return Object.assign({}, targets, { [current.port]: current['proxy-target'] });
	}, {});

	res.json(targets);
}

module.exports.projectsState = (req, res) => {
	execFile(path.join(__dirname, 'projectsState.sh'), (err, stdout) => {
		if (err) {
			console.error(err);
			res.json({msg: 'error'});
		} else {
			const hashes = stdout.split('\n');
			const states = apolloProjects.reduce((projectsState, project, i) => {
				projectsState[project] = hashes[i];
				return projectsState;
			}, {});
			res.json({msg: states});
		}
	});
}
