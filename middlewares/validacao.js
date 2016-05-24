'use strict';

/**
 * Valida informações do item
 */
exports.item = (req, res, next) => {
  console.log('Validando dados do item...');
  next();
}

/**
 * Valida informações do usuário
 */
exports.usuario = (req, res, next) => {
  console.log('Validando dados do usuario...');
  next();
}
