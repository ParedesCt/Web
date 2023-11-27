import React from 'react';
import { Link } from 'react-router-dom';
import PlazaSeptiembre from './imgSCZ/PlazaSeptiembre.jpg';
import CascadasEspejillos from './imgSCZ/CascadasEspejillos.jpg';
import Guembe from './imgSCZ/Guembe.jpg';
import JardinBotanico from './imgSCZ/JardinBotanico.jpg';
import JardinDelicias from './imgSCZ/JardinDelicias.jpg';
import LaRinconada from './imgSCZ/LaRinconada.jpg';
import LomasDeArena from './imgSCZ/LomasDeArena.jpg';
import Porongo from './imgSCZ/Porongo.jpg';
import Samaipata from './imgSCZ/Samaipata.jpg';
import SanJoseDeChiquitos from './imgSCZ/SanJoseDeChiquitos.jpg';
import SantuarioCotoca from './imgSCZ/SantuarioCotoca.jpg';
import ZooNoel from './imgSCZ/ZooNoel.jpg';

const SantaCruzPage= () => {
  return (
    <div className="scrollable-container">
      <div className="page-container">
      <Link to="/" className="link-to-home">
        Inicio
      </Link>
      </div>
      <h1>Atractivos turísticos en Santa Cruz</h1>
    <p>Santa Cruz de la Sierra es una de las principales ciudades de Bolivia, ubicada en el oriente, sus habitantes son conocidos como "cambas". La ciudad de clima tropical cuenta con importantes industrias, además de lugares de entretenimiento, restaurantes, museos y centros culturales.</p>
      <div className="image-container">
        <img src={PlazaSeptiembre} alt="PlazaSeptiembre" />
        <p>Plaza 24 de Septiembre</p>

        <img src={CascadasEspejillos} alt="CascadasEspejillos" />
        <p>Cascadas Espejillos</p>

        <img src={Guembe} alt="Guembe" />
        <p>Biocentro Güembé</p>

        <img src={JardinBotanico} alt="JardinBotanico" />
        <p>Jardin Botanico</p>

        <img src={JardinDelicias} alt="JardinDelicias" />
        <p>Jardin Delicias</p>

        <img src={LaRinconada} alt="LaRinconada" />
        <p>LaRinconada</p>

        <img src={LomasDeArena} alt="LomasDeArena" />
        <p>LomasDeArena</p>

        <img src={Porongo} alt="Porongo" />
        <p>Porongo</p>

        <img src={Samaipata} alt="Samaipata" />
        <p>Samaipata</p>

        <img src={SanJoseDeChiquitos} alt="SanJoseDeChiquitos" />
        <p>San Jose De Chiquitos</p>

        <img src={SantuarioCotoca} alt="SantuarioCotoca" />
        <p>Santuario De Cotoca</p>

        <img src={ZooNoel} alt="ZooNoel" />
        <p>Zoológico Municipal de Fauna Sudamericana Noel Kempff Mercado</p>

       
      </div>
    
    </div>
  );
};
export default SantaCruzPage;