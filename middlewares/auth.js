'use strict';

/**
 * Autenticação do usuário
 */
module.exports = (req, res, next) => {
  console.log('Autenticando usuário...');
  next();
}
