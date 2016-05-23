'use strict';

module.exports = (req, res, next) => {
  console.log('Autenticando usuário...');
  next();
}
