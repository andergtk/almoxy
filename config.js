'use strict';

const mongoose = require('mongoose');

const config = {
  port: process.env.PORT || 3000
, db_url: 'mongodb://localhost/almoxy'
}

mongoose.connect(config.db_url);

mongoose.connection.on('connected', () => {
  console.log('[Mongoose] Conectado ao banco de dados.');
})

mongoose.connection.on('error', (err) => {
  console.log('[Mongoose] Erro na conexão: ', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('[Mongoose] Desconectado do banco de dados.');
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('[Mongoose] Conexão encerrada.');
    process.exit(0);
  });
});

module.exports = config;
