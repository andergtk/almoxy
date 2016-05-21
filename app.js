'use strict';

const express = require('express');
const app     = express();
const path    = require('path');
const config  = require('./config');

const main_controller  = require('./controllers/index');
const items_controller = require('./controllers/items');

// define o ejs como view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// define a pasta dos arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// as rotas estão no "controller"
app.use(main_controller);
app.use(items_controller);

// trata o erro 404
app.get('*', function(req, res) {
  res.status(404).render('errors/404', {
    title: 'Erro 404',
    message: 'Não encontrado'
  });
});

app.listen(config.port, function() {
  console.log('[Servidor] Rodando na porta', config.port);
});
