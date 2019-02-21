const jwtDecode = require("jwt-decode");

const attachUser = (req, res, next) => {
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
    const token = req.cookies.token;
    if(!token) {
        return res.status(403).json({message: 'Access denied'});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        next();
    } catch(err) {
        return res.status(403).json({message: 'Access denied'});
    }
};


module.exports = { attachUser, checkJwt };