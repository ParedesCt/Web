import React from 'react';
import './App.css';
import Turismo from './imgInicio/Turismo.jpg';
import Deportes from './imgInicio/Deportes.jpg';
const InicioPage = () => {
  return (
    <div className="scrollable-container">
      <h1>Bienvenido a Bolivia</h1>
      <p>
        Bolivia, un país con mucho que ofrecer a los turistas. Bolivia es un país con una rica historia, cultura y diversidad natural. Esto lo convierte en un destino atractivo para los turistas de todo el mundo.
      </p>
      <h3>Turismo en Bolivia</h3>
      <div className="image-container">
        <img src={Turismo} alt="Turismo" />
    </div>

      <p>
        El turismo es una de las principales actividades económicas de Bolivia, contribuyendo con el 4,2% al producto interno bruto (PIB). Genera más de 400.000 empleos directos e indirectos.
      </p>
      <p>
        Bolivia es el séptimo país más visitado de Sudamérica y el decimoctavo en Latinoamérica y el Caribe en número de visitantes extranjeros. En 2019, antes de la pandemia de COVID-19, Bolivia registró 1,44 millones de turistas extranjeros.
      </p>
      <h4>Atractivos Turísticos de Bolivia</h4>
      <p>
        Bolivia cuenta con una amplia variedad de atractivos turísticos, que incluyen:
      </p>
      <ul>
        <li>La diversidad cultural: Bolivia es un país pluricultural, con más de 36 grupos étnicos. Esto se refleja en su música, danza, arte y gastronomía.</li>
        <li>Las regiones geográficas: Bolivia tiene tres regiones geográficas: la región andina, la región amazónica y la región del Chaco. Cada región ofrece sus propios atractivos, desde los imponentes picos de los Andes hasta la exuberante selva amazónica.</li>
        <li>La rica historia: Bolivia tiene una rica historia que se remonta a los tiempos preincaicos. Los visitantes pueden explorar ruinas arqueológicas, museos y sitios históricos.</li>
        <li>La gastronomía: La gastronomía boliviana es una mezcla de sabores indígenas y europeos. Los platos típicos incluyen el pique macho, la sopa de maní y el pollo a la plancha.</li>
      </ul>
      <p>El futuro del turismo en Bolivia</p>
      <p>Bolivia tiene el potencial de convertirse en un destino turístico líder en América del Sur.Con su rica historia, cultura y diversidad natural, Bolivia tiene mucho que ofrecer a los turistas de todo el mundo. </p>

      <p>Bolivia, un país con una rica tradición deportiva</p>
      
      <p>Bolivia es un país con una rica tradición deportiva. El fútbol es el deporte más popular, pero también hay una fuerte participación en otros deportes, como el raquetbol, el boxeo, el ciclismo y el atletismo.</p>
      <h3>Deportes en Bolivia</h3>
      <div className="image-container">
        <img src={Deportes} alt="Deportes"/>
        </div>
      <p>El fútbol</p>
      <p>El fútbol es el deporte más popular de Bolivia. La selección nacional ha participado en 14 Copas América y en tres Copas Mundiales. Los clubes bolivianos también han tenido éxito en el ámbito internacional, ganando la Copa Sudamericana en 2004 y 2011.</p>
      <p>
Bolivia, un país con una rica tradición deportiva

Bolivia es un país con una rica tradición deportiva. El fútbol es el deporte más popular, pero también hay una fuerte participación en otros deportes, como el raquetbol, el boxeo, el ciclismo y el atletismo.

El fútbol

El fútbol es el deporte más popular de Bolivia. La selección nacional ha participado en 14 Copas América y en tres Copas Mundiales. Los clubes bolivianos también han tenido éxito en el ámbito internacional, ganando la Copa Sudamericana en 2004 y 2011.

Los equipos más populares de Bolivia son Bolívar, de La Paz, y The Strongest, de La Paz. Ambos equipos han ganado la Liga de Fútbol Profesional Boliviana en numerosas ocasiones.</p>
      <p>El raquetbol</p>
      <p>El raquetbol es otro deporte popular en Bolivia. Bolivia es una potencia mundial en raquetbol, habiendo ganado 10 campeonatos mundiales en la categoría masculina y 10 en la categoría femenina.</p>
      <p>Los jugadores bolivianos más destacados de raquetbol son Gustavo Fernández, que ha ganado cuatro campeonatos mundiales, y Cecilia Costa, que ha ganado cinco campeonatos mundiales.</p>
      <p>Otros deportes</p>
      <p>Bolivia también tiene una fuerte participación en otros deportes, como el boxeo, el ciclismo y el atletismo.</p>
      <p>En boxeo, Bolivia ha tenido campeones mundiales como Santos Laciar, Mauro Mina y Óscar de la Hoya.</p>
      <p>En ciclismo, Bolivia ha tenido campeones mundiales como Marco Antonio Pantoja y Freddy González.</p>
      <p>En atletismo, Bolivia ha tenido medallistas olímpicos como Rosibel García y Ángela Tenorio.</p>
     
    </div>
  );
};

export default InicioPage;
