// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/categories', require('./routes/categoryRoutes'));
app.use('/api/questions', require('./routes/questionRoutes'));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
