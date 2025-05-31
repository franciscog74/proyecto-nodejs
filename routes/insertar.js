const express = require("express");
const path = require("path");

const db = require("../config/database");

const insertar = express.Router();

insertar.post("/", async (req, res, next) => {
    const { nombre, apellido_pat, apellido_mat, telefono, email, direccion } = req.body;

    if (nombre && apellido_pat && apellido_mat && telefono && email && direccion) {
        const sql = `INSERT INTO empleados (nombre, apellido_pat, apellido_mat, telefono,
        email, direccion) VALUES ('${nombre}', '${apellido_pat}', '${apellido_mat}',
        '${telefono}', '${email}', '${direccion}');`;
        const rows = await db.query(sql);

        if (rows.affectedRows == 1) {
            return res.status(201).json({ code: 201, message: "Registro insertado correctamente" });
        }
        return res.status(200).json({ code: 500, message: "Verifica el formato de los datos" });
    }
    return res.status(200).json({ code: 500, message: "Campos incompletos" });
});

insertar.get("/", (req, res, next) => {
    return res.sendFile("UI/insertar.html", { root: path.resolve(__dirname, "../") });
});

module.exports = insertar;