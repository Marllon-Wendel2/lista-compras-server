import express from "express";
import listaRouter from "./src/routes/listRouter.js";
import "dotenv/config"
import "./src/db/dbConnect.js"
import cors from "cors"

const app = express();
const corsOptions = {
    origin: '*', // Substitua pelo domínio permitido
    methods: 'GET,POST,PUT,DELETE',
    optionsSuccessStatus: 204
  };

app.use(cors())
app.use(express.json());

app.use("/lista", listaRouter);

const port = 8000;

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})