'use strict';

module.exports = (app) => {
  const itensController = app.controllers.itens;

  // Criar item
  app.route('/item/criar')
    .get(itensController.form)
    .post(itensController.criar);

  // Informações do item
  app.route('/item/info/:id')
    .get(itensController.info);

  // Editar item
  app.route('/item/editar')
    .post(itensController.editar);

  // Excluir item
  app.route('/item/excluir')
    .post(itensController.excluir);
}
