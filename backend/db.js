// backend/db.js
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',       // your DB username
  password: '',       // your DB password
  database: 'certificates'
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL Connected!');
});

module.exports = db;
