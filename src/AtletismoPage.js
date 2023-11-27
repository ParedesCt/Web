import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';  
import Atlet from './imsAtl/Atlet.jpg';
import Atlets from './imsAtl/Atlets.jpg';

const AtletismoPage= () => {
  return (
    <div className="scrollable-container">
      <div className="page-container">
      <Link to="/" className="link-to-home">
        Inicio
      </Link>
      </div>
      <h1>Atletismo en Bolivia</h1>
      <p>El atletismo es un deporte popular en Bolivia, con una rica historia y tradición. La Federación Boliviana de Atletismo (FAB) es el organismo rector del deporte del atletismo en Bolivia. Fue fundada el 20 de febrero de 1929.</p>
      <div className="image-container">
        <img src={Atlet} alt="Atlet" />
    </div>
      <h3>Equipos</h3>
      <p>En Bolivia existen varios equipos de atletismo, tanto a nivel nacional como local. Los equipos nacionales más destacados son:</p>
      <ul >
        <li>Club David Cortez (Cochabamba)</li>
        <li>Club Deportivo Santa Cruz (Santa Cruz)</li>
        <li>Club Atlético La Paz (La Paz)</li>
      </ul>
      <p>Estos equipos participan en las principales competiciones nacionales e internacionales de atletismo.</p>
      <div className="image-container">
        <img src={Atlets} alt="Atlets" />
    </div>
      <h3>Jugadores destacados</h3>
      <p>Bolivia ha tenido varios atletas destacados en el atletismo, incluyendo:</p>
      <ul >
        <li>Rosibel García, medallista olímpica en los 400 metros vallas en los Juegos Olímpicos de Sídney 2000.</li>
        <li>Ángela Tenorio, medallista olímpica en los 800 metros en los Juegos Olímpicos de Atenas 2004</li>
        <li>David Ninavia, medallista de oro en los 5.000 metros en los Juegos Panamericanos de Lima 2019</li>
        <li>Vidal Basco, medallista de plata en los 10.000 metros en los Juegos Panamericanos de Lima 2019.</li>
        
      </ul>
      <p>Estos entre otros atletas han contribuido a poner a Bolivia en el mapa del atletismo mundial.</p>
      
      
    </div>
  );
};
export default AtletismoPage;