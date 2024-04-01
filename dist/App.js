"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const routesNoticia_1 = __importDefault(require("./routes/routesNoticia"));
const app = (0, express_1.default)();
app.set("view engine", "ejs");
app.set("views", path_1.default.join(__dirname, "../src/view"));
app.use("/noticias", routesNoticia_1.default);
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
