'use strict';

const express = require('express');
const router  = express.Router();

const controller = require('./../controllers/usuarios');

// Perfil do usuário
router.route('/usuario')
  .get(controller.perfil);

// Criar usuário
router.route('/cadastrar')
  .get(controller.form)
  .post(controller.criar);

// Informações do usuário
router.route('/usuario/info/:id')
  .get(controller.info);

// Editar usuário
router.route('/usuario/editar')
  .post(controller.editar);

// Excluir usuário
router.route('/usuario/excluir')
  .post(controller.excluir);

module.exports = router;
