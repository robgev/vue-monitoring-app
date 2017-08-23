module.exports = function(app) {
  // home
  app.get('/', require('./home').get);

  // blog
  // maintenance
  // crewing
  // miscellaneous
  // disturbance
  // inspections
  // certificates
  // circulars
  // towage
  // employees
  // core
  
  app.post('/api/projects/:project', require('./projects/update/').post);

  app.post('/api/projects/:project/syncup', require('./syncup/').post);

}
