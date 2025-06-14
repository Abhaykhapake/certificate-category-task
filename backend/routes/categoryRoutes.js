const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all categories
router.get('/', (req, res) => {
  db.query('SELECT * FROM certificate_categories', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Create a new category
router.post('/', (req, res) => {
  const { name } = req.body;
  db.query('INSERT INTO certificate_categories (name) VALUES (?)', [name], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ id: result.insertId, name });
  });
});

module.exports = router;
