const exclude = (exclude, middleware) => {

    return (req, res, next) => {

        if (req.path === exclude) {

            return next();
        }

        return middleware(req, res, next);
    }
}


module.exports = exclude;
