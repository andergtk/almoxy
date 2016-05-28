'use strict';

const Itens = require('./../models/itens');

exports.form = (req, res) => {
  let opcao;
  let referer;

  if (req.header('Referer')) {
    referer = req.header('Referer');
  } else {
    referer = '/';
  }

  if (referer.match(/\/achados-e-perdidos/)) {
    opcao = 'achados-e-perdidos';
  } else {
    opcao = 'almoxarifado';
  }

  res.render('item/novo', {
    titulo: 'Novo item'
  , referer
  , opcao
  });
}

exports.salvar = (req, res) => {
  const item = new Itens();
  let link;

  const novoItem = {
    tipo: req.body.tipo
  , descricao: req.body.descricao
  , comentario: req.body.comentario
  , quantidade: req.body.quantidade
  };

  Object.assign(item, novoItem);

  if (req.body.tipo && 'achados-e-perdidos' === req.body.tipo) {
    link = '/achados-e-perdidos';
  } else {
    link = '/';
  }

  item.save((err) => {
    if (err) {
      req.flash('error', 'Falha ao cadastrar item');
      res.redirect(link);
    } else {
      req.flash('success', 'Item cadastrado com sucesso');
      res.redirect(link);
    }
  });
}

exports.info = (req, res) => {
  // Testar se req.get('Content-Type') é json ou html
  // se json retorna json
  // se html renderiza a pagina do item
  res.json({ descricao: 'Informações do item', quantidade: 123 });
}

exports.editar = (req, res) => {
  // Redirect para a página do req.header('Referer');
  res.send({ descricao: 'Editar item', quantidade: 123 });
}

exports.excluir = (req, res) => {
  let referer;

  if (req.header('Referer')) {
    referer = req.header('Referer');
  } else {
    referer = '/';
  }

  Itens.findOneAndRemove({ _id: req.body.id }, (err, data)  => {
    if (err) {
      req.flash('error', 'Falha ao remover item: ' + err);
      res.redirect(referer);
    } else {
      req.flash('info', 'Item removido com sucesso');
      res.redirect(referer);
    }
  });
}
