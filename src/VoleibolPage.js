import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Voley from './imgVole/Voley.jpg';
import Voley1 from './imgVole/Voley1.jpg';
const VoleibolPage= () => {
  return (
    <div className="scrollable-container">
      <div className="page-container">
      <Link to="/" className="link-to-home">
        Inicio
      </Link>
      </div>
      <h1>Voleibol en Bolivia</h1>
      <p>El voleibol es un deporte popular en Bolivia, con una larga historia. El primer club de voleibol en Bolivia se fundó en 1925, en la ciudad de Cochabamba.</p>
      <p>La Federación Boliviana de Voleibol</p>
      <p>La Federación Boliviana de Voleibol (FBV) es el organismo rector del voleibol en Bolivia. Fue fundada en 1934 y está afiliada a la Federación Internacional de Voleibol (FIVB) y a la Confederación Sudamericana de Voleibol (CSV).</p>
      <p>La selección nacional de voleibol de Bolivia, conocida como la Verde, es el equipo representativo de Bolivia en las competiciones oficiales de voleibol. Su organización está a cargo de la FBV.</p>
      <p>Los equipos</p>
       <div className="image-container">
        <img src={Voley} alt="Voley" />
    </div>
      <p>La Liga Superior de Voleibol (LSV) es la máxima categoría del voleibol boliviano. Está compuesta por 10 equipos que se enfrentan entre sí en un sistema de todos contra todos a doble vuelta.</p>
      <p>Los equipos más populares de la LSV son:</p>
      <ul>
          <li>San Martín Voley (La Paz)</li>
          <li>Olympic (La Paz)</li>
          <li>Independiente (La Paz)</li>
          <li>CEB (Santa Cruz)</li>
          <li>Universitario (Santa Cruz)</li>
      </ul>
      <h3>Jugadores Destacados</h3>  
      <p>Algunos de los jugadores bolivianos más destacados de voleibol son:</p>
      <p>Femenino</p>
      <ul >
    <li>Karen Condori</li>
    <li>Alejandra Salvatierra</li>
    <li>María José Peña</li>
  </ul>
  <p>Masculino</p>
  <ul >
    <li>Diego Pacheco</li>
    <li>Juan Carlos Paredes</li>
    <li>Mauricio Rojas</li>
  </ul>
      

       <div className="image-container">
        <img src={Voley1} alt="Voley1" />
    </div>
      <h4>Algunos logros recientes</h4>
      <p>En 2023, la selección femenina de voleibol de Bolivia logró clasificar a los Juegos Panamericanos de Santiago de Chile, por primera vez en su historia. La selección masculina también logró clasificar a los Juegos Panamericanos, por segunda vez en su historia.</p>
      <p>Estos logros son un reflejo del progreso que el voleibol boliviano ha experimentado en los últimos años.</p>
      

    </div>
  );
};
export default VoleibolPage;