'use strict';

const Itens = require('./../models/itens');

exports.form = (req, res) => {
  let opcao;

  if (req.header('Referer').match(/\/achados-e-perdidos/)) {
    opcao = 2
  } else {
    opcao = 1
  }

  res.render('item/criar', {
    titulo: 'Criar item'
  , opcao
  });
}

exports.criar = (req, res) => {
  const referer = req.header('Referer');

  res.send('Criar item', {
    referer // colocar em um input hidden no formulario para ser usado como retorno depois do item criado
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
  itens.findOneAndRemove({ _id: req.body.id }, (err, data)  => {
    if (err) res.send(err);
    req.flash('info', 'Item removido com sucesso.');
    res.redirect('/');
  });
}
