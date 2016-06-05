'use strict';

const Items = require('../models/item/index');

/**
 * GET Formulário para adicionar item
 */
exports.form = (req, res) => {
  const item = req.flash('item')[0] || {};

  res.render('item/add', {
    title: 'Adicionar item'
  , item
  });
}

/**
 * POST Salva item no banco de dados
 */
exports.create = (req, res) => {
  const body = req.body;

  if ('almoxarifado' === body.type) {
    delete body.status;
  }

  const item = new Items(body);

  item.save((err) => {
    if (err) {
      req.flash('error', 'Erro ao salvar o item');
      req.flash('db', err);
      req.flash('item', body);
      res.redirect('/item/novo');
    } else {
      req.flash('success', 'Item cadastrado com sucesso');
      res.redirect('/');
    }
  });
}

/**
 * GET Informações do item
 */
exports.info = (req, res) => {
  req.sanitize('id').escape();

  const moment = require('moment');
  moment.locale('pt-br');

  Items.findOne({ _id: req.params.id }, (err, item) => {
    if (err) {
      req.flash('error', 'Erro ao buscar as informações do item')
      req.flash('error.db', err);
      res.redirect('/');
    } else {
      const hasItems = !! item._id;
      let title;

      console.log(item._id);
      console.log(hasItems);

      if (hasItems) {
        title = item.description;
        item.id = item._id;
        item.date = moment(item.date).format('LLL');
      } else {
        title = 'Nenhum item encontrado';
      }

      res.render('item/info', {
          title
        , hasItems
        , item
      });
    }
  });
}

/**
 * GET Formulário para editar item
 */
exports.edit = (req, res) => {
  Items.findOne({ _id: req.params.id }, (err, item) => {
    if (err) {
      req.flash('error', 'Erro ao buscar o item para editar');
      req.flash('error.db', err);
      req.redirect('/');
    } else {
      const hasItems = !! item._id;
      let title;

      if (hasItems) {
        title = 'Editar item';
      } else {
        title = 'Nenhum item encontrado'
      }

      res.render('item/edit', {
        title
      , hasItems
      , item
      });
    }
  });
}

/**
 * POST Atualiza item no banco de dados
 */
exports.update = (req, res) => {
  const body = req.body;

  if ('achados-e-perdidos' === body.type) {
    delete body.status;
  }

  Items.findById(body.id, (err, item) => {
    Object.assign(item, body);
    item.save((err) => {
      if (err) {
        req.flash('error', 'Erro ao salvar o item');
        req.flash('db', err);
        res.redirect('/item/editar/' + body.id);
      } else {
        req.flash('success', 'Item atualizado com successo');
        res.redirect('/');
      }
    });
  });
}

/**
 * GET Remover item
 */
exports.delete = (req, res) => {
  Items.findById(req.params.id, (err, item)  => {
    if (err) {
      req.flash('error', 'Erro ao buscar o item a ser removido');
      req.flash('db', err);
      res.redirect('/');
    } else {
      item.remove((err, doc) => {
        if (err) {
          req.flash('error', 'Erro ao remover o item');
          req.flash('db', err);
          res.redirect('/');
        } else {
          req.flash('info', 'Item removido');
          res.redirect('/');
        }
      });
    }
  });
}
