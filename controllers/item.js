'use strict';

const Itens = require('./../models/itens');

exports.form = (req, res) => {
  const retornar = (undefined !== req.header('Referer'))
    ? req.header('Referer')
    : '/';

  const opcaoDefault = (retornar.match(/\/achados-e-perdidos/))
    ? 'achados-e-perdidos'
    : 'almoxarifado';

  res.render('item/novo', {
    titulo: 'Novo item'
  , retornar
  , opcao: opcaoDefault
  });
}

exports.salvar = (req, res) => {
  const item = new Itens({
    tipo      : req.body.tipo
  , descricao : req.body.descricao
  , comentario: req.body.comentario
  , quantidade: req.body.quantidade
  });

  const retornar = (undefined !== req.body.tipo && 'achados-e-perdidos' === req.body.tipo)
    ? '/achados-e-perdidos'
    : '/';

  item.save((err) => {
    if (err) {
      req.flash('error', 'Falha ao cadastrar item: ' + err);
      res.redirect(retornar);
    } else {
      req.flash('success', 'Item cadastrado com sucesso');
      res.redirect(retornar);
    }
  });
}

exports.info = (req, res, next) => {
  const moment  = require('moment');
  const accepts = req.accepts(['json', 'html']);

  moment.locale('pt-br');

  switch (accepts) {
    case 'json':
      Itens.findOne({ _id: req.params.id })
        .exec((err, item) => {
          if (err) {
            res.json({ erro: 'Falha ao buscar informações do item:\n' + err });
          } else {
            if (item.length) {
              const id = item._id;
              delete item._id;

              res.json({
                id
              , tipo: item.tipo
              , descricao: item.descricao
              , comentario: item.comentario
              , quantidade: item.quantidade
              , data: moment(item.data).format('LLL')
              });
            } else {
              res.json({
                code: 14
              , mensagem: 'Nenhum registro encontrado'
              });
            }
          }
        });
      break;

    case 'html':
      Itens.findOne({ _id: req.params.id })
        .exec((err, item) => {
          if (err) {
            next(err);
          } else {
            const id = item._id;
            delete item._id;

            res.render('item/info', {
                titulo: 'Informações do item'
              , id
              , tipo: item.tipo
              , descricao: item.descricao
              , comentario: item.comentario
              , quantidade: item.quantidade
              , data: moment(item.data).format('LLL')
            });
          }
        });
      break;

    default:
      res.status(405);
      res.send('Método da requisição não aceito');
  }
}

exports.editar = (req, res) => {
  const retornar = (undefined !== req.header('Referer'))
  ? req.header('Referer')
  : '/';

  res.redirect(retornar);
}

exports.excluir = (req, res) => {
  const retornar = (undefined !== req.header('Referer'))
    ? req.header('Referer')
    : '/';

  Itens.findOneAndRemove({ _id: req.body.id }, (err, data)  => {
    if (err) {
      req.flash('error', 'Falha ao remover item:\n' + err);
      res.redirect(retornar);
    } else {
      req.flash('info', 'Item removido com sucesso');
      res.redirect(retornar);
    }
  });
}
