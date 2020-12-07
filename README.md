SEQUENCIA PARA CRIAR O PROJETO

Criar o arquivo package
### npm init

Gerecia as requisições, rotas e URLs, entre outras funcionalidades
### npm install express

Instala o modulo para reiniciar o servidor sempre que houver uma alteração no codigo fonte
### npm i -g nodemon

O carregador de módulo esm nos ajuda a usar as importações es6 em node.js em vez da require()função commonjs e module.exports.
Para usar o carregador de módulo esm, primeiro precisamos instalá-lo a partir do npm executando o seguinte comando em seu terminal.
### npm install esm

Agora, é preciso executar o app.js adicionando -r esm flag após o nodecomando.
### nodemon -r esm app.js

Roda o projeto usando nodemon
### nodemon app.js

Instala o Mongodb no projeto
### npm install mongodb --save

// mongoosejs.com/docs/guide.html

Instala o Mongosse - traduz os dados do banco de dados para objetos javaScript para  que possam ser utilizados pela aplicação.
### npm install --save mongoose

// Modulo para enviar email
### npm install nodemailer

// Para permitir acesso a API
### npm install --save cors


