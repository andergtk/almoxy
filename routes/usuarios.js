'use strict';

module.exports = (app) => {
  const usuariosController = require('../controllers/usuarios');

  // Perfil do usuário
  app.get('/usuario', usuariosController.perfil);

  // Novo usuário
  app.post('/usuario', usuariosController.novo);

  // Informações do usuário
  app.get('/usuario/info/:id', usuariosController.info);

  // Editar usuário
  app.post('/usuario/edit', usuariosController.edit);

  // Remover usuário
  app.post('/usuario/delete', usuariosController.delete);
}
