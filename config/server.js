'use strict';

// Opções do banco de dados
const db = {
  url: 'mongodb://localhost/almoxy'
}

// Secrets
const secrets = {
  // Assinatura usada nos cookies
  cookie: '2aEhAr5doPVwiCkdLGx8pcG5jTvmPodY2eM3SmbMc4xgNzgp'

  // Assinatura dos cookies usados na sessão
, session: 'oU44aFlsXMtwpgzrKklBdmpfYQOeKBerUONsQXcShQhwMuvg'
}

// Título base do sistema
exports.title = 'Almoxy';

// Ambiente
exports.env = process.env.NODE_ENV || 'production';

// Porta
exports.port = process.env.PORT || 3000;

exports.db = db;
exports.secrets = secrets;
