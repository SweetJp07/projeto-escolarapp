USE db_escolarapp;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    cpf VARCHAR(14) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    address VARCHAR(255),
    role ENUM('aluno','responsavel','motorista','coordenador') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);