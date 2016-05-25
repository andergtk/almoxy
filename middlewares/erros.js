'use strict';

/**
 * Lança o erro 404 se nenhuma rota for chamada
 */
exports.e404 = (req, res, next) => {
  let err = new Error('Não Encontrado');
  err.status = 404;
  next(err);
}

/**
 * Tratamento dos erros
 */
exports.mensagem = (err, req, res, next) => {
  res.status(err.status || 500);
  res.render('erro', {
      titulo: err.status || 500
    , mensagem: err.message
    });
}
