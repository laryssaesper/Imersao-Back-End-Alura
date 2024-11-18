import express from "express";
//importa o express

const app = express();
//coloca a função express dentro da variável app

app.listen(3000, () => {
    console.log("Servidor Escutando...");
});
//app irá ouvir solicitações da porta 3000 (servidor local), que mostrará no console a frase

//criando rota
app.get("/api", (req, res) => {
    res.status(200).send("Boas Vindas à Imersão!");
});