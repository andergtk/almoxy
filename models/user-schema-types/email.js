'use strict';

const validator = require('validator');

module.exports = {
  type: String
, required: true
, validate: [
    validator.isEmail
  , 'E-mail inválido'
  ]
}
