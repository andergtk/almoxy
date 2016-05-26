'use strict';

const express      = require('express');
const session      = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const consign      = require('consign');
const flash        = require('express-flash');
const path         = require('path');
const config       = require('./config');
const db           = require('./db')(config.dbUri);

const autenticacao = require('./middlewares/autenticacao');
const validacao    = require('./middlewares/validacao');
const erros        = require('./middlewares/erros');

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

/**
 * Middlewares do projeto
 */
app.use(autenticacao);
app.post(/^\/item/, validacao.item);
app.post(/^\/usuario/, validacao.usuario);

/**
 * Models
 * Controllers
 * Rotas
 */
consign({ locale: 'pt-br' })
  .include('./models')
  .then('./controllers')
  .then('./routes')
  .into(app);

/**
 * Tratamento dos erros
 */
app.use(erros.e404);
app.use(erros.mensagem);

app.listen(config.port, () => {
  console.log(`[Servidor] Rodando na porta ${config.port}`);
});
