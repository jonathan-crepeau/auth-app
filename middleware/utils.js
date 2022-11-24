const logger = (req, res, next) => {
    const url = req.url;
    const method = req.method;
    const requestedAt = new Date().toLocaleString();
    const result = `${method} ${url} ${requestedAt}`;
    console.log(result);
    next();
};

module.exports = logger;