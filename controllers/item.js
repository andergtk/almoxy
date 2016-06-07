'use strict';

const Items = require('../models/item');
const itemHelper = require('../helpers/item');
const enumValues = Items.schema.path('status').enumValues;

const moment = require('moment');
moment.locale('pt-br');

exports.form = form;
exports.create = create;
exports.info = info;
exports.edit = edit;
exports.update = update;
exports.remove = remove;

/**
 * GET
 * Formulário para adicionar item.
 */
function form(req, res) {
  res.title('Adicionar item');
  res.render('item/add', {
    moment
  , status: itemHelper.statusFromEnum(enumValues)
  , item: req.flash('item')[0] || {}
  });
}

/**
 * POST
 * Salva item no banco de dados.
 */
function create(req, res) {
  const body = req.body;

  if ('string' !== typeof body.type)
    body.type = '';

  if ('string' !== typeof body.status)
    body.status = '';

  if ('string' !== typeof body.description)
    body.description = '';

  if ('undefined' === typeof body.comment)
    body.comment = '';

  if ('undefined' === typeof body.amount)
    body.amount = 0;

  if ('almoxarifado' === body.type && ! body.status.match(/^alx/)) {
    req.flash('error', 'Valor do campo Status é inválido.');
    req.flash('item', body);
    return res.redirect('/item/novo');
  }

  if ('achados_e_perdidos' === body.type && ! body.status.match(/^aep/)) {
    req.flash('error', 'Valor do campo Status é inválido.');
    req.flash('item', body);
    return res.redirect('/item/novo');
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
 * GET
 * Informações do item.
 */
function info(req, res) {
  const itemId = req.params.id;

  itemHelper.isValidId(itemId, (result) => {
    if (! result) {
      req.flash('info', 'ID do item é inválido');
      return res.redirect('/');
    }

    Items.findById(itemId)
    .limit(1)
    .exec((err, item) => {
      if (err) {
        req.flash('Erro ao buscar informações do item')
        req.flash('db', err);
        return res.redirect('/');
      }

      if (! item) {
        req.flash('info', 'Item não encontrado');
        return res.redirect('/');
      }

      const status = itemHelper.statusFromEnum(enumValues);

      item.id = item._id;

      item.status = (status.hasOwnProperty(item.status))
        ? status[item.status]
        : 'Não informado';

      // Converte quebra de linha em tag html
      item.comment = item.comment.replace(/\s*\n/g, '<br>');

      res.title(item.description);
      res.render('item/info', {
        hasItems: true
      , moment
      , item
      });
    });
  });
}

/**
 * GET
 * Formulário para editar item.
 */
function edit(req, res) {
  const itemId = req.params.id || null;

  itemHelper.isValidId(itemId, (result) => {
    if (! result) {
      req.flash('info', 'ID do item é inválido');
      return res.redirect('/');
    }

    Items.findById(itemId)
      .limit(1)
      .exec((err, item) => {
        if (err) {
          req.flash('error', 'Erro ao buscar item para edição');
          req.flash('db', err);
          return res.redirect('/');
        }

        if (! item) {
          req.flash('info', 'Item não encontrado');
          return res.redirect('/');
        }

        const status = itemHelper.statusFromEnum(enumValues);
        const oldItem = req.flash('oldItem')[0] || false;

        if (oldItem) {
          if ('undefined' !== oldItem.status)
            item.status = oldItem.status;

          if ('undefined' !== oldItem.description)
            item.description = oldItem.description;

          if ('undefined' !== oldItem.comment)
            item.comment = oldItem.comment;

          if ('undefined' !== oldItem.amount)
            item.amount = oldItem.amount;
        }

        res.title(`Editar "${item.description}"`);
        res.render('item/edit', {
          status: itemHelper.statusFilter(status, item.type)
        , item
        });
      });
  });
}

/**
 * POST
 * Atualiza item no banco de dados.
 */
function update(req, res) {
  const body = req.body;
  const itemId = body.id || null;

  itemHelper.isValidId(itemId, (result) => {
    if (! result) {
      req.flash('info', 'ID do item é inválido');
      return res.redirect('/');
    }

    Items.findById(itemId)
      .limit(1)
      .exec((err, item) => {
        if (err) {
          req.flash('error', 'Erro ao buscar usuário para edição');
          req.flash('db', err);
          return res.redirect('/');
        }

        if (! item) {
          req.flash('info', 'ID do item a ser editado não corresponde a nenhum registro');
          return res.redirect('/');
        }

        if ('undefiend' !== typeof body.status) {
          if ('achados_e_perdidos' === item.type && ! body.status.match(/^aep/)) {
            req.flash('error', 'Valor do campo Status é inválido.');
            req.flash('oldItem', body);
            return res.redirect('/item/editar/' + itemId);
          }

          if ('almoxarifado' === item.type && ! body.status.match(/^alx/)) {
            req.flash('error', 'Valor do campo Status é inválido.');
            req.flash('oldItem', body);
            return res.redirect('/item/editar/' + itemId);
          }

          item.status = body.status;
        }

        if ('undefiend' !== typeof body.description)
          item.description = body.description;

        if ('undefiend' !== typeof body.comment)
          item.comment = body.comment;

        if ('undefiend' !== typeof body.amount)
          item.amount = body.amount;

        item.updated_at = Date.now();

        item.save((err) => {
          if (err) {
            req.flash('error', 'Erro ao atualizar o item');
            req.flash('db', err);
            req.flash('oldItem', body);
            res.redirect('/item/editar/' + itemId);
          } else {
            req.flash('success', 'Item atualizado com successo');
            res.redirect('/');
          }
        });
      });
  });
}

/**
 * GET / POST
 * Remover item.
 */
function remove(req, res) {
  let itemId;

  if ('GET' === req.method) {
    itemId = req.params.id || null;
  } else if ('POST' === req.method()) {
    itemId = req.body.id || null;
  }

  itemHelper.isValidId(itemId, (result) => {
    if (! result) {
      req.flash('info', 'ID do item é inválido');
      return res.redirect('/');
    }

    Items.findOneAndRemove({ _id: itemId }, (err, item) => {
      if (err) {
        req.flash('error', 'Erro ao remover o item');
        req.flash('db', err);
        return res.redirect('/');
      }

      if (! item) {
        req.flash('info', 'ID do item a ser excluído não corresponde a nenhum registro');
        return res.redirect('/');
      }

      req.flash('info', 'Item removido');
      res.redirect('/');
    });
  });
}
