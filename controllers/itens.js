'use strict';

module.exports = (app) => {
  const itens = app.models.itens;

  return {
    form: (req, res) => {
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

  , criar: (req, res) => {
      res.send('Criar item');
    }

  , info: (req, res) => {
      // Testar se req.get('Content-Type') é json ou html
      // se json retorna json
      // se html renderiza a pagina do item
      res.json({ descricao: 'Informações do item', quantidade: 123 });
    }

  , editar: (req, res) => {
      res.send({ descricao: 'Editar item', quantidade: 123 });
    }

  , excluir: (req, res) => {
      itens.findOneAndRemove({ _id: req.body.id }, (err, data)  => {
        if (err) res.send(err);
        req.flash('info', 'Item removido com sucesso.');
        res.redirect('/');
      });
    }

  }
}
