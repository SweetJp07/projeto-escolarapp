import React from 'react';
import mapImage from '../../assets/mapa.png';

export default function HomeMotorista() {
  return (
    <div className="widget-container">
      <div className="widget" style={{ flexBasis: '100%' }}>
        <h3>Minha Rota de Hoje</h3>
        <img src={mapImage} alt="Mapa da rota" className="widget-map-image" />
      </div>
      
      <div className="widget" style={{ flexBasis: '100%' }}>
        <h3>Lista de Presença (Rota 01)</h3>
        <ul>
          <li>Joao Pedro - [Check-in]</li>
          <li>Gabriel Filho - [Check-in]</li>
          <li>Gabriel Adorno - [Check-in]</li>
          <li>Eder Silva - [Check-in]</li>
        </ul>
      </div>
    </div>
  );
}