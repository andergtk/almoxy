var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function() {
  var itensSchema = new Schema({
    usuario_id: Schema.ObjectId,
    tipo: Boolean,
    descricao: {type: String, trim: true},
    comentario: {type: String, trim: true},
    quantidade: Number,
    data: {type: Date, default: Date.now},
    historico: [
      {
        usuario_id: Schema.ObjectId,
        operacao: Number,
        status: Number,
        quantidade: Number,
        data: {type: Date, default: Date.now}
      }
    ]
  });
  return mongoose.model('Itens', itensSchema);
}
