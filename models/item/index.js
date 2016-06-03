'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Schema do histórico do item
 */
const HistorySchema = new Schema({
    status: require('./types/status')
  , description: require('./types/description')
  , comment: require('./types/comment')
  , amount: require('./types/amount')
  , finded_at: require('./types/finded_at')
});

/**
 * Schema do item
 */
const ItemSchema = new Schema({
  type: require('./types/type')
, status: require('./types/status')
, description: require('./types/description')
, comment: String
, amount: require('./types/amount')
, finded_at: require('./types/date')
, updated_at: require('./types/date')
, created_at: require('./types/date')
, history: [HistorySchema]
});

module.exports = mongoose.model('Item', ItemSchema);
