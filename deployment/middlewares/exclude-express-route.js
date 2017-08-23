const exclude = (exclude, middleware) => {

    return (req, res, next) => {

        if (req.path.includes(exclude)) {

            return next();
        }

        return middleware(req, res, next);
    }
}

module.exports = exclude;
