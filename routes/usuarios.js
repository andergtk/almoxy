'use strict';

module.exports = (app) => {
  const usuariosController = require('../controllers/usuarios');

  app.get('/usuario', usuariosController.perfil);
  app.post('/usuario', usuariosController.novo);
  app.get('/usuario/:id', usuariosController.info);
  app.post('/usuario/:id', usuariosController.edit);
  app.post('/usuario/delete/:id', usuariosController.delete);
}
