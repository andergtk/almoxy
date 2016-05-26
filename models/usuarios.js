'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Schema dos telefones do usuário
 */
const TelefoneSchema = new Schema({
  tipo: { type: String, trim: true }
, numero: Number
});

/**
 * Schema do usuário
 */
const UsuarioSchema = new Schema({
  nome: { type: String, trim: true }
, email: { type: String, trim: true }
, senha: { type: String, trim: true }
, funcao: { type: String, trim: true }
, telefones: [TelefoneSchema]
});

/**
 * Cria o model do usuário
 */
const UsuarioModel = mongoose.model('usuarios', UsuarioSchema);

module.exports = () => UsuarioModel;
