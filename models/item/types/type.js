'use strict';

const enu = {
  values: [
    'almoxarifado'
  , 'achados_e_perdidos'
  ]
, message: 'Valor do campo Tipo é inválido.'
}

module.exports = {
  type: String
, trim: true
, enum: enu
, required: [true, 'O campo Tipo é obrigatório.']
}
