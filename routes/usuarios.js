module.exports = function(app) {
    app.route('/perfil').get(app.controllers.usuarios.index);
    app.route('/usuarios').get(app.controllers.usuarios.listar);
}
