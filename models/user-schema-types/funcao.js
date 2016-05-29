function validaUsuarioFuncao(funcao) {
  if (undefined !== funcao) {
    return funcao.indexOf(this.schema.path('funcao'),enumValues) !== -1;
  } else {
    return false;
  }
}

module.exports = {
  type: String
, enum: ['Administrador', 'Auxiliar']
, validate: [
    validaUsuarioFuncao
  , 'Função do usuário inválida'
  ]
}
