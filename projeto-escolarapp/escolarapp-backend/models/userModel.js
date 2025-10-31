const db = require('../config/db');

exports.findByUsername = async (username) => {
  const [rows] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
  return rows[0]; 
};

exports.findExistingUser = async (username, cpf, email) => {
  const [rows] = await db.query(
    'SELECT * FROM users WHERE username = ? OR cpf = ? OR email = ?',
    [username, cpf, email]
  );
  return rows; 
};

exports.createUser = async (username, hashedPassword, cpf, email, address, role) => {
  const [result] = await db.query(
    'INSERT INTO users (username, password, cpf, email, address, role) VALUES (?, ?, ?, ?, ?, ?)',
    [username, hashedPassword, cpf, email, address, role]
  );
  return result;
};