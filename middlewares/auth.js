'use strict';

/**
 * Faz a autenticação do usuário.
 */
module.exports = (req, res, next) => {
  // Testar se rota é diferente de Login e Cadastro
  // se for, testa se usuário está logado
  // se não estiver, redireciona para Login
  next();
}
