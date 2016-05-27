'use strict';

const express      = require('express');
const session      = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const flash        = require('express-flash');
const path         = require('path');
const config       = require('./config');
const db           = require('./db')(config.dbUri);

const autenticacao = require('./middlewares/autenticacao');

const rotas    = require('./routes/index');
const itens    = require('./routes/itens');
const usuarios = require('./routes/usuarios');

const app = express();

/**
 * View engine
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/**
 * Diretório dos arquivos estáticos
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
, maxAge: 1800000
, saveUninitialized: true
, secret: config.sessionSecret
}));
app.use(flash());

/**
 * Middlewares do projeto
 */
app.use(autenticacao);

/**
 * Rotas
 */
app.use(rotas);
app.use(itens);
app.use(usuarios);

/**
 * Tratamento de erros
 */

// Lança erro 404 e toca em frente
app.use((req, res, next) => {
  let err = new Error('Não encontrado');

  err.status = 404;
  next(err);
});

// Capitura os eros e renderiza a página
app.use((err, req, res, next) => {
  const defaultStatus = 500;

  res.status(err.status || defaultStatus);
  res.render('erro', {
      titulo: err.status || defaultStatus
    , mensagem: err.message
    });
});

app.listen(config.port, () => {
  console.log(`[Servidor] Rodando na porta ${config.port}`);
});
