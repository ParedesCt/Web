import React from 'react';
import { Link } from 'react-router-dom';
import BodegaCasaReal from './imgTarija/BodegaCasaReal.jpg';
import BodegaCasaVieja from './imgTarija/BodegaCasaVieja.jpg';
import CasaDorada from './imgTarija/CasaDorada.jpg';
import CascadasDeCoimata from './imgTarija/CascadasDeCoimata.jpg';
import CastilloAzul from './imgTarija/CastilloAzul.jpg';
import ChorrosMarquiri from './imgTarija/ChorrosMarquiri.jpg';
import LagunasYDunasTajzara from './imgTarija/LagunasYDunasTajzara.jpg';
import MiradorDeLosSueños from './imgTarija/MiradorDeLosSueños.jpg';
import MuseoPaleontologicoArqueologico from './imgTarija/MuseoPaleontologicoArqueologico.jpg';
import PlazaLuisFuentes from './imgTarija/PlazaLuisFuentes.jpg';
import RepresaSanJacinto from './imgTarija/RepresaSanJacinto.jpg';
import ReservaTariquia from './imgTarija/ReservaTariquia.jpg';
import ObservatorioAstronomico from './imgTarija/ObservatorioAstronomico.jpg';

const TarijaPage= () => {
  return (
    <div className="scrollable-container">
      <div className="page-container">
      <Link to="/" className="link-to-home">
        Inicio
      </Link>
      </div>
      <p>Tarija es un departamento ubicado en el sur de Bolivia, limitando con Argentina y Paraguay. Es un destino turístico popular gracias a su clima templado, su rica cultura y su exuberante naturaleza.</p>
      <p>Tarija es un destino turístico que ofrece algo para todos. Ya sea que esté buscando una experiencia cultural, una aventura al aire libre o simplemente un lugar para relajarse, Tarija tiene algo para usted.</p>
      
      <h2>Atractivos turísticos en Tarija</h2>
      <div className="image-container">
        <img src={BodegaCasaReal} alt="BodegaCasaReal" />
        <p>Bodega Casa Real</p>

        <img src={CasaDorada} alt="CasaDorada" />
        <p>CasaDorada</p>

        <img src={CascadasDeCoimata} alt="CascadasDeCoimata" />
        <p>Cascadas De Coimata</p>

        <img src={LagunasYDunasTajzara} alt="LagunasYDunasTajzara" />
        <p>Lagunas Y Dunas De Tajzara</p>

        <img src={MiradorDeLosSueños} alt="MiradorDeLosSueños" />
        <p>MiradorDeLosSueños</p>

        <img src={MuseoPaleontologicoArqueologico} alt="MuseoPaleontologicoArqueologico" />
        <p>Museo Paleontologico Y Arqueologico</p>

        <img src={RepresaSanJacinto} alt="RepresaSanJacinto" />
        <p>RepresaSanJacinto</p>

        <img src={CastilloAzul} alt="CastilloAzul" />
        <p>CastilloAzul</p>

        <img src={PlazaLuisFuentes} alt="PlazaLuisFuentes" />
        <p>Plaza Luis de Fuentes y Vargas</p>

        <img src={BodegaCasaVieja} alt="BodegaCasaVieja" />
        <p>BodegaCasaVieja</p>

        <img src={ObservatorioAstronomico} alt="ObservatorioAstronomico" />
        <p>Observatorio Astronomico DE Santa Ana</p>

        <img src={ChorrosMarquiri} alt="ChorrosMarquiri" />
        <p>Chorros de Marquiri</p>

        <img src={ReservaTariquia} alt="ReservaTariquia" />
        <p>Reserva Nacional de Flora y Fauna de Tariquia</p>
       
      </div>
    </div>
  );
};
export default TarijaPage;