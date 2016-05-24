'use strict';

module.exports = (app) => {
  const mainController = require('../controllers/index');

  // Página inicial
  app.get('/', mainController.index);

  // Achados e Perdidos
  app.get('/achados-e-perdidos', mainController.achadosEPerdidos);
}
