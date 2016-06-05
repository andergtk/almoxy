'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Schema do histórico do item
 */
const HistorySchema = new Schema({
    status: require('./types/status')
  , description: require('./types/description')
  , comment: String
  , amount: require('./types/amount')
  , created_at: require('./types/date')
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
, updated_at: require('./types/date')
, created_at: require('./types/date')
, history: [HistorySchema]
});

module.exports = mongoose.model('Item', ItemSchema);
