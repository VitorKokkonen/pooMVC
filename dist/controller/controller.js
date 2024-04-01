"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class NoticiasController {
    getNoticias(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const noticiasRaw = yield fs_1.default.promises.readFile(path_1.default.join(__dirname, "../../src/data/noticias.json"), "utf8");
                console.log(noticiasRaw);
                const noticiasObj = JSON.parse(noticiasRaw);
                const noticias = noticiasObj.noticias;
                if (Array.isArray(noticias)) {
                    res.render("noticias", { noticias });
                }
                else {
                    console.error("Os dados de notícias não são um array:", noticias);
                    res.status(500).send("Erro interno do servidor");
                }
            }
            catch (error) {
                console.error("Erro ao obter as notícias:", error);
                res.status(500).send("Erro interno do servidor");
            }
        });
    }
}
exports.default = NoticiasController;
