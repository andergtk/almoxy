'use strict';

const router = require('express').Router();
const itemController = require('../controllers/item');

/** Adicionar item */
router.route('/item/novo').post(itemController.create);

// Formulário
router.route('/item/novo').get(itemController.form);

/** Informações do item */
router.route('/item/info/:id').get(itemController.info);

/** Editar item */
router.route('/item/editar').post(itemController.update);

// Formulário
router.route('/item/editar/:id').get(itemController.edit);

/** Remover item */
router.route('/item/remover/:id').get(itemController.remove);
router.route('/item/remover').post(itemController.remove);

module.exports = router;
