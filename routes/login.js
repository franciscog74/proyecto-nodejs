const express = require("express");
const jwt = require("jsonwebtoken");
const path = require("path");

const db = require("../config/database");
const sqlFormat = require("../helpers/sqlFormat");

const login = express.Router();

login.post("/", async (req, res, next) => {
    const { username, password } = sqlFormat(req.body);

    if (username && password) {
        const sql = `SELECT * FROM usuarios WHERE username = '${username}'
        AND password = '${password}';`;
        const rows = await db.query(sql);

        if (rows.length == 1) {
            const token = jwt.sign({
                username: rows[0].username
            }, "debugkey");
            return res.status(200).json({ code: 200, message: token });
        }
        return res.status(200).json({ code: 401, message: "Usuario y/o contraseña incorrectos" });
    }
    return res.status(200).json({ code: 500, message: "Campos incompletos" });
});

login.get("/", (req, res, next) => {
    return res.sendFile("UI/login.html", { root: path.resolve(__dirname, "../") });
});

module.exports = login;