'use strict';

const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId;

/**
 * Testa se o parâmetro ID é válido.
 *
 * @param  {String}   id  ID do item.
 * @param  {Function} cb  Função de callback.
 * @return {Boolean}
 */
exports.isValidId = (id, cb) => {
  if ('string' !== typeof id)
    cb(false);

  // Testa pelo tamanho da string
  if (! ObjectId.isValid(id))
    cb(false);

  // IDs válidos não são alterados quando passados no ObjectId()
  if (ObjectId(id).toString() !== id)
    cb(false);

  cb(true);
}

/**
 * Lista de status a partir do enum do schema.
 *
 * @param   {Array} enumValues  Lista de status.
 * @return  {Object}            Lista de status com descrição.
 */
exports.statusFromEnum = (enumValues) => {
  if (! Array.isArray(enumValues))
    return;

  let status = {};

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
 *
 * @param   {Object}  status  Lista dos status.
 * @param   {String}  type    Tipo do item.
 * @return  {Object}          Lista dos status específicos de cada tipo de item.
 */
exports.statusFilter = (status, type) => {
  if ('object' !== typeof status)
    throw new Error('O parâmetro \'status\' deve ser do tipo Object');

  if ('string' !== typeof type)
    throw new Error('O parâmetro \'type\' deve ser do tipo String');

  for (var option in status) {
    if (! status.hasOwnProperty(option)) continue;

    if ('almoxarifado' === type &&
      ! option.match(/^alx_/))
      delete status[option];

    if ('achados_e_perdidos' === type &&
      ! option.match(/^aep_/))
      delete status[option];
  }

  return status;
}
