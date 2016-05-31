'use strict';

const router = require('express').Router();

const itemController = require('../controllers/item');

// Adicionar item
router.route('/item/novo')
  .get(itemController.form)
  .post(itemController.create);

// Informações do item
router.route('/item/info/:id')
  .get(itemController.info);

// Editar item
router.route('/item/editar')
  .post(itemController.update);

router.route('/item/editar/:id')
  .get(itemController.edit);

// Remover item
router.route('/item/remover/:id')
  .get(itemController.delete);

module.exports = router;
