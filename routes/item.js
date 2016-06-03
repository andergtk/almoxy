'use strict';

const router = require('express').Router();

const itemController = require('../controllers/item');

// Adicionar item
router.route('/item/novo')
  // Formulário
  .get(itemController.form)

  .post(itemController.create);

// Informações do item
router.route('/item/info/:id')
  .get(itemController.info);

// Editar item
router.route('/item/editar/:id')
  // Formulário
  .get(itemController.edit);

router.route('/item/editar')
  .post(itemController.update);

// Remover item
router.route('/item/remover')
  .post(itemController.delete);

router.route('/item/remover/:id')
  .get(itemController.delete);

module.exports = router;
