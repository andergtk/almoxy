'use strict';

const mongoose = require('mongoose');
const config = require('../config');

// Conecta ao banco de dados
mongoose.connect(config.dbURL);

// EVENTOS
mongoose.connection.on('connected', () => {
  console.log('[Mongoose] Conectado ao banco de dados.');
})

mongoose.connection.on('disconnected', () => {
  console.log('[Mongoose] Desconectado do banco de dados.');
});

mongoose.connection.on('error', (err) => {
  console.log('[Mongoose] Falha na conexão:', err);
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('[Mongoose] Conexão encerrada.');
    process.exit(0);
  });
});