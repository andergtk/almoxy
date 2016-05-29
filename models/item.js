'use strict';

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

/**
 * Schema do item
 */
const ItemSchema = new Schema({
  tipo      : require('./item-schema-types/tipo')
, status    : require('./item-schema-types/status')
, descricao : require('./item-schema-types/descricao')
, comentario: String
, quantidade: require('./item-schema-types/quantidade')
, data      : require('./item-schema-types/data')
});

/**
 * Model do item
 */
const ItemModel = mongoose.model('itens', ItemSchema);

module.exports = ItemModel;
