'use strict';

const express = require('express');
const router  = express.Router();

// GET inicio
router.get('/', (req, res) => {
  const data = {
    title: 'Início'
  }

  res.render('index', data);
});

// GET sobre
router.get('/sobre', (req, res) => {
  const data = {
    title: 'Sobre'
  }

  res.render('page', data);
});

module.exports = router;
