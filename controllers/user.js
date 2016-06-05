'use strict';

const Users = require('../models/user');

exports.profile = (req, res) => {
  res.send('Perfil do usuário');
}

exports.form = (req, res) => {
  res.send('Formulário para adicionar novo usuário');
}

exports.create = (req, res) => {
  res.send('Criar usuário');
}

exports.info = (req, res) => {
  res.send('Informações do usuário');
}

exports.list = (req, res) => {
  res.send('Lista de usuários');
}

exports.edit = (req, res) => {
  res.send('Editar usuário');
}

exports.delete = (req, res) => {
  res.send('Remover usuário');
}

// GET & POST Login.
exports.login = (req, res) => {
  const sess = req.session;

  if (sess.email) {
    req.flash('info', 'Já existe um usuário logado');
    res.redirect('/');
  }

  switch (req.method) {
    case 'GET':
      res.render('user/login', {
        title: 'Login'
      , email: req.body.email || ''
      });
      break;

    case 'POST':
      res.send('Iniciar sessão');
      break;
  }
}

/**
 * GET | POST Cadastro.
 */
exports.signup = (req, res) => {
  switch (req.method) {
    case 'GET':
      res.render('user/signup', {
        title: 'Cadastrar'
      , email: req.body.email || ''
      , name: req.body.name || ''
      , role: req.body.name || ''
      , phones: req.body.phones || []
      });
      break;

    case 'POST':
      res.send('Cadastrar usuário no banco de dados');
      break;
  }
}
