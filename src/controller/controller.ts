import { Request, Response } from "express";
import fs from "fs";
import path from "path";

import Noticia from "../model/model";

class NoticiasController {
    public async getNoticias(req: Request, res: Response) {
        try {
            const noticiasRaw = await fs.promises.readFile(path.join(__dirname, "../../src/data/noticias.json"), "utf8");
            console.log(noticiasRaw); 
            const noticias: Noticia[] = JSON.parse(noticiasRaw);
            res.render("noticias", { noticias });
        } catch (error) {
            console.error("Erro ao obter as notícias:", error);
            res.status(500).send("Erro interno do servidor");
        }
    }
}

export default NoticiasController;
