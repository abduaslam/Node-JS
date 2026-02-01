// auth.middleware.js
module.exports = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token || token !== process.env.SECRET_KEY) {
        return res.status(401).json({ error: 'Unauthorized: Invalid or missing token' });
    }

    next();
};