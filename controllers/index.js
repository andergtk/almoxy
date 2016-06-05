'use strict';

const Items = require('../models/item');
const itemHelper = require('../helpers/item');
const moment = require('moment');
moment.locale('pt-br');

// GET Página inicial
exports.index = (req, res, next) => {
  Items.find({ type: 'almoxarifado' })
    .sort({ created_at: 'desc' })
    .exec((err, items) => {
      if (err) {
        res.status(500);
        next(err);
      }

      res.title('Almoxarifado');

      if (! items.length) {
        return res.render('index', {
          hasItems: false
        });
      }

      const enumValues = Items.schema.path('status').enumValues;
      const status = itemHelper.statusFromEnum(enumValues);

      for (var key in items) {
        if (! items.hasOwnProperty(key)) continue;

        items[key].id = items[key]._id;

        if (status.hasOwnProperty(items[key].status)) {
          items[key].status = status[items[key].status];
        } else {
          items[key].status = 'Não informado';
        }
      }

      res.render('index', {
        hasItems: true
      , items
      });
    });
}

// GET Achados e perdidos
exports.achadosEPerdidos = (req, res, next) => {
  Items.find({ type: 'achados_e_perdidos' })
    .sort({ created_at: 'desc' })
    .exec((err, items) => {
      if (err) {
        res.status(500);
        next(err);
      }

      res.title('Achados e perdidos');

      if (! items.length) {
        return res.render('achados-e-perdidos', {
          hasItems: false
        });
      }

      const enumValues = Items.schema.path('status').enumValues;
      const status = itemHelper.statusFromEnum(enumValues);

      for (var key in items) {
        if (! items.hasOwnProperty(key)) continue;

        items[key].id = items[key]._id;

        items[key].comment = items[key]
          // Encurta o comentário
          .comment.split(" ").splice(0, 10).join(" ")

          // Converte quebra de linha em tag html
          .replace(/\s*\n/g, '<br>');

        if (status.hasOwnProperty(items[key].status))
          items[key].status = status[items[key].status];
      }

      res.render('achados-e-perdidos', {
        hasItems: true
      , moment
      , items
      });
    });
}
