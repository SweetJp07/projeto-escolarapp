import React from 'react';
import mapImage from '../../assets/mapa.png';

export default function HomeAluno() {
  return (
    <div className="widget-container">
      <div className="widget">
        <h3>Meu Ônibus</h3>
        <img src={mapImage} alt="Mapa com localização do ônibus" className="widget-map-image" />
      </div>
      
      <div className="widget">
        <h3>Meus Horários</h3>
        <p><strong>Previsão de embarque:</strong> 07:10 AM</p>
        <p><strong>Previsão de chegada:</strong> 07:45 AM</p>
      </div>
    </div>
  );
}