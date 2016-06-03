'use strict';

module.exports = {
  type: Number
, required: [true, 'O campo Número do telefone é obrigatório.']
, min: [8, 'O campo Número do telefone é inválido.']
}
