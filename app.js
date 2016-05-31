'use strict';

// Módulos
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('express-flash');
const path = require('path');
const app = express();

// Configurações
const config = require('./config/index');
const db = require('./config/db')(config.db.uri);

// Middlewares
const auth = require('./middlewares/auth');
const error = require('./middlewares/error');

// Rotas
const main = require('./routes/index');
const user = require('./routes/user');
const item = require('./routes/item');

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
app.use(cookieParser(config.secret.cookie));
app.use(session({
  resave: false
, saveUninitialized: true
, cookie: { maxAge: 30 * 60 * 1000 }
, secret: config.secret.session
, store: new MongoStore({
    url: config.db.uri
  })
}));
app.use(flash());

/**
 * Autenticação do usuário
 */
app.use(auth);

/**
 * Rotas
 */
app.use(main);
app.use(user);
app.use(item);

/**
 * Erros
 */
app.use(error.e404);
app.use(error.errorHandler);

app.listen(config.port, () => {
  console.log(`[Servidor] Rodando na porta ${config.port}`);
});
