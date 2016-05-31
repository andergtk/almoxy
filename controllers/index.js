'use strict';

const Items = require('../models/item');

// GET Página inicial
exports.index = (req, res, next) => {
  Items.find({ type: 'almoxarifado' })
    .sort({ created_at: 'desc' })
    .exec((err, items) => {
      if (err) {
        res.status(500);
        next(err);
      } else {
        res.render('index', {
          title: 'Página inicial'
        , hasItems: !! items.length
        , items
        });
      }
    });
}

// GET Achados e perdidos
exports.achadosEPerdidos = (req, res, next) => {
  Items.find({ type: 'achados-e-perdidos' })
    .sort({ created_at: 'desc' })
    .exec((err, items) => {
      if (err) {
        res.status(500);
        next(err);
      } else {
        const moment = require('moment');
        moment.locale('pt-br');

        if ()
        res.render('achados-e-perdidos', {
          title: 'Achados e perdidos'
        , hasItems: !! items.length
        , moment
        , items
        });
      }
    });
}
