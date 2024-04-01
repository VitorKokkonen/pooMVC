import express, { Request, Response, Router } from "express";
import NoticiasController from "../controller/controller";

class NoticiasRouter {
    public router: Router;
    private noticiasController: NoticiasController;

    constructor() {
        this.router = express.Router();
        this.noticiasController = new NoticiasController();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get("/", async (req: Request, res: Response) => {
            try {
                await this.noticiasController.getNoticias(req, res);
            } catch (error) {
                console.error("Erro ao obter as notícias:", error);
                res.status(500).send("Erro interno do servidor");
            }
        });
    }
}

export default new NoticiasRouter().router;
