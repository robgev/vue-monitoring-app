module.exports = function(app) {
	// home
	app.get(	'/',							require('./home'			).get);

	// blog
	app.post(	'/api/projects/blog', 			require('./blog/'			).post);

	// maintenance
	app.post(	'/api/projects/maintenance', 	require('./maintenance/'	).post);

	// crewing
	app.post(	'/api/projects/crewing', 		require('./crewing/'		).post);

	// miscellaneous
	app.post(	'/api/projects/miscellaneous',	require('./miscellaneous/'	).post);

	// disturbance
	app.post(	'/api/projects/disturbance', 	require('./disturbance/'	).post);

	// inspections
	app.post(	'/api/projects/inspections', 	require('./inspections/'	).post);

	// certificates
	app.post(	'/api/projects/certificates', 	require('./certificates/'	).post);

	// circulars
	app.post(	'/api/projects/circulars', 		require('./circulars/'		).post);

	// towage
	app.post(	'/api/projects/towage', 		require('./towage/'			).post);

	// core
	app.post(	'/api/projects/core', 			require('./core/'			).post);

	// employees
	app.post(	'/api/projects/employees', 		require('./employees/'		).post);

	// for all projects - sync-up
	app.post(	'/api/projects/syncup', 		require('./syncup/'			).post);

}
