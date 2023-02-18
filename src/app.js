import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/livro.js";

db.on("erro", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
    console.log("conexão com o banco realizada com sucesso.");
})

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    res.json(livros[index]);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso");
});

app.put("/livros/:id", (req, res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
});

app.delete('/livros/:id', (req, res) => {
    let { id } = req.params; //{id} atribuição via desestruturação
    let index = buscaLivro(id);
    livros.splice(index, 1);
    res.send(`Livro ${id} removido com sucesso`);
});

const buscaLivro = (id) => {
    return livros.findIndex(livro => livro.id == id);
}

export default app;

