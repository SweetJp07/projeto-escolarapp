import React from 'react';
import mapImage from '../../assets/mapa.png';

export default function HomeResponsavel() {
  return (
    <div className="widget-container">
      <div className="widget" style={{ flexBasis: '100%' }}>
        <h3>Onde está meu filho?</h3>
        <img src={mapImage} alt="Mapa com localização do ônibus" className="widget-map-image" />
      </div>
      
      <div className="widget">
        <h3>Status (Davi)</h3>
        <p><strong>Status:</strong> A caminho da escola</p>
        <p><strong>Embarcou em:</strong> 07:15 AM</p>
        <p><strong>Motorista:</strong> Carlos Silva</p>
      </div>
    </div>
  );
}