import express from "express";
import { getAllQuadrinhos, getQuadrinhosByEditora, getQuadrinhosById } from "../controllers/quadrinhosController.js";

const router = express.Router();

router.get("/", getAllQuadrinhos);
router.get("/:id", getQuadrinhosById);
router.get("/editora/:editora", getQuadrinhosByEditora);

export default router;