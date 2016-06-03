'use strict';

const enu = {
  values: [
    'fixo'
  , 'celular'
  ]
, message: 'O campo Tipo do telefone é inválido.'
}

module.exports = {
  type: String
, trim: true
, enum: enu
, required: [true, 'O campo Tipo do telefone é obrigatório.']
}
