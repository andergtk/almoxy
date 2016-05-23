'use strict';

const Items = require('../models/items');

exports.novo = (req, res) => {
  res.send('Criar item');
}

exports.info = (req, res) => {
  res.send({ descricao: 'Item', quantidade: 123 });
}

exports.delete = (req, res) => {
  res.send('Remover item');
}
