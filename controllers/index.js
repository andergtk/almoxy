'use strict';

const Itens = require('./../models/itens');

exports.index = (req, res) => {
  Itens.find({ tipo: false })
    .sort({ criado_em: 'desc' })
    .exec((err, itens) => {
      if (err) {
        res.status(500);
        res.send(err);
      } else {
        res.render('index', {
          titulo: 'Página Inicial'
        , itens
        });
      }
    });
}

exports.achadosEPerdidos = (req, res) => {
  Itens.find({ tipo: true })
    .sort({ criado_em: 'desc' })
    .exec((err, itens) => {
      if (err) {
        res.status(500);
        res.send(err);
      } else {
        res.render('achados-e-perdidos', {
          titulo: 'Achados e Perdidos'
        , moment: require('moment')
        , itens
        });
      }
    });
}

exports.login = (req, res) => {
  if ('GET' === req.method) {
    res.render('login', {
      titulo: 'Login'
    , usuario: req.body.usuario
    });
  } else {
    // iniciar sessão
  }
}
