const express = require("express");
const morgan = require("morgan");
const app = express();

// Archivos locales
const cors = require("./middleware/cors");
const index = require("./middleware/index");
const auth = require("./middleware/auth");
const notFound = require("./middleware/notFound");
const login = require("./routes/login");

// CORS
app.use(cors);

// Morgan y Express
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", index);

app.use("/login", login);

app.use(auth);

// app.use("/inicio", inicio);

app.use(notFound);

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor en ejecución...");
});