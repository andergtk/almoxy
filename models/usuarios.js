'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Schema dos telefones do usuário
 */
const TelefoneSchema = new Schema({
  tipo: String
, numero: Number
});

/**
 * Schema do usuário
 */
const UsuarioSchema = new Schema({
  nome: String
, email: String
, senha: String
, funcao: String
, telefones: [TelefoneSchema]
, data: { type: Date, default: Date.now }
});

/**
 * Model do usuário
 */
const UsuarioModel = mongoose.model('Usuario', UsuarioSchema);

module.exports = () => UsuarioModel;
