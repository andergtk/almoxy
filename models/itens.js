'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Schema do histórico
 */
const HistoricoSchema = new Schema({
  operacao: Number
, status: Number
, quantidade: { type: Number, default: 0 }
, criado_em: { type: Date, default: Date.now }
})

/**
 * Schema do item
 */
const ItemSchema = new Schema({
  tipo: Boolean
, descricao: { type: String, trim: true }
, comentario: { type: String, trim: true }
, quantidade: { type: Number, default: 0 }
, criado_em: { type: Date, default: Date.now }
, historico: [HistoricoSchema]
});

/**
 * Cria o model do item
 */
const ItemModel = mongoose.model('items', ItemSchema);

module.exports = () => ItemModel;
