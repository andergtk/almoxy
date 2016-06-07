'use strict';

/** Environment */
const env = process.env.NODE_ENV || 'production';

/** Porta */
const port = process.env.PORT || 3000;

/** Opções do banco de dados */
const db = {
  url: 'mongodb://localhost/almoxy'
}

/** Secrets */
const secrets = {
  // Assinatura usada nos cookies
  cookie: '2aEhAr5doPVwiCkdLGx8pcG5jTvmPodY2eM3SmbMc4xgNzgp'

  // Assinatura dos cookies usados na sessão
, session: 'oU44aFlsXMtwpgzrKklBdmpfYQOeKBerUONsQXcShQhwMuvg'
}

/** Nome do sistema */
exports.name = 'Almoxy';

exports.env = env;
exports.port = port;
exports.db = db;
exports.secrets = secrets;
