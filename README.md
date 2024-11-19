# Anotações sobre Imersão Dev Back-End Alura

### Conceitos Básicos
#### Arrow Functions
São funções escritas de uma forma mais concisa em JavaScript

Sintaxe:
> (parâmetros) => { corpo da função }

Exemplo:

> const soma = (a, b) => {
    return a + b;
};

Função tradicional:

>function somaTradicional(a, b) {
    return a + b;
}

#### let e const = variáveis

> let: Use let quando precisar de uma variável que **pode mudar de valor** ao longo do tempo, mas cujo escopo seja limitado.

> const: Use const quando o valor de uma variável **não deve mudar**, como constantes matemáticas, configurações ou elementos que não precisam ser reatribuídos.

***

### Aula 1 - 20241118

Foi criada uma pasta específica para o back-end do projeto. Os programas utilizados foram o Visual Studio Code para a manipulação do código e terminal, assim como o Node.js para os recursos JavaScript.

**npm** (Node Package Manager) 
* É um gerenciador de pacotes JavaScript que é instalado junto com o Node.Js.

**npm init es6 -y**
* Foi o comando utilizado para a criação do arquivo **package.json**, que contém as informações de nome, versão e outros dados importantes para o projeto. Com ele, o gerenciamento das modificações feitas em equipe é facilitado.
* -y significa yes

**npm install express**
* Instala uma dependência chamada express, que é um framework para o node com comandos para poupar excesso de código.
* Ele criou um outro documento chamado **package-lock.json** que contém todas as suas dependências.
* Isso quer dizer que o express depende de outros pacotes.
* Foi criada a pasta **node_modules** que contém todas as subpastas com todas essas instâncias

**server.js**
* É o nome padrão do documento que irá manipular nosso servidor. Aí que começa a escrita do código.

**Foi Gerada a Chave da API do Google Gemini**

***

### Aula 2 - 20241119

**Status HTTP**
* status são respostas padronizadas do protocolo http que indicam a situação da comunicação entre o cliente e o servidor.
* na casa do 500 são na parte do servidor.
* na casa do 400 são na parte do cliente.

**Foi Aberta a Conta no MongoDB**

## Código comentado

> import express from "express";
* primeiro importamos a instância "express" da pasta "express" no já citado node_modules

> const app = express();
* coloca a função express dentro da variável app, que vai fazer a manipulação do nosso servidor. Nota-se que express também é uma função.

> app.listen(3000, () => {
    console.log("Servidor Escutando...");
});
* indica que o servidor irá ouvir qualquer requisição da porta 3000 (padrão para localhost) e mostrará no console a frase "Servidor Escutando...".

> app.get("/api", (req, res) => {
    res.status(200).send("Boas Vindas à Imersão!");
});
* cria rota tipo "get" que "pega" sua requisição (req) e devolve uma resposta (res).
* Quando digitamos **localhost:3000/api** irá aparecer uma mensagem de boas vindas, caso o status seja 200 (ok).

> const posts = [
    {
      id: 1,
      descricao: 'Um gatinho ronronando no sol',
      imagem: 'https://placekitten.com/400/300'
    }
];
* Foi criado um *array* para servir como base de dados.
* Nele, contém objetos do tipo chave-valor.
* Para criar mais objetos, eles precisam estar entre chaves e serem separados por vírgula.
* o id é para ser capaz de retornar um só post, ao invés de todos

> app.use(express.json());
* faz com que as requisições devolvam como resposta documentos em formato json.

> app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});
* foi mudada nossa resposta de requerimento para que possamos retornar nossos posts em formato json

> function buscarPost (id){
    return posts.findIndex((post)=>{
        return post.id === Number(id)
    })
};
* Função que busca dentro do array cada objeto pelo seu id
* findIndex é uma função para procurar determinada coisa dentro de um array

> app.get("/posts/:id", (req, res) => {
    const index = buscarPost(req.params.id);
    res.status(200).json(posts[index]);
});
* ao digitar localhost/posts/id, sendo o id o número do id do post, ele irá retornar o post escolhido
