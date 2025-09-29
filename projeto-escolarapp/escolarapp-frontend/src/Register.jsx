import React, { useState } from 'react';
import './Auth.css';
import logo from './assets/logo.png';

function Register({ onSwitch }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [role, setRole] = useState('aluno');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage('');

    try {
      const response = await fetch('http://localhost:3000/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },

        body: JSON.stringify({ username, password, cpf, email, address, role }),
      });

      const data = await response.json();
      if (!response.ok) { throw new Error(data.message); }

      setMessage(data.message);
      alert('Cadastro realizado com sucesso! Agora você pode fazer o login.');
      onSwitch();

    } catch (error) {
      setMessage(error.message);
      console.error('Erro no cadastro:', error);
    }
  };

  return (
    <div className="auth-container">
      <div className="logo-container">
        <img src={logo} alt="Escolar App Logo" />
        <h1>Cadastro</h1>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="username">Login</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="cpf">CPF</label>
          <input type="text" id="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Endereço</label>
          <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="role">Tipo de Usuario</label>
          <select id="role" value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="aluno">Aluno</option>
            <option value="responsavel">Responsável</option>
            <option value="motorista">Motorista</option>
            <option value="coordenador">Coordenador</option>
          </select>
        </div>

        <button type="submit" className="auth-button">Cadastrar</button>
      </form>

      {message && <p>{message}</p>}

      <div className="switch-form-text">
        Já tem uma conta?{' '}
        <button onClick={onSwitch} className="switch-form-button">
          Faça o login
        </button>
      </div>
    </div>
  );
}

export default Register;