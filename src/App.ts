import express from "express";
import path from "path";
import routes from "./routes/routes";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../src/view"));

app.use("/noticias", routes);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
