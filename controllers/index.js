'use strict';

const Items = require('../models/item');
const itemHelper = require('../helpers/item');
const enumValues = Items.schema.path('status').enumValues;
const status = itemHelper.statusFromEnum(enumValues);

const moment = require('moment');
moment.locale('pt-br');

exports.index = index;
exports.achadosEPerdidos = achadosEPerdidos;

/**
 * GET
 * Página inicial.
 */
function index(req, res, next) {
  Items.find({ type: 'almoxarifado' })
    .sort({ created_at: 'desc' })
    .exec((err, items) => {
      if (err) {
        res.status(500);
        next(err);
      }

      res.title('Almoxarifado');

      if (! items.length)
        return res.render('index', { hasItems: false });

      for (var i in items) {
        if (! items.hasOwnProperty(i)) continue;

        items[i].id = items[i]._id;
        items[i].status = (status.hasOwnProperty(items[i].status))
          ? status[items[i].status]
          : 'Não informado';
      }

      res.render('index', {
        hasItems: true
      , items
      });
    });
}

/**
 * GET
 * Página Achados e perdidos.
 */
function achadosEPerdidos(req, res, next) {
  Items.find({ type: 'achados_e_perdidos' })
    .sort({ created_at: 'desc' })
    .exec((err, items) => {
      if (err) {
        res.status(500);
        next(err);
      }

      res.title('Achados e perdidos');

      if (! items.length)
        return res.render('achados-e-perdidos', { hasItems: false });

      for (var i in items) {
        if (! items.hasOwnProperty(i)) continue;

        items[i].id = items[i]._id;
        items[i].status = (status.hasOwnProperty(items[i].status))
          ? status[items[i].status]
          : 'Não informado';
      }

      res.render('achados-e-perdidos', {
        hasItems: true
      , moment
      , items
      });
    });
}
