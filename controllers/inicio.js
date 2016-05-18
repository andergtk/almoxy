module.exports = function(app) {
  var inicioController = {
    index: function(req, res) {
      res.render('index', {
        titulo: app.models.inicio.index
      });
    }
  }
  return inicioController;
}
