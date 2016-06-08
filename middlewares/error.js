'use strict';

exports.e404 = e404;
exports.errorHandler = errorHandler;

/**
 * Erro 404.
 */
function e404(req, res, next) {
  let err = new Error('O recurso requisitado não foi encontrado.');
  err.status = 404;
  err.name = 'Não encontrado';
  next(err);
}

/**
 * Renderiza a página de erros.
 */
function errorHandler(err, req, res, next) {
  res.status(err.status || 500);
  res.title(err.name || 'Erro interno do servidor');
  res.render('error', {
    message: err.message || 'Erro no servidor ao processar a solicitação.'
  });
}
