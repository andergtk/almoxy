'use strict';

const enu = {
  values: [
    'Administrador'
  , 'Auxiliar'
  ]
, message: 'Cargo de usuário inválido'
}

module.exports = {
  type: String
, trim: true
, enum: enu
}
