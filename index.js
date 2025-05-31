const express = require("express");
const morgan = require("morgan");
const app = express();

// Archivos locales
const cors = require("./middleware/cors");
const auth = require("./middleware/auth");
const notFound = require("./middleware/notFound");
const index = require("./routes/index");
const login = require("./routes/login");
const insertar = require("./routes/insertar");
const consultar = require("./routes/consultar");

// CORS
app.use(cors);

// Morgan y Express
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/js", express.static("UI/js"));
app.use("/css", express.static("UI/css"));

app.use("/login", login);

app.post("*splat", auth);

app.use("/", index);

app.use("/insertar", insertar);

app.use("/consultar", consultar);

app.use(notFound);

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor en ejecución...");
});