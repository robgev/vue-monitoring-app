module.exports = ({ body: payload }, res, next) => {

	console.log('Log ::: payload ::: ', payload);

	next();
}