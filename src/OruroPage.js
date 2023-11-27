import React from 'react';
import { Link } from 'react-router-dom';
import ChullparesMacaya from './imgOru/ChullparesMacaya.jpg';
import CiudadelaAlcaya from './imgOru/CiudadelaAlcaya.jpg';
import CurahuaraDeCarangas from './imgOru/CurahuaraDeCarangas.jpg';
import LosGeisers from './imgOru/LosGeisers.jpg';
import Machacamarca from './imgOru/Machacamarca.jpg';
import MinaSanJose from './imgOru/MinaSanJose.jpg';
import ParqueSajama from './imgOru/ParqueSajama.jpg';

const OruroPage= () => {
  return (
    <div className="scrollable-container">
      <div className="page-container">
      <Link to="/" className="link-to-home">
        Inicio
      </Link>
      </div>
      <p>Oruro, Bolivia, es una ciudad con una rica historia, cultura y diversidad natural. Es un destino turístico popular, con una variedad de atracciones que ofrecer a los visitantes.</p>
      
      <h2>Atractivos turísticos en Oruro</h2>
      <div className="image-container">
        <img src={MinaSanJose} alt="MinaSanJose" />
        <p>Mina San José</p>
        <img src={ParqueSajama} alt="ParqueSajama" />
        <p>Parque Nacional Sajama</p>

        <img src={LosGeisers} alt="LosGeisers" />
        <p> Los Géiseres</p>
        <img src={CurahuaraDeCarangas} alt="CurahuaraDeCarangas" />
        <p>Curahuara de Carangas.</p>

        <h2>Lugares Arqueológicos</h2>
        <img src={ChullparesMacaya} alt="ChullparesMacaya" />
        <p>Chullpares de Macaya</p>

        <img src={CiudadelaAlcaya} alt="CiudadelaAlcaya" />
        <p>Ciudadela de Alcaya</p>

        <h2>Lugares Históricos</h2>
        <img src={Machacamarca} alt="Machacamarca" />
        <p>Machacamarca</p>

      </div>  
    </div>
  );
};
export default OruroPage;