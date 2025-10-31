const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'mysql',
  user: 'usuario_app',
  password: 'senha_app_123',
  database: 'db_escolarapp',
  port: 3306

});

module.exports = pool;