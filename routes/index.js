'use strict';

module.exports = (app) => {
  const controller = app.controllers.index;

  // Página inicial
  app.route('/')
    .get(controller.index);

  // Achados e Perdidos
  app.route('/achados-e-perdidos')
    .get(controller.achadosEPerdidos);

  // Login
  app.route('/login')
    .get(controller.login)
    .post(controller.login);
}
