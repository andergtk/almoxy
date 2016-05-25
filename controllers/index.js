'use strict';

module.exports = (app) => {
  const Itens = app.models.itens;

  return {
    index: (req, res) => {
      Itens.find({ tipo: false })
        .sort({ criado_em: 'desc' })
        .exec((err, itensAlmoxarifado) => {
          if (err) {
            res.status(500);
            res.send(err);
          } else {
            res.render('index', {
              titulo: 'Página Inicial'
            , itensAlmoxarifado
            });
          }
        });
    }

  , achadosEPerdidos: (req, res) => {
      Itens.find({ tipo: true })
        .sort({ criado_em: 'desc' })
        .exec((err, itensAchadosEPerdidos) => {
          if (err) {
            res.status(500);
            res.send(err);
          } else {
            res.render('achados-e-perdidos', {
              titulo: 'Achados e Perdidos'
            , moment: require('moment')
            , itensAchadosEPerdidos
            });
          }
        });
    }

   , login: (req, res) => {
      if ('GET' === req.method) {
        res.render('login', {
          titulo: 'Login'
        , usuario: req.body.usuario
        });
      } else {
        // iniciar sessão
      }
    }
  }
}
