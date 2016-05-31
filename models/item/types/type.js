'use strict';

const enu = {
  values: [
    'almoxarifado'
  , 'achados-e-perdidos'
  ]
, message: 'Tipo de item inválido'
}

module.exports = {
  type: String
, trim: true
, enum: enu
}
