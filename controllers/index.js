'use strict';

const Itens = require('../models/itens');

/**
 * Página inicial
 */
exports.index = (req, res) => {
  Itens.find({ tipo: false })
    .sort({ criado_em: 'desc' })
    .exec((err, itensAlmoxarifado) => {
      if (err) {
        res.status(500);
        res.send(err);
      } else {
        res.render('index', {
          titulo: 'Página Inicial'
        , itensAlmoxarifado
        });
      }
    });
}

/**
 * Achados e Perdidos
 */
exports.achadosEPerdidos = (req, res) => {
  Itens.find({ tipo: true })
    .sort({ criado_em: 'desc' })
    .exec((err, itensAchadosEPerdidos) => {
      if (err) {
        res.status(500);
        res.send(err);
      } else {
        res.render('achados-e-perdidos', {
          titulo: 'Achados e Perdidos'
        , moment: require('moment')
        , itensAchadosEPerdidos
        });
      }
    });
}

/**
 * Login
 */
exports.login = (req, res) => {
  if (req.method === 'GET') {
    res.render('login', {
      titulo: 'Login'
    , usuario: req.body.usuario
    })
  } else {
    // iniciar sessão
  }
}
