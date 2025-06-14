const express = require('express');
const router = express.Router();
const db = require('../db');

// Get questions by category
router.get('/', (req, res) => {
  const { category_id } = req.query;
  db.query('SELECT * FROM questions WHERE category_id = ?', [category_id], (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Add a new question
router.post('/', (req, res) => {
  const { category_id, question_text } = req.body;
  db.query(
    'INSERT INTO questions (category_id, question_text) VALUES (?, ?)',
    [category_id, question_text],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ id: result.insertId, category_id, question_text });
    }
  );
});

module.exports = router;
