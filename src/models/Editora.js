import mongoose from "mongoose";

const editoraSchema = new mongoose.Schema(
    {
        id: { type: String },
        nome: { type: String, required: true },
        cidade: { type: String}
    },
    {
        versionKey: false
    }
);

let editoras= mongoose.model("editoras", editoraSchema); 

export default editoras;