import fs from "fs";
import gerarDescricaoComGemini from "../services/geminiServices.js";
import { atualizarPost, criarPost, getPosts } from "../models/postsModel.js";

export async function listarPosts(req, res){
    const posts = await getPosts();
    res.status(200).json(posts);
}

export async function postarNovoPost(req, res) {
    //req.body requisição e corpo (conteúdo da requisição)
    const novoPost = req.body;
    //tratamento de excessões com try
    try{
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);
    }catch(erro){
        //monstra no console o número do erro
        console.error(erro.message);
        res.status(500).json({"Erro":"Requisição não processada"});
    }
}

export async function uploadImagem(req, res) {
    //req.body requisição e corpo (conteúdo da requisição)
    const novoPost = {
        descricao:"",
        imgUrl: req.file.originalname,
        alt: ""
    };

    //tratamento de excessões com try
    try{
        const postCriado = await criarPost(novoPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
        fs.renameSync(req.file.path, imagemAtualizada);
        res.status(200).json(postCriado);
    }catch(erro){
        //monstra no console o número do erro
        console.error(erro.message);
        res.status(500).json({"Erro":"Requisição não processada"});
    }
}

export async function atualizaNovoPost(req, res) {
    const id = req.params.id;
    const urlImagem = `http://localhost:3000/${id}.png`;
    
    //tratamento de excessões com try
    try{
        const imageBuffer = fs.readFileSync(`uploads/${id}.png`);
        const descricao = await gerarDescricaoComGemini(imageBuffer);
        const postAtualizado = {
            imgUrl: urlImagem,
            descricao: descricao,
            alt: req.body.alt
        }
        const postCriado = await atualizarPost(id, postAtualizado);
        res.status(200).json(postCriado);
    }catch(erro){
        //monstra no console o número do erro
        console.error(erro.message);
        res.status(500).json({"Erro":"Requisição não processada"});
    }
}