'use strict';

exports.item = (req, res, next) => {
  console.log('Validando dados do item...');
  next();
}

exports.usuario = (req, res, next) => {
  console.log('Validando dados do usuario...');
  next();
}
