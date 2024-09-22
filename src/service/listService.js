import { ObjectId } from "mongodb";
import { listCollection } from "../db/dbConnect.js";

async function adicionaItem(item) {
        try{
            await listCollection.insertOne(item)
            return{ success: true, message: "Item inserido!"}
        } catch (error) {
            return error
        }
        
    }

async function listaProdutos() {
    try {
        const result = await listCollection.find({}).toArray();
        return result
    } catch (error) {
        return error
    }
    
}

async function atualizaProduto(id, {...dto}) {
    try {
        await listCollection.updateOne(
            {_id: new ObjectId(id)},
            {$set: dto}
        );
        return await listCollection.findOne({ _id: new ObjectId(id) });
    } catch (error) {
        return error
    }
}

async function removeProduto(id) {
    try {
        await listCollection.deleteOne({_id: new ObjectId(id)})
        return "Item removido"
    } catch (error) {
        return error
    }
}

export {
    adicionaItem,
    listaProdutos,
    atualizaProduto,
    removeProduto
};