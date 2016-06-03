'use strict';

const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId;

/**
 * Testa se o parâmetro ID é válido
 * @param  {String}   id  ID do item
 * @param  {Function} cb  Função de callback
 * @return {Boolean}
 */
exports.isValidId = (id, cb) => {
  if ('string' !== typeof id)
    cb(false);

  // Verifica pelo tamanho da string
  if (! ObjectId.isValid(id))
    cb(false);

  // IDs válidos não mudam quando passado no ObjectId()
  if (new ObjectId(id) !== id)
    cb(false);

  cb(true);
}

/**
 * Lista de status a partir do enum do model
 * @param   {Array} enumValues Lista de status sem descrição
 * @return  {Object}           Lista de status com descrição
 */
exports.statusFromEnum = (enumValues) => {
  if (Array.isArray(enumValues))
    return;

  let status = {};

  enumValues.forEach((option) => {
    switch (option) {
      case 'alx_disponivel':
        status[option] = 'Disponível';
        break;
      case 'alx_em_falta':
        status[option] = 'Em falta';
        break;
      case 'alx_reservado':
        status[option] = 'Reservado';
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
