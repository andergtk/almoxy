'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Schema do usuário
 */
const UsuarioSchema = new Schema();

/**
 * Cria o model do usuário
 */
const UsuarioModel = mongoose.model('usuarios', UsuarioSchema);

module.exports = () => UsuarioModel;
