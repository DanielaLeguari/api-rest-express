#  Treinamento de API(Application Programming Interface) com Express e MongoDB

## Tecnologias

- Node.js,
- Express,
- MongoDB;

## Biblioteca Nodemon

`npm install nodemon@2.0.15 -D`

## Framework

- Express

`npm install express`

<hr>

## Detalhe importante!
- quando trabalhamos com o import, o export default lá no package JSON temos que incluir uma linha chamada type e module, para dizer que estamos trabalhando com importação e exportação module.

`  "type": "module",`

<hr>

### Comandos

`npm init -y`
`npm run dev` -> para rodar a aplicação

<hr>

# Estrutura do projeto 

### Arquivo server.js

- tem uma função especifica que é iniciar o servidor e ficar escutando requisição.

### Arquivo app.js

- possui as rotas.









<hr>

>**Note**:
- Utilizando módulo nativo HTTP
    `
    //servidor
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

    //definir a porta
    server.listen(port, () => {
        console.log(`Servidor escutando em http://localhost:${port}`);
    });
    `

