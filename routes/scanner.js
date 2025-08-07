import express from "express";
import { crearRegistro, aumentarContador } from "../controllers/scanner.js";

const router = express.Router();

router.post("/", crearRegistro);
router.get("/:id", aumentarContador);

export default router;
