'use strict';

const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId;

exports.isValidId = isValidId;
exports.statusFromEnum = statusFromEnum;
exports.statusFilter = statusFilter;

/**
 * Testa se o parâmetro ID é válido.
 */
function isValidId (id, cb) {
  let result = false;

  if ('string' === typeof id) {
    // Testa pelo tamanho da string
    if (ObjectId.isValid(id)) {
      // IDs válidos não são alterados quando passados no ObjectId()
      if (ObjectId(id).toString() === id) {
        result = true;
      }
    }
  }

  // Faz o async real acontecer
  process.nextTick(function() {
    cb(result);
  });
}

/**
 * Lista de status a partir do enum do schema.
 */
function statusFromEnum (enumValues) {
  let status = {};

  if (! Array.isArray(enumValues))
    return;

  enumValues.forEach((option) => {
    switch (option) {
      case 'alx_disponivel':
        status[option] = 'Disponível';
        break;
      case 'alx_indisponivel':
        status[option] = 'Indisponível';
        break;
      case 'aep_encontrado':
        status[option] = 'Encontrado';
        break;
      case 'aep_devolvido':
        status[option] = 'Devolvido';
    }
  });

  return status;
}

/**
 * Lista de status específicos para cada tipo de item.
 */
function statusFilter (status, type) {
  if ('object' !== typeof status)
    throw new Error('O parâmetro \'status\' deve ser do tipo Object');

  if ('string' !== typeof type)
    throw new Error('O parâmetro \'type\' deve ser do tipo String');

  for (let option in status) {
    if (! status.hasOwnProperty(option)) continue;

    if ('almoxarifado' === type && ! option.match(/^alx/))
      delete status[option];

    if ('achados_e_perdidos' === type && ! option.match(/^aep/))
      delete status[option];
  }

  return status;
}
