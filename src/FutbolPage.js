import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Fut from './imgFut/Fut.jpg';
import FutFem from './imgFut/FutFem.jpg';
import FutSalon from './imgFut/FutSalon.jpg';


const FutbolPage= () => {
  return (
    <div className="scrollable-container">
        <div className="page-container">
      <Link to="/" className="link-to-home">
        Inicio
      </Link>
      </div>
        <h1>Fútbol en Bolivia</h1>
        <h3>Fútbol masculino</h3>
        <p>El fútbol es el deporte más popular en Bolivia, con una gran afición en todo el país.</p>
        <p>La Liga de Fútbol Profesional Boliviana (LFPB) es la máxima categoría del fútbol boliviano. Está compuesta por 16 equipos que se enfrentan entre sí en un sistema de todos contra todos a doble vuelta.</p>
        <p>Los equipos más populares de Bolivia son Bolívar, de La Paz, y The Strongest, de La Paz. Ambos equipos han ganado la LFPB en numerosas ocasiones. Bolívar es el equipo más laureado de Bolivia, con 30 títulos. The Strongest es el segundo equipo más laureado, con 26 títulos.</p>
        <p>Otros equipos destacados de la LFPB son Oriente Petrolero, de Santa Cruz, que ha ganado 7 títulos; Real Santa Cruz, de Santa Cruz, que ha ganado 6 títulos; y Blooming, de Santa Cruz, que ha ganado 5 títulos.</p>
 <div className="image-container">
        <img src={Fut} alt="Fut" />
    </div>

        <h4>Jugadores destacados</h4>
        <p>Algunos de los jugadores bolivianos más destacados de la historia son:</p>
        
        <ul>
          <li>Marco Antonio Etcheverry, conocido como el Diablo, es uno de los mejores jugadores bolivianos de todos los tiempos. Jugó en la selección nacional durante más de 10 años y fue el capitán del equipo que alcanzó las semifinales de la Copa América de 1997.</li>
          <li>Juan Carlos Arce, conocido como el Conejo, es otro jugador boliviano destacado. Jugó en la selección nacional durante más de 10 años y fue el máximo goleador del equipo en la Copa América de 2011.</li>
          <li>Marcelo Martins Moreno, conocido como el Matador, es el actual máximo goleador de la selección nacional. Ha jugado en clubes de Europa y América del Sur y es considerado uno de los mejores delanteros bolivianos de la actualidad.</li>
        </ul>

      <h3>Fútbol femenino</h3>
        <p>El fútbol femenino también está ganando popularidad en Bolivia. La selección nacional, conocida como la Verde Femenina, ha participado en dos Copas América y en un Mundial.</p>
        <p>La Liga Femenina de Fútbol Profesional Boliviano (LFPB-F) es la máxima categoría del fútbol femenino boliviano. Está compuesta por 8 equipos que se enfrentan entre sí en un sistema de todos contra todos a doble vuelta.</p>
        <div className="image-container">
        <img src={FutFem} alt="FutFem" />
    </div>
        <h4>Jugadores destacados</h4>
        <p>Algunas de las jugadoras bolivianas más destacadas de la historia son:</p>
        <ul>
          <li>María José Rojas, conocida como la Colo, es la capitana de la selección nacional. Jugó en clubes de Europa y América del Sur y es considerada una de las mejores futbolistas bolivianas de la actualidad.</li>
          <li>Ana Paula Rojas, conocida como la Peque, es otra jugadora boliviana destacada. Jugó en clubes de Europa y América del Sur y es considerada una de las mejores defensoras bolivianas de la actualidad.</li>
          <li>Marisol Acuña, conocida como la Tolita, es la actual máxima goleadora de la selección nacional. Ha jugado en clubes de Bolivia y América del Sur y es considerada una de las mejores delanteras bolivianas de la actualidad.</li>
        </ul>
        
        <h3>Fútbol de salón</h3>
        <p>El fútbol de salón también es un deporte popular en Bolivia. La selección nacional, conocida como la Verde de Salón, ha ganado dos campeonatos mundiales, en 1985 y 2007.</p>
        <p>La Liga Boliviana de Fútbol de Salón (LBFS) es la máxima categoría del fútbol de salón boliviano. Está compuesta por 8 equipos que se enfrentan entre sí en un sistema de todos contra todos a doble vuelta.</p>
        <div className="image-container">
        <img src={FutSalon} alt="FutSalon" />
    </div>
        <h4>Jugadores destacados</h4>
        <p>Algunos de los jugadores bolivianos más destacados de la historia del fútbol de salón son:</p>
        <ul>
          <li>Carlos Enrique Cuéllar, conocido como el Chino, es el máximo goleador de la selección nacional. Jugó en clubes de Bolivia, Brasil y Argentina y es considerado uno de los mejores jugadores de fútbol de salón de la historia.</li>
          <li>Jorge Luis Orozco, conocido como el Colorado, es otro jugador boliviano destacado. Jugó en clubes de Bolivia, Brasil y Argentina y es considerado uno de los mejores jugadores de fútbol de salón de la actualidad.</li>
          <li>René Lima, conocido como el Loco, es el actual capitán de la selección nacional. Jugó en clubes de Bolivia y Brasil y es considerado uno de los mejores jugadores de fútbol de salón de la actualidad.</li>
        </ul>
        
      </div>
   
  );
};
export default FutbolPage;