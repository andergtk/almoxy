'use strict';

const enu = {
  values: [
    'Fixo'
  , 'Celular'
  ]
, message: 'Tipo de telefone inválido'
}

module.exports = {
  type: String
, trim: true
, enum: enu
}
