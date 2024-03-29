const jwtDecode = require("jwt-decode");
const jwt = require("jsonwebtoken");
const rateLimit = require('express-rate-limit');
const keys = require('../../../config/keys');
const redis = require('redis').createClient(keys.redisUrl);

const attachUser = (req, res, next) => {
    if(!req.originalUrl.includes("/api/")) {
        return next()
    }

    const token = req.cookies.token;

    if(!token) {
        return res.status(401).json({message: 'Authentication invalid'});
    }

    const decodedToken = jwtDecode(token);

    if(!decodedToken) {
        return res.status(401).json({message: 'There was a problem with authorizing'});
    } else {
        req.user = decodedToken;
        next();
    }
};

const checkJwt = (req, res, next) => {
    if(!req.originalUrl.includes("/api/")) {
        return next()
    }

    const token = req.cookies.token;

    if(!token) {
        return res.status(403).json({message: 'Access denied'});
    }

    try {
        const decoded = jwt.verify(token, keys.JWT_SECRET);
        next();
    } catch(err) {
        return res.status(403).json({message: 'Access denied'});
    }
};

const limiter = new rateLimit({
    windowMs: 15 * 60 * 1000, // set window to 15 minutes
    max: 100,
    delayMs: 0 // don't require a delay disabled
});

const exceptionErrorHandler = (err, req, res, next) => {
    res.status(500).send({message: "Exception occured"});
};

module.exports = { attachUser, checkJwt, limiter, exceptionErrorHandler, redis };