'use strict';

module.exports = (app) => {
  const itensController = require('../controllers/itens');

  app.post('/item', itensController.novo);
  app.get('/item/:id', itensController.info);
  app.post('/item/:id', itensController.edit);
  app.post('/item/delete/:id', itensController.delete);
}
