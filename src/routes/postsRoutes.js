import express from "express";
import multer from "multer";
import cors from "cors";
import { atualizaNovoPost, listarPosts, postarNovoPost, uploadImagem } from "../controller/postsController.js";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}

// código de configuração do windows
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})

const routes = (app)=> {
    //coloca requisições em json
    app.use(express.json());
    //opções do cors
    app.use(cors(corsOptions));
    //métodos para verbos http
    app.get("/posts", listarPosts);
    app.post("/posts", postarNovoPost);
    app.post("/upload",upload.single("imagem"), uploadImagem);
    app.put("/upload/:id", atualizaNovoPost)
};

export default routes;