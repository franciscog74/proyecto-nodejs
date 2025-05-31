const express = require("express");
const path = require("path");

const db = require("../config/database");
const auth = require("../middleware/auth");

const consultar = express.Router();

consultar.get("/", (req, res, next) => {
    if (!Object.keys(req.query).length) {
        return res.sendFile("UI/consultar.html", { root: path.resolve(__dirname, "../") });
    }
    else {
        next();
    }
});

consultar.use(auth);

consultar.get("/", async (req, res, next) => {
    const { busqueda } = req.query;

    if (busqueda) {
        const sql = `SELECT * FROM empleados
        WHERE CONCAT(nombre, ' ', apellido_pat, ' ', apellido_mat) LIKE '%${busqueda}%'
        OR CONCAT(apellido_pat, ' ', apellido_mat, ' ', nombre) LIKE '%${busqueda}%';`;
        const rows = await db.query(sql);

        if (rows.length > 0) {
            return res.status(200).json({ code: 200, message: rows });
        }
        return res.status(200).json({ code: 404, message: "No hay coincidencias" });
    }
    return res.status(200).json({ code: 500, message: "Campos incompletos" });
});

module.exports = consultar;