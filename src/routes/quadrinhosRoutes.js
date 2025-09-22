import express from "express";
import { getAllQuadrinhos, getQuadrinhosById, getQuadrinhosByEditora, getQuadrinhosByHeroi, getQuadrinhosBySaga, getQuadrinhosByAnoPublicacao, createQuadrinho, updateQuadrinho, deleteQuadrinho } from "../controllers/quadrinhosController.js";

const router = express.Router();

router.get("/", getAllQuadrinhos);
router.get("/:id", getQuadrinhosById);
router.get("/editora/:editora", getQuadrinhosByEditora);
router.get("/heroi/:heroi", getQuadrinhosByHeroi);
router.get("/saga/:saga", getQuadrinhosBySaga);
router.get("/anoPublicacao/:anoPublicacao", getQuadrinhosByAnoPublicacao);
router.post("/", createQuadrinho);
router.put("/:id", updateQuadrinho);
router.delete("/:id", deleteQuadrinho);

export default router;