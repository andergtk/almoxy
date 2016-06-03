'use strict';

module.exports = {
  type: String
, trim: true
, unique: [true, 'Este e-mail já está sendo utilizado.']
, required: [true, 'O campo E-mail é obrigatório.']
}
