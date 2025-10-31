import React from 'react';
import mapImage from '../../assets/mapa.png';

export default function HomeCoordenador() {
  return (
    <div className="widget-container">
      <div className="widget" style={{ flexBasis: '100%' }}>
        <h3>Visão Geral (Mapa)</h3>
        <img src={mapImage} alt="Visão geral do mapa" className="widget-map-image" />
      </div>
      
      <div className="widget">
        <h3>Gerenciar Rotas</h3>
        <ul>
          <li>Rota 01 (Motorista: Carlos) - 5 Alunos</li>
          <li>Rota 02 (Motorista: Ana) - 8 Alunos</li>
        </ul>
        <button>Nova Rota</button>
      </div>

      <div className="widget">
        <h3>Gerenciar Motoristas</h3>
        <ul>
          <li>Carlos Silva</li>
          <li>Ana Pereira</li>
        </ul>
        <button>Novo Motorista</button>
      </div>
    </div>
  );
}