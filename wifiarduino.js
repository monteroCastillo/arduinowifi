const express = require("express");
const app = express();

app.use(express.json());

app.post("/sensor-data", (req, res) => {
    console.log("Datos recibidos:", req.body);
    res.send("Datos recibidos correctamente.");
});

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
