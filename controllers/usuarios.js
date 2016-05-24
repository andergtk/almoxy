'use strict';

/**
 * GET perfil do usuário
 */
exports.perfil = (req, res) => {
  res.send('Perfil do usuário');
}

/**
 * POST novo usuário
 */
exports.novo = (req, res) => {
  res.send('Novo usuário');
}

/**
 * GET informações do usuário
 */
exports.info = (req, res) => {
  res.send('Informações do usuário');
}

/**
 * POST editar usuário
 */
exports.edit = (req, res) => {
  res.send('Editar usuário');
}

/**
 * POST remover usuário
 */
exports.delete = (req, res) => {
  res.send('Remover usuário');
}
