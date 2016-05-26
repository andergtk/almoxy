'use strict';

module.exports = (app) => {
  const usuarios = app.models.usuarios;

  return {
    perfil: (req, res) => {
      res.send('Perfil do usuário');
    }

  , form: (req, res) => {
      res.send('Formulário para adicionar novo usuário');
    }

  , criar: (req, res) => {
      res.send('Criar usuário');
    }

  , info: (req, res) => {
      res.send('Informações do usuário');
    }

  , editar: (req, res) => {
      res.send('Editar usuário');
    }

  , excluir: (req, res) => {
      res.send('Remover usuário');
    }
  }
}
