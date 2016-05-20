var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function() {
  var usuariosSchema = new Schema({
    _id: Schema.ObjectId,
    nome: String,
    funcao: String,
  });
  return mongoose.model('Usuarios', usuariosSchema);
}
