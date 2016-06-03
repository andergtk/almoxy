'use strict';

module.exports = {
  type: Number
, default: 0
, required: [true, 'O campo Quantidade é obrigatório.']
, min: [0, 'O campo Quantidade só permite números iguais ou maiores que {MIN}.']
}
