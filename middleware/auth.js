const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const token = req.body.headers.Authorization.split(" ")[1];
        const { username } = jwt.verify(token, "debugkey");
        req.user = username;
        next();
    } catch (error) {
        return res.status(200).json({ code: 401, message: "No tienes permiso" });
    }
};