const db = require('../../../lowDb/');

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
