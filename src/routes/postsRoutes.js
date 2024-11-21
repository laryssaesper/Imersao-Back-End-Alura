import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem } from "../controller/postsController.js";

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
    //métodos para verbos http
    app.get("/posts", listarPosts);
    app.post("/posts", postarNovoPost);
    app.post("/upload",upload.single("imagem"), uploadImagem);
};

export default routes;