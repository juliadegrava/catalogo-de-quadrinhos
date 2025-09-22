import express from "express";
import dotenv from "dotenv";
import quadrinhosRoutes from "./src/routes/quadrinhosRoutes.js"

const app = express();
app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.json({ message: "Catálogo de quadrinhos funcionando!" });
});

app.use("/quadrinhos", quadrinhosRoutes);

app.listen(serverPort, () => {
    console.log(` Servidor rodando em http://localhost:${serverPort} `);
});