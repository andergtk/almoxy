const tiposPermitidos = [
  'almoxarifado'
, 'achados-e-perdidos'
];

function validaItemTipo(tipo) {
  if (undefined !== tipo) {
    return tipo.indexOf(this.schema.path('tipo').enumValues) !== -1;
  } else {
    return false;
  }
}

module.exports = {
  type: String
, enum: tiposPermitidos
, required: true
, validate: [
    validaItemTipo
  , 'Tipo de item inválido'
  ]
}
