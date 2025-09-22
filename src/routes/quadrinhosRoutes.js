import express from "express";
import { getAllQuadrinhos, getQuadrinhosById } from "../controllers/quadrinhosController.js";

const router = express.Router();

router.get("/", getAllQuadrinhos);
router.get("/:id", getQuadrinhosById);

export default router;