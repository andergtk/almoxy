'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Schema dos telefones do usuário
 */
const PhoneSchema = new Schema({
  type: require('./types/type')
, number: require('./types/number')
});

/**
 * Schema do usuário
 */
const UserSchema = new Schema({
  name: require('./types/name')
, email: require('./types/email')
, password: require('./types/password')
, role: require('./types/role')
, created_at: require('./types/created_at')
, phones: [PhoneSchema]
});

module.exports = mongoose.model('User', UserSchema);