import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import CascoViejo from './imgBeni/CascoViejo.jpg';
import CatedralTrinidad from './imgBeni/CatedralTrinidad.jpg';
import LagunaSuarez from './imgBeni/LagunaSuarez.jpg';
import LomaChuchini from './imgBeni/LomaChuchini.jpg';
import ParquePantanal from './imgBeni/ParquePantanal.jpg';
import ReservaBiosfera from './imgBeni/ReservaBiosfera.jpg';
import Riberalta from './imgBeni/Riberalta.jpg';
import Rurrenabaque from './imgBeni/Rurrenabaque.jpg';

const BeniPage = () => {
  return (
    <div className="scrollable-container">
      <div className="page-container">
      <Link to="/" className="link-to-home">
        Inicio
      </Link>
      </div>
      <h1>Atractivos turísticos en Beni</h1>
      <p>Bienvenidos al Departamento del Beni que se encuentra al noreste de Bolivia, Parte de la geografía de este lugar se compone de planicies, lagunas y ríos, los cuales están rodeados de vegetación selvática. De hecho, en la ciudad de Trinidad basta con viajar en cualquier dirección para poder tener contacto directo con la naturaleza. </p>

      <div className="image-container">
        <img src={CascoViejo} alt="CascoViejo" />
        <p>Casco Viejo</p>

        <img src={CatedralTrinidad} alt="CatedralTrinidad" />
        <p>Catedral Trinidad</p>

        <img src={LagunaSuarez} alt="LagunaSuarez" />
        <p>Lagun aSuarez</p>

        <img src={LomaChuchini} alt="LomaChuchini" />
        <p>Loma Chuchini</p>

        <img src={ParquePantanal} alt="ParquePantanal" />
        <p>Parque Pantanal</p>

        <img src={ReservaBiosfera} alt="ReservaBiosfera" />
        <p>ReservaBiosfera</p>

        <img src={Riberalta} alt="Riberalta" />
        <p>Riberalta</p>

        <img src={Rurrenabaque} alt="Rurrenabaque" />
        <p>Rurrenabaque</p>
       
      </div>


    </div>
  );
};

export default BeniPage;
