'use strict';

const router = require('express').Router();

const userController = require('../controllers/user');

// Perfil do usuário
router.route('/usuario')
  .get(userController.profile);

// Login
router.route('/login')
  .get(userController.login)
  .post(userController.login);

// Cadastrar
router.route('/cadastrar')
  .get(userController.signup)
  .post(userController.signup);

// Informações do usuário
router.route('/usuario/info/:id')
  .get(userController.info);

// Editar usuário
router.route('/usuario/editar')
  .post(userController.edit);

// Remover usuário
router.route('/usuario/remover')
  .post(userController.delete);

module.exports = router;
