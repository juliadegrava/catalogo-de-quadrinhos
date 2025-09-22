import express from "express";
import { getAllQuadrinhos, getQuadrinhosById, getQuadrinhosByEditora, getQuadrinhosByHeroi, getQuadrinhosBySaga, getQuadrinhosByAnoPublicacao } from "../controllers/quadrinhosController.js";

const router = express.Router();

router.get("/", getAllQuadrinhos);
router.get("/:id", getQuadrinhosById);
router.get("/editora/:editora", getQuadrinhosByEditora);
router.get("/heroi/:heroi", getQuadrinhosByHeroi);
router.get("/saga/:saga", getQuadrinhosBySaga);
router.get("/anoPublicacao/:anoPublicacao", getQuadrinhosByAnoPublicacao);

export default router;