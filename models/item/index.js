'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Schema do item
 */
const ItemSchema = new Schema({
  type: require('./types/type')
, status: require('./types/status')
, description: require('./types/description')
, comment: String
, amount: require('./types/amount')
, created_at: require('./types/created_at')
});

module.exports = mongoose.model('Item', ItemSchema);
