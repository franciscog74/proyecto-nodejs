const express = require("express");
const path = require("path");

const db = require("../config/database");
const auth = require("../middleware/auth");

const borrar = express.Router();

borrar.get("/", (req, res, next) => {
    return res.sendFile("UI/borrar.html", { root: path.resolve(__dirname, "../") });
});

borrar.use(auth);

borrar.delete("/:id", async (req, res, next) => {
    const id = Number(req.params.id);

    if (id) {
        const sql = `DELETE FROM empleados WHERE id = ${id};`;
        const rows = await db.query(sql);

        if (rows.affectedRows) {
            return res.status(200).json({ code: 200, message: "Registro eliminado con éxito" });
        }
        return res.status(200).json({ code: 404, message: "Registro no encontrado" });
    }
    return res.status(200).json({ code: 500, message: "Campos incompletos" });
});

module.exports = borrar;