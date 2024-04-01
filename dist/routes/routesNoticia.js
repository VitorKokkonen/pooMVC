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
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("../controller/controller"));
class NoticiasRouter {
    constructor() {
        this.router = express_1.default.Router();
        this.noticiasController = new controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.noticiasController.getNoticias(req, res);
            }
            catch (error) {
                console.error("Erro ao obter as notícias:", error);
                res.status(500).send("Erro interno do servidor");
            }
        }));
    }
}
exports.default = new NoticiasRouter().router;
