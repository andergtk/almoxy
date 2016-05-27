'use strict';

const express = require('express');
const router  = express.Router();

const controller = require('./../controllers/index');

// Página inicial
router.route('/')
  .get(controller.index);

// Achados e Perdidos
router.route('/achados-e-perdidos')
  .get(controller.achadosEPerdidos);

// Login
router.route('/login')
  .get(controller.login)
  .post(controller.login);

module.exports = router;
