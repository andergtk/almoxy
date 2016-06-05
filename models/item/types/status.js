'use strict';

const enu = {
  values: [
    'alx_disponivel'
  , 'alx_indisponivel'
  , 'aep_encontrado'
  , 'aep_devolvido'
  ]
, message: 'Valor do campo Status é inválido.'
}

module.exports = {
  type: String
, trim: true
, enum: enu
, required: [true, 'O campo Status é obrigatório.']
}
