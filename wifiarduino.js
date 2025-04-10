const express = require("express");
const app = express();

app.use(express.json());

app.post("/sensor-data", (req, res) => {
    console.log("Datos recibidos:", req.body);
    res.send("Datos recibidos correctamente.");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor ejecutándose en el puerto ${port}`);
});
