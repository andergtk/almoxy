'use strict';

const express      = require('express');
const session      = require('express-session');
const flash        = require('express-flash');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const path         = require('path');
const config       = require('./config');
const db           = require('./models/db');

// Inicializa o app
const app = express();

// Rotas
const main     = require('./routes/main');
const itens    = require('./routes/itens');
const usuarios = require('./routes/usuarios');

// Middlewares do projeto
const autenticacao = require('./middlewares/autenticacao');
const validacao    = require('./middlewares/validacao');

// Define o EJS como view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Define o diretório com os arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(config.cookieSecret));
app.use(session({
  resave: true
, saveUninitialized: false
, secret: config.sessionSecret
}));
app.use(flash());

app.use(autenticacao);
app.post('/item', validacao.item);
app.post('/usuario', validacao.usuario);

app.use(main);
app.use(itens);
app.use(usuarios);

// Trata o erro 404
app.get('*', function(req, res) {
  res.status(404)
    .render('404', {
      titulo: '404'
    , mensagem: 'Não encontrado.'
    });
});

app.listen(config.port, function() {
  console.log('[Servidor] Rodando na porta', config.port);
});
