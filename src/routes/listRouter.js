import { Router } from "express";
import {deleteProduto, getProdutos, postItem, putProduto} from "../controller/listController.js";

const router = Router();

router.post("/", postItem);
router.get("/", getProdutos);
router.put("/:id", putProduto);
router.delete("/:id", deleteProduto) 

export default router;