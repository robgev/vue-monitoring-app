module.exports = function(app) {

  app.get('/', require('./home').get);

}