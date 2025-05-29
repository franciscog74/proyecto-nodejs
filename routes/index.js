const path = require("path");
const express = require("express");
const index = express.Router();

index.get("", (req, res, next) => {
    return res.sendFile("UI/inicio.html", { root: path.resolve(__dirname, "../") });
});

index.post("", (req, res, next) => {});

module.exports = index;