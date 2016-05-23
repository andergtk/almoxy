'use strict';

module.exports = (app) => {
  const mainController = require('../controllers/index');

  app.get('/', mainController.index);
  app.get('/achados-e-perdidos', mainController.achadosEPerdidos);
}
