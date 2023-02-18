import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const conexao = process.env.STRINGDECONEXAO;

mongoose.connect(conexao); //string de conexão

let db = mongoose.connection;

export default db;