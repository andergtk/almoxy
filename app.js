var express = require('express');
var consign = require('consign');
var mongoose = require('mongoose');

var app = express();

// conecta ao banco de dados
mongoose.connect('mongodb://localhost/almoxy', function(err) {
  if (err) {
    console.log('Erro ao conectar ao banco de dados: ' + err);
  } else {
    console.log('Conectado ao banco de dados.');
  }
});

// define o ejs como view engine
app.set('view engine', 'ejs');

// define a pasta dos arquivos estaticos
app.use(express.static(__dirname + '/public'));

consign({ locale: 'pt-br'})
  .include('controllers')
  .then('models')
  .then('routes')
  .into(app);

// trata o erro 404
app.get('*', function(req, res) {
  res.status(404).render('erros/404', {
    titulo: 'Erro 404',
    mensagem: 'Não encontrado',
  });
});

app.listen(3000, function() {
  console.log('Servidor rodando na porta 3000');
})
