'use strict';

const express = require('express');
const router  = express.Router();

// GET item
router.get('/item/:id', (req, res) => {
  const data = {
    title: 'Item: ' + req.params.id
  }

  res.render('index', data);
});

// POST item
router.post('/item', (req, res) => {
  res.send('AHA');
});

module.exports = router;
