import React, { useState } from 'react';
import '../styles/Auth.css';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

function Login() { 

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage('');

    try {
      const response = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }
      
      if (data.token) {
        
        localStorage.setItem('token', data.token);

        navigate('/home'); 

      } else {
        throw new Error("Erro: Token não recebido do servidor.");
      }

    } catch (error) {
      setMessage(error.message);
      console.error('Erro no login:', error);
    }
  };

  return (
    <div className="auth-container">
      <div className="logo-container">
        <img src={logo} alt="Escolar App Logo" />
        <h1>Escolar APP</h1>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        
        <div className="form-group">
          <label htmlFor="username">Usuário</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="auth-button">Acessar</button>
      </form>

      {message && <p>{message}</p>} 

      <div className="switch-form-text">
        Não tem uma conta?{' '}
        <button onClick={() => navigate('/cadastro')} className="switch-form-button">
          Cadastre-se
        </button>
      </div>
    </div>
  );
}

export default Login;