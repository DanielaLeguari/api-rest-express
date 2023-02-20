import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    {
        id: { type: String },
        titulo: { type: String, required: true },
        autor: { type: String, required: true },
        editora: { type: String, required: true },
        numeroPaginas: { type: Number }
    }
);

let livros= mongoose.model('livros', livroSchema); //define o nome do banco que será criado

export default livros;