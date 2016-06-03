'use strict';

const enu = {
  values: [
    'administrador'
  , 'auxiliar'
  ]
, message: 'Valor do campo Cargo do usuário é inválido.'
}

module.exports = {
  type: String
, trim: true
, enum: enu
}
