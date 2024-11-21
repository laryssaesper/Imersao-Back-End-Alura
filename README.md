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

***

### Aula 3 - 20241120

* Criação do banco de dados com mongodb
* Instalação dele usando **npm install mongodb** no console
* Criação do arquivo .env para lidar com variáveis de conexão. Colocar no .env como o valor da variável o link de conexão que o mongodb proporcionou
* em package.json:
>"scripts": {
    "dev": "node --watch --env-file=.env server.js",
    "test": ""
  },

Para rodar automáticamente ao colocar **npm run dev** no console ao invés de precisar digitar tudo novamente

* Separar códigos do server.js em subpastas (config, models, routes) dentro da pasta src

***

### Aula 4 - 20241121

**Explicação das Pastas**
* config: configura a conexão do banco de dados
* models: contém as funções para enviar os dados ao banco
* routes: cria as rotas para interação com o back-end (como, por exemplo, a visualização dos posts)
* controller: o que junta as rotas com os dados em si

**Verbos HTTP**
* operações básicas: get (ler), post (criar/enviar), put (atualizar), delete (deletar)

**Thunder Client** ferramente de teste de api para CARACTERES

**Postman** ferramenta de teste de api que pode lidar com imagens

* usar o postman para o upload de imagens