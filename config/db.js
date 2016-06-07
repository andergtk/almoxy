'use strict';

const mongoose = require('mongoose');

exports = module.exports = connection;

/**
 * Conexão com o banco de dados.
 */
function connection(url) {
  mongoose.connect(url);
}

/**
 * Eventos
 */
mongoose.connection.on('connected', () => {
  console.log('[Mongoose] Conectado ao banco de dados.');
});

mongoose.connection.on('disconnected', () => {
  console.log('[Mongoose] Desconectado do banco de dados.');
});

mongoose.connection.on('error', (err) => {
  console.log('[Mongoose] Falha na conexão com o banco de dados.');
  throw err;
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('[Mongoose] Conexão encerrada.');
    process.exit(0);
  });
});
