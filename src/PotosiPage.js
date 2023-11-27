import React from 'react';
import { Link } from 'react-router-dom';
import CasaMoneda from './imgPsi/CasaMoneda.jpg';
import Catedral from './imgPsi/Catedral.jpg';
import CerroRico from './imgPsi/CerroRico.jpg';
import GrutaGalaxias from './imgPsi/GrutaGalaxias.jpg';
import IglesiaSanLorenzo from './imgPsi/IglesiaSanLorenzo.jpg';
import LagunaColorada from './imgPsi/LagunaColorada.jpg';
import LagunaNegra from './imgPsi/LagunaNegra.jpg';
import PlazaNoviembre from './imgPsi/PlazaNoviembre.jpg';
import Uyuni from './imgPsi/Uyuni.jpg';
import CementerioTrenes from './imgPsi/CementerioTrenes.jpg';

const PotosiPage= () => {
  return (
    <div className="scrollable-container">
      <div className="page-container">
      <Link to="/" className="link-to-home">
        Inicio
      </Link>
      </div>
      <p>Potosí, Bolivia, es una ciudad con una rica historia y cultura. Se encuentra ubicada a una altitud de 4,090 metros sobre el nivel del mar, en la región andina del país.</p>
      <p>La ciudad es conocida por su producción de plata, que fue durante mucho tiempo una de las principales fuentes de riqueza de Bolivia. El Cerro Rico, una montaña ubicada en las afueras de la ciudad, fue una de las minas de plata más importantes del mundo.</p>
      <p>Potosí también es un importante centro cultural. La ciudad cuenta con una gran variedad de museos, iglesias y otros monumentos históricos.</p>
      <h2>Atractivos turísticos en Potosi</h2>
      <div className="image-container">
        <img src={LagunaColorada} alt="LagunaColorada" />
        <p>Laguna Colorada</p>
        <img src={CasaMoneda} alt="CasaMoneda" />
        <p>Casa Nacional de la Moneda</p>
        <img src={Uyuni} alt="Uyuni" />
        <p> Salar De Uyuni</p>
        <img src={CementerioTrenes} alt="CementerioTrenes" />
        <p>Cementerio de Trenes</p>
        <img src={IglesiaSanLorenzo} alt="IglesiaSanLorenzo" />
        <p>Iglesia San Lorenzo de Carangas</p>
        <img src={PlazaNoviembre} alt="PlazaNoviembre" />
        <p>Plaza 10 de Noviembre</p>
        <img src={Catedral} alt="Catedral" />
        <p>Catedral de Potosi</p>
        <img src={CerroRico} alt="CerroRico" />
        <p>Cerro Rico de la plata</p>
        <img src={LagunaNegra} alt="LagunaNegra" />
        <p>Laguna Negra</p>
        <img src={GrutaGalaxias} alt="GrutaGalaxias" />
        <p>Gruta de las Galaxias</p>
      </div>
    </div>
  );
};
export default PotosiPage;