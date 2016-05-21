'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  tipo: Boolean,
  descricao: { type: String, trim: true },
  comentario: { type: String, trim: true },
  quantidade: Number,
  criado_em: { type: Date, default: Date.now },
  historico: [
    {
      operacao: Number,
      status: Number,
      quantidade: Number,
      criado_em: { type: Date, default: Date.now }
    }
  ]
});

const ItemModel = mongoose.model('items', ItemSchema);

module.exports = ItemModel;
