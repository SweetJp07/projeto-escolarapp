import React from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

import '../styles/Dashboard.css';
import HomeAluno from '../components/dashboards/HomeAluno';
import HomeMotorista from '../components/dashboards/HomeMotorista';
import HomeResponsavel from '../components/dashboards/HomeResponsavel';
import HomeCoordenador from '../components/dashboards/HomeCoordenador';

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const getUserFromToken = () => {
    const token = localStorage.getItem('token');
    if (!token) return null;
    try {
      return jwtDecode(token); 
    } catch (error) {
      console.error("Erro ao decodificar o token:", error);
      handleLogout();
      return null;
    }
  };

  const user = getUserFromToken();

  if (!user) {
    return null; 
  }

  const renderDashboard = () => {
    switch (user.role) {
      case 'aluno':
        return <HomeAluno />;
      case 'motorista':
        return <HomeMotorista />;
      case 'responsavel':
        return <HomeResponsavel />;
      case 'coordenador':
        return <HomeCoordenador />;
      default:
        return <p>Erro: Tipo de usuário '{user.role}' desconhecido.</p>;
    }
  };

  return (
    <div>
      <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#eee' }}>
        <h2>Escolar App - (Logado como: {user.role})</h2>
        <button onClick={handleLogout}>
          Sair
        </button>
      </header>
      
      <main style={{ padding: '20px' }}>
        {renderDashboard()}
      </main>
    </div>
  );
}

export default Home;