'use strict';

const router = require('express').Router();

const mainController = require('../controllers/index');

// Página inicial
router.route('/')
  .get(mainController.index);

// Achados e perdidos
router.route('/achados-e-perdidos')
  .get(mainController.achadosEPerdidos);

module.exports = router;
