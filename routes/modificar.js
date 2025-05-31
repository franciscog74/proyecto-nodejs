const express = require("express");
const path = require("path");

const db = require("../config/database");
const auth = require("../middleware/auth");

const modificar = express.Router();

modificar.get("/", (req, res, next) => {
    return res.sendFile("UI/modificar.html", { root: path.resolve(__dirname, "../") });
});

modificar.use(auth);

modificar.put("/", async (req, res, next) => {
    const { id, nombre, apellido_pat, apellido_mat, telefono, email, direccion } = req.body;

    if (nombre && apellido_pat && apellido_mat && telefono && email && direccion) {
        const sql = `UPDATE empleados SET nombre = '${nombre}', apellido_pat = '${apellido_pat}',
        apellido_mat = '${apellido_mat}', telefono ='${telefono}', email = '${email}',
        direccion = '${direccion}' WHERE id = ${id};`;
        const rows = await db.query(sql);

        if (rows.affectedRows == 1) {
            return res.status(200).json({ code: 200, message: "Registro actualizado correctamente" });
        }
        return res.status(200).json({ code: 500, message: "Verifica el formato de los datos" });
    }
    return res.status(200).json({ code: 500, message: "Campos incompletos" });
});

module.exports = modificar;