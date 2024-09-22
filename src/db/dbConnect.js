import { MongoClient } from "mongodb";
import "dotenv/config.js"

const url =  process.env.STRING_CONNECT;
const client = new MongoClient(url);

let listCollection;

try {
    await client.connect();
    const db = client.db("compras");
    listCollection = db.collection("lista");

    console.log("Banco de dados conectado com sucesso!")
} catch (error) {
    console.error(error)
}

export {
    listCollection
}