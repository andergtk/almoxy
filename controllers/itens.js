'use strict';

const express = require('express');
const router = express.Router();
const Items = require('../models/items');

// GET item
router.get('/item/:id', (req, res) => {
  const data = {
    titulo: 'Item: ' + req.params.id
  }

  res.render('index', data);
});

// POST item
router.post('/item', (req, res) => {
  const item = new Items(req.body.item);
  item.save((err) => {
    if (err) {
      req.flash('erro', 'Erro ao cadastrar um novo item: ', err);
    } else {
      req.flash('info', 'Item cadastrado com sucesso');
    }

    res.redirect('/');
  });
});

// POST item delete
router.get('/item/delete/:id', (req, res) => {
  Items
    .findByIdAndRemove(req.params.id, (err, doc) => {
      if (err) {
        res.send('Erro ao remover registro:', err);
      } else {
        req.flash('info', 'Item removido com sucesso.');
        res.redirect('/');
      }
    });
});

module.exports = router;
