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
  
  app.post('/api/:company/projects/:project', require('./projects/update/').post);

  app.post('/api/:company/projects/:project/syncup', require('./syncup/').post);

  app.get('/api/:company/projects/:project', require('./projects/get/').get);

  app.get('/api/:company/projects', require('./projects/get/').getAll);

  app.get('/api/:company/proxy-targets', require('./projects/get/').proxyTargets);

}
