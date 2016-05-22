'use strict';

const express = require('express');
const router = express.Router();
const Items = require('../models/items');

// GET inicio
router.get('/', (req, res) => {
  Items.find()
    .where('tipo').equals(0)
    .sort({ criado_em: 'desc' })
    .exec((err, itensAlmoxarifado) => {
      if (err) {
        res.send(err);
      } else {
        Items.find()
          .where('tipo').equals(1)
          .sort({ cirado_em: 'desc' })
          .exec((err, itensAchadosEPerdidos) => {
            res.render('index', {
              titulo: 'Início'
            , itensAlmoxarifado
            , itensAchadosEPerdidos
            });
          });
      }
    });
});

// GET sobre
router.get('/sobre', (req, res) => {
  const data = {
    titulo: 'Sobre'
  }

  res.render('page', data);
});

module.exports = router;
