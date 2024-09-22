import express from "express";
import listaRouter from "./routes/listRouter.js";
import "dotenv/config"
import "./db/dbConnect.js"
import cors from "cors"

const app = express();

app.use(cors())
app.use(express.json());

app.use("/lista", listaRouter);

const port = 8000;

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})