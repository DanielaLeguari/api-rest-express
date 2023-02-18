#  Treinamento de API(Application Programming Interface) com Express e MongoDB

## Construção de API para Livraria

### Tecnologias

1. Node.js,
2. Express,
3. MongoDB(MongoDB Atlas, serviço do Mongo em nuvem);


## MongoDB

- Banco orientado a documentos e coleções, isso significa que seus dados são armazenados dentro de documentos semelhantes a JSON, na prática usamos uma versão binária chamado BSON(Binary Json).;

### Tipo de dados BSON

- <a href='https://www.mongodb.com/docs/manual/reference/bson-types/'>Documentação</a>


### Bibliotecas

1. nodemon
- `npm install nodemon@2.0.15 -D`

2. moongose
- `npm install mongoose@6.2.6`

### Framework

- Express

- `npm install express`

<hr>

### Detalhe importante!

> **Warning**
-  quando trabalhamos com o import, o export default lá no package JSON temos que incluir uma linha chamada type e module, para dizer que estamos trabalhando com importação e exportação module.

- `  "type": "module",`

<hr>

### Comandos

- `npm init -y`-> para iniciar o projeto
- `npm run dev` -> para rodar a aplicação

<hr>

# Estrutura do projeto 

### Arquivo server.js

- tem uma função especifica que é iniciar o servidor e ficar escutando requisição.

### Arquivo app.js

- possui as rotas.


### pasta models

- contém o arquivo Livro.js que é a representação de um livro, este arquivo contém as regras de negócio.








<hr>

>**Note**:
- Utilizando módulo nativo HTTP
    
    - //servidor
    const http = require("http");
    const port = 3000;

    const rotas = {
        '/': 'Curso de Node',
        '/livros': 'Entrei na página de livros',
        '/autores': 'Listagem de autores'
    }

    const server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(rotas[req.url]);
    });

    - //definir a porta
    server.listen(port, () => {
        console.log(`Servidor escutando em http://localhost:${port}`);
    });
    

