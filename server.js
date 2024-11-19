import express from "express";

const posts = [
    {
      id: 1,
      descricao: 'Um gatinho fofo', 
      imagem: 'https://placecats.com/400/300'
    },
    {
      id: 2,
      descricao: 'Gatinho explorando uma caixa',
      imagem: 'https://placecats.com/300/200'
    },
    {
      id: 3,
      descricao: 'Olhos de gato brilhando no escuro',
      imagem: 'https://placecats.com/400/300'
    },
    {
      id: 4,
      descricao: 'Gatinho ronronando no colo',
      imagem: 'https://placecats.com/300/200'
    },
    {
      id: 5,
      descricao: 'Gatinho brincando com um novelo de lã',
      imagem: 'https://placecats.com/400/300'
    }
  ];

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor Escutando...");
});

// app.get("/api", (req, res) => {
//     res.status(200).send("Boas Vindas à Imersão!");
// });

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPost (id){
    return posts.findIndex((post)=>{
        return post.id === Number(id)
    })
};

app.get("/posts/:id", (req, res) => {
    const index = buscarPost(req.params.id);
    res.status(200).json(posts[index]);
});