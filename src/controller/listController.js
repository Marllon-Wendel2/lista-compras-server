import { adicionaItem, atualizaProduto, listaProdutos, removeProduto} from "../service/listService.js";

async function postItem(req, res) {
        try {
            const newItem =  req.body;
            const result =  await adicionaItem(newItem);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: "Erro ao adicionar item", details: error.message });
        }
    }

async function getProdutos(req, res) {
    try {
        const result = await listaProdutos();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: "Erro ao consultar lista", details: error.message });
    }
}

async function putProduto(req, res) {
    const id = req.params.id;
    
    try {
        const dto =  req.body
        const result = await atualizaProduto(id, dto);
        if(result) {
            res.status(200).json(result);
        } else {
            throw new Error('Produto não encontrado ou não atualizado');
        }
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar lista", details: error.message });
    }
}

async function deleteProduto(req, res) {
    const id = req.params.id;

    try {
        const result = await removeProduto(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar lista", details: error.message });
    }
    }

export {
    postItem,
    getProdutos,
    putProduto,
    deleteProduto
};