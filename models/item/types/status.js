'use strict';

const enu = {
  values: [
    ''
  , 'Encontrado'
  , 'Devolvido'
  ]
, message: 'Conteúdo do campo Status é inválido'
}

module.exports = {
  type: String
, default: ''
, trim: true
, enum: enu
}
