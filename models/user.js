'use strict';

const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

/**
 * Schema dos telefones do usuário
 */
const TelefoneSchema = new Schema({
  tipo  : require('./usuario-schema-types/tipo')
, numero: require('./usuario-schema-types/numero')
});

/**
 * Schema do usuário
 */
const UsuarioSchema = new Schema({
  nome      : require('./usuario-schema-types/nome')
, email     : require('./usuario-schema-types/email')
, senha     : require('./usuario-schema-types/senha')
, funcao    : require('./usuario-schema-types/funcao')
, data      : require('./usuario-schema-types/data')
, telefones : [TelefoneSchema]
});

/**
 * Model do usuário
 */
const UsuarioModel = mongoose.model('usuarios', UsuarioSchema);

module.exports = UsuarioModel;
