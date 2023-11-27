import React from 'react';
import { Link } from 'react-router-dom';
import ElCarreton from './imgPando/ElCarreton.jpg';
import IglesiaCatedral from './imgPando/IglesiaCatedral.jpg';
import LasPiedras from './imgPando/LasPiedras.jpg';
import MonumentoALosHeroes from './imgPando/MonumentoALosHeroes.jpg';
import ParquePiñata from './imgPando/ParquePiñata.jpg';
import PuertoRico from './imgPando/PuertoRico.jpg';
import ReservaManuripi from './imgPando/ReservaManuripi.jpg';

const PandoPage= () => {
  return (
    <div className="scrollable-container">
      <div className="page-container">
      <Link to="/" className="link-to-home">
        Inicio
      </Link>
      </div>
      <p>Pando, el departamento más oriental de Bolivia, es un paraíso natural que ofrece una amplia variedad de atractivos turísticos.</p>
      <p>Pando es un destino turístico ideal para los amantes de la naturaleza y la aventura. El departamento ofrece una experiencia única que no se puede encontrar en ningún otro lugar del mundo.</p>
      
      <h2>Atractivos turísticos en Pando</h2>
      <div className="image-container">
        <img src={ElCarreton} alt="ElCarreton" />
        <p>ElCarreton</p>

        <img src={IglesiaCatedral} alt="IglesiaCatedral" />
        <p>Iglesia Catedral de Pando</p>

        <img src={LasPiedras} alt="LasPiedras" />
        <p>Las Piedras</p>

        <img src={ParquePiñata} alt="ParquePiñata" />
        <p>ParquePiñata</p>

        <img src={PuertoRico} alt="PuertoRico" />
        <p>PuertoRico</p>

        <img src={MonumentoALosHeroes} alt="MonumentoALosHeroes" />
        <p>Monumento A Los Heroes de Bahia</p>

        <img src={ReservaManuripi} alt="ReservaManuripi" />
        <p>Reserva Nacional Manuripi</p>
      </div>
    </div>
  );
};

export default PandoPage;