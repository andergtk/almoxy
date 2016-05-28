'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Schema do histórico do item
 */
const HistoricoSchema = new Schema({
  operacao: String
, status: String
, quantidade: { type: Number, default: 0 }
, data: { type: Date, default: Date.now }
});

/**
 * Schema do item
 */
const ItemSchema = new Schema({
  tipo: { type: String, default: 'almoxarifado' }
, descricao: String
, comentario: String
, quantidade: { type: Number, default: 0 }
, data: { type: Date, default: Date.now }
, historico: [HistoricoSchema]
});

/**
 * Model do item
 */
const ItemModel = mongoose.model('itens', ItemSchema);

module.exports = ItemModel;
