'use strict';

const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const flash = require('express-flash');
const path = require('path');
const config = require('./config');
const db = require('./models/db')(config.dbURL);

const autenticacao = require('./middlewares/autenticacao');
const validacao = require('./middlewares/validacao');

const app = express();

/**
 * View engine
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/**
 * Define o diretório com os arquivos estáticos
 */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Middlewares
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(config.cookieSecret));
app.use(session({
  resave: true
, saveUninitialized: false
, secret: config.sessionSecret
}));
app.use(flash());

// Middlewares do projeto
app.use(autenticacao);
app.post(/^\/item/, validacao.item);
app.post(/^\/usuario/, validacao.usuario);

/**
 * Rotas
 */
const rotas = require('./routes/index')(app);
const itens = require('./routes/itens')(app);
const usuarios = require('./routes/usuarios')(app);

/**
 * Lança o erro 404 se nenhuma rota for chamada
 */
app.use((req, res, next) => {
  let err = new Error('Não Encontrado');
  err.status = 404;
  next(err);
});

/**
 * Tratamento dos erros
 */
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('erro', {
      titulo: err.status || 500
    , mensagem: err.message
    });
});

app.listen(config.port, () => {
  console.log(`[Servidor] Rodando na porta ${config.port}`);
});
