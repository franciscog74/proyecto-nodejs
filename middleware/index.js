const path = require("path");

module.exports = (req, res, next) => {
    return res.sendFile("UI/inicio.html", { root: path.resolve(__dirname, "../") });
};