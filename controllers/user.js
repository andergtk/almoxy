'use strict';

const Usuarios = require('./../models/usuarios');

exports.perfil = (req, res) => {
  res.send('Perfil do usuário');
}

exports.form = (req, res) => {
  res.send('Formulário para adicionar novo usuário');
}

exports.criar = (req, res) => {
  res.send('Criar usuário');
}

exports.info = (req, res) => {
  res.send('Informações do usuário');
}

exports.editar = (req, res) => {
  res.send('Editar usuário');
}

exports.excluir = (req, res) => {
  res.send('Remover usuário');
}
