'use strict';

module.exports = (app) => {
  const usuariosController = app.controllers.usuarios;

  // Perfil do usuário
  app.route('/usuario')
    .get(usuariosController.perfil);

  // Criar usuário
  app.route('/usuario/criar')
    .get(usuariosController.form)
    .post(usuariosController.criar);

  // Informações do usuário
  app.route('/usuario/info/:id')
    .get(usuariosController.info);

  // Editar usuário
  app.route('/usuario/editar')
    .post(usuariosController.editar);

  // Excluir usuário
  app.route('/usuario/excluir')
    .post(usuariosController.excluir);
}
