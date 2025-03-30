const jwt = require('jsonwebtoken');

const authMiddleware = (req,res,next) => {
    const token = req.header("Authorization");

    if(!token) return res.status(401).json({ error: "Access denied. No token provided" });

    try {
        const tokenWithoutBearer = token.replace("Bearer ", "");
        const decoded = jwt.verify(tokenWithoutBearer, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(400).status({ error: "Invalid token" }); 
    }
};

module.exports = authMiddleware;