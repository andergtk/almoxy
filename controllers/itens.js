'use strict';

const Itens = require('../models/itens');

/**
 * Formulário
 */
exports.form = (req, res) => {
  // Alterar campo achados e perdidos (true) quando o req.header(Referer) for
  // o link /achados-e-perdidos
  console.log(req.header('Referer'));
  res.render('item/novo', {
    titulo: 'Novo item'
  , opcao: true // enviar essa opção para a view alterar o campo default
  });
}

/**
 * Novo item
 */
exports.novo = (req, res) => {
  res.send('Criar item');
}

/**
 * Informações do item
 */
exports.info = (req, res) => {
  // Testar se req.get('Content-Type') é json ou html
  // se json retorna json
  // se html renderiza a pagina do item
  res.json({ descricao: 'Informações do item', quantidade: 123 });
}

/**
 * Editar item
 */
exports.edit = (req, res) => {
  res.send({ descricao: 'Editar item', quantidade: 123 });
}

/**
 * Remover item
 */
exports.delete = (req, res) => {
  Itens.findOneAndRemove({ _id: req.body.id }, (err, data)  => {
    if (err) res.send(err);
    req.flash('info', 'Item removido com sucesso.');
    res.redirect('/');
  })
}
