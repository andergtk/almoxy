function validaUsuarioTelefoneTipo(tipo) {
  if (undefined !== tipo) {
    tipo.indexOf(this.schema.path('tipo').enumValues) !== -1;
  } else {
    return false;
  }
}

module.exports = {
  type: String
, default: 'Celular'
, enum: [
    'Fixo'
  , 'Celular'
  ]
, validate: [
    validaUsuarioTelefoneTipo
  , 'Tipo de telefone inválido'
  ]
}
