module.exports = (req, res, next) => {
    return res.status(200).json({ code: 404, message: "Página no encontrada" });
};