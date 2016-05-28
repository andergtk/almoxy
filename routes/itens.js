'use strict';

const express = require('express');
const router  = express.Router();

const controller = require('./../controllers/itens');

// Novo item
router.route('/item/novo')
  .get(controller.form)
  .post(controller.salvar);

// Informações do item
router.route('/item/info/:id')
  .get(controller.info);

// Editar item
router.route('/item/editar')
  .post(controller.editar);

// Excluir item
router.route('/item/excluir')
  .post(controller.excluir);

module.exports = router;
