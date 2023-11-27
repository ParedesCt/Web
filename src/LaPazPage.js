import React from 'react';
import { Link } from 'react-router-dom';
import valleAnimas from './imgLaPaz/valleAnimas.jpg';
import teleferico from './imgLaPaz/teleferico.jpg';
import CalleSagarnaga from './imgLaPaz/CalleSagarnaga.jpg';
import miradorKilliKilli from './imgLaPaz/miradorKilliKilli.jpg';
import monticulo from './imgLaPaz/monticulo.jpg';
import plazaMurillo from './imgLaPaz/plazaMurillo.jpg';
import CaminoMuerte from './imgLaPaz/CaminoMuerte.jpg';
import charquini from './imgLaPaz/charquini.jpg';
import Copacabana from './imgLaPaz/Copacabana.jpg';
import coroico from './imgLaPaz/coroico.jpg';
import grutaSorata from './imgLaPaz/grutaSorata.jpg';
import hampaturi from './imgLaPaz/hampaturi.jpg';
import tiwanaku from './imgLaPaz/tiwanaku.jpg';


const LaPazPage = () => {
  return (
    <div className="scrollable-container">
      <div className="page-container">
      <Link to="/" className="link-to-home">
        Inicio
      </Link>
      </div>
      
      <h1>Atractivos turísticos en La Paz</h1>
      
      <li>Turismo de aventura en yungas, biking (Ruta de la muerte), parapente, cannoping, rafting, etc.</li>
      <li>Rutas arqueológicas, y culturas hidráulicas andinas – Iskanwaya.</li>
      <li>Rutas culturales Metropolitanas La Paz- El Alto (teleféricos, miradores, casco histórico).</li>
      <li>Trekking en los caminos del Qhapaq Ñan (Choro, Takesi, Yunga Cruz, Ruta del Oro)</li>
      <h2>Lugares para visitar en la ciudad</h2>
      
      <div className="image-container">
        <img src={valleAnimas} alt="Valle de las Animas" />
        <p>Valle de las animas</p>

        <img src={teleferico} alt="teleferico" />
        <p>Teleférico</p>

        <img src={CalleSagarnaga} alt="CalleSagarnaga" />
        <p>Calle Sagarnaga</p>

        <img src={miradorKilliKilli} alt="miradorKilliKilli" />
        <p>Mirador Killi Killi</p>

        <img src={monticulo} alt="monticulo" />
        <p>Monticulo</p>
        <img src={plazaMurillo} alt="plazaMurillo" />
        <p>Plaza Murillo</p>
       
      </div>
        <h2>Lugares para viajar</h2> 
        

    <div className="image-container">
        <img src={tiwanaku} alt="tiwanaku" />
        <p>Tiwanaku</p>

        <img src={hampaturi} alt="hampaturi" />
        <p>Hampaturi</p>

        <img src={grutaSorata} alt="grutaSorata" />
        <p>Gruta Sorata</p>

        <img src={coroico} alt="coroico" />
        <p>Coroico</p>

        <img src={Copacabana} alt="Copacabana" />
        <p>Copacabana</p>

        <img src={charquini} alt="charquini" />
        <p>Charquini</p>

        <img src={CaminoMuerte} alt="CaminoMuerte" />
        <p>Camino de la Muerte</p>
</div>
      
    </div>
  );
};
export default LaPazPage;