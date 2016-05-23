'use strict';

const Items = require('../models/items');

exports.index = (req, res) => {
  Items.find({ tipo: false })
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

exports.achadosEPerdidos = (req, res) => {
  Items.find({ tipo: true })
    .sort({ criado_em: 'desc' })
    .exec((err, itensAchadosEPerdidos) => {
      if (err) {
        res.status(500);
        res.send(err);
      } else {
        res.render('index', {
          titulo: 'Achados e Perdidos'
        , itensAchadosEPerdidos
        });
      }
    });
}
