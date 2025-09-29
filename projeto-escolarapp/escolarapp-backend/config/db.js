const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'sweetjp',
  password: 'Escolarapp01.',
  database: 'db-escolarapp'
});

module.exports = pool;