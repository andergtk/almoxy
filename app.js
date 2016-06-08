'use strict';

/** Módulos */
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('express-flash');
const path = require('path');

/** Inicializa o app */
const app = express();

/** Configurações */
const config = require('./config');
const db = require('./config/db')(config.db.url);

/** Middlewares */
const title = require('./middlewares/title');
const error = require('./middlewares/error');

/** Rotas */
const main = require('./routes');
const item = require('./routes/item');

/** Define o nome do sistema */
app.set('name', config.name);

/** Environment */
app.set('env', config.env);

/** Views */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/** Diretório dos arquivos estáticos */
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(config.secrets.cookie));
app.use(session({
  resave: false
, saveUninitialized: true
, cookie: { maxAge: 30 * 60 * 1000 }
, secret: config.secrets.session
, store: new MongoStore({
    url: config.db.url
  })
}));
app.use(flash());
app.use(title());
app.use(main);
app.use(item);

/** Tratamento de erros */
app.use(error.e404);
app.use(error.errorHandler);

app.listen(config.port, () => {
  console.log(`[Servidor] Rodando em 'localhost:${config.port}'`);
});

/** Exprota o app */
module.exports = app;
