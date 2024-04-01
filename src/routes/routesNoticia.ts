import express, { Request, Response } from "express";
import NoticiasController from "../controller/controller";

const router = express.Router();
const noticiasController = new NoticiasController();

router.get("/", async (req: Request, res: Response) => {
    try {
        await noticiasController.getNoticias(req, res);
    } catch (error) {
        console.error("Erro ao obter as notícias:", error);
        res.status(500).send("Erro interno do servidor");
    }
});

export default router;