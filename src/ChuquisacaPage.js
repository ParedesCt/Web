import React from 'react';
import { Link } from 'react-router-dom';
import CalOrcko from './imgChq/CalOrcko.jpg';
import Camargo from './imgChq/Camargo.jpg';
import CañonIcla from './imgChq/CañonIcla.jpg';
import CraterDeMaragua from './imgChq/CraterDeMaragua.jpg';
import Incamachay from './imgChq/Incamachay.jpg';
import LasSieteCascadas from './imgChq/LasSieteCascadas.jpg';
import Muyupampa from './imgChq/Muyupampa.jpg';
import Padilla from './imgChq/Padilla.jpg';
import ParqueCretácico from './imgChq/ParqueCretácico.jpg';
import Tarabuco from './imgChq/Tarabuco.jpg';
import VillaSerrano from './imgChq/VillaSerrano.jpg';

const ChuquisacaPage= () => {
  return (
    <div className="scrollable-container">
      <div className="page-container">
      <Link to="/" className="link-to-home">
        Inicio
      </Link>
      </div>
      <p>Chuquisaca es uno de los nueve departamentos de Bolivia. Se encuentra ubicado en el centro del país, y limita con los departamentos de Potosí, Cochabamba, Santa Cruz y Tarija.</p>
      <p>Es un departamento con una rica historia y cultura. Fue la sede de la Real Audiencia de Charcas, y en su territorio se encuentran importantes sitios históricos, como la ciudad de Sucre, la primera capital de Bolivia.</p>
      <p>El departamento también cuenta con una gran diversidad natural. En sus tierras se encuentran los Andes, la Amazonía y el Chaco. Esto le da una gran variedad de paisajes, desde las altas montañas hasta la selva tropical.</p>
      
      <h2>Atractivos turísticos en Chuquisaca</h2>
      <div className="image-container">
        <img src={LasSieteCascadas} alt="LasSieteCascadas" />
        <p>Las Siete Cascadas</p>

        <img src={CañonIcla} alt="CañonIcla" />
        <p>Cañón de Icla</p>

        <img src={Padilla} alt="Padilla" />
        <p>Padilla</p>

        <img src={Muyupampa} alt="Muyupampa" />
        <p>Muyupampa</p>

        <h3>Lugares Paleontológicos</h3>
        <img src={CalOrcko} alt="CalOrcko" />
        <p>Cal Orck’o</p>

        <img src={ParqueCretácico} alt="ParqueCretácico" />
        <p>Parque Cretácico</p>

        <img src={CraterDeMaragua} alt="CraterDeMaragua" />
        <p>Cráter de Maragua</p>

        <h3>Lugares Paleontológicos</h3>

        <img src={Incamachay} alt="Incamachay" />
        <p>Incamachay y Pumamachay</p>

        <img src={Camargo} alt="Camargo" />
        <p>Camargo</p>

        <h3>Lugares Culturales y folklóricos</h3>
        <img src={Tarabuco} alt="Tarabuco" />
        <p>Tarabuco</p>

        <img src={VillaSerrano} alt="VillaSerrano" />
        <p>VillaSerrano</p>

        
      </div>
    </div>
  );
};
export default ChuquisacaPage;