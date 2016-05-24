'use strict';

module.exports = (app) => {
  const itensController = require('../controllers/itens');

  // Novo item
  app.get('/item/novo', itensController.form);
  app.post('/item/novo', itensController.novo);

  // Informações do item
  app.get('/item/info/:id', itensController.info);

  // Editar item
  app.post('/item/edit', itensController.edit);

  // Remover item
  app.post('/item/delete', itensController.delete);
}
