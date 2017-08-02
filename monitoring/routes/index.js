module.exports = function(app) {
	// home
 	app.get('/', require('./home').get);

 	// blog
	app.post('/blog', require('./blog/').post);

	// maintenance
	app.post('/maintenance', require('./maintenance/').post);

	// crewing
	app.post('/crewing', require('./crewing/').post);
 
 	// miscellaneous
	app.post('/miscellaneous', require('./miscellaneous/').post);
 
 	// disturbance
	app.post('/disturbance', require('./disturbance/').post);
 
 	// inspections
	app.post('/inspections', require('./inspections/').post);
 
 	// certificates
	app.post('/certificates', require('./certificates/').post);

	// circulars
	app.post('/circulars', require('./circulars/').post);

	// towage
	app.post('/towage', require('./towage/').post);

}