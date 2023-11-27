import React from 'react';
import { Link } from 'react-router-dom';
import AguasTermalesLiriuni from './imgCocha/AguasTermalesLiriuni.jpg';
import Aiquile from './imgCocha/Aiquile.jpg';
import Catedral from './imgCocha/Catedral.jpg';
import Cliza from './imgCocha/Cliza.jpg';
import CristoConcordia from './imgCocha/CristoConcordia.jpg';
import Incallajta from './imgCocha/Incallajta.jpg';
import LaRecoleta from './imgCocha/LaRecoleta.jpg';
import Mizque from './imgCocha/Mizque.jpg';
import Pocona from './imgCocha/Pocona.jpg';
import Quillacollo from './imgCocha/Quillacollo.jpg';
import ToroToro from './imgCocha/ToroToro.jpg';
import Totora from './imgCocha/Totora.jpg';
import VillaTunari from './imgCocha/VillaTunari.jpg';

const CochabambaPage= () => {
  return (
    <div className="scrollable-container">
      <div className="page-container">
      <Link to="/" className="link-to-home">
        Inicio
      </Link>
      </div>
      <p>Cochabamba, es la segunda ciudad más grande de Bolivia. Es una ciudad vibrante y cosmopolita, con una rica historia y cultura.</p>
      <p>Es un destino turístico popular, gracias a su variedad de atractivos turísticos.</p>
      <p>Cochabamba también es un buen lugar para disfrutar de la gastronomía boliviana. La ciudad alberga una variedad de restaurantes que sirven platos típicos bolivianos, como el pique macho, la sopa de maní y el pollo a la plancha.</p>
<p>Si está buscando un destino turístico vibrante y culturalmente rico, Cochabamba es una excelente opción. La ciudad ofrece algo para todos, desde historia y cultura hasta naturaleza y gastronomía.</p>

      <h1>Atractivos turísticos en Cochabamba</h1>
      <div className="image-container">
        <img src={AguasTermalesLiriuni} alt="AguasTermalesLiriuni" />
        <p>Aguas Termales Liriuni</p>

        <img src={Aiquile} alt="Aiquile" />
        <p>Aiquile</p>

        <img src={Catedral} alt="Catedral" />
        <p>Catedral De Cochabamba</p>

        <img src={Cliza} alt="Cliza" />
        <p>Cliza</p>

        <img src={CristoConcordia} alt="CristoConcordia" />
        <p>Cristo De La Concordia</p>
        
        <img src={Incallajta} alt="Incallajta" />
        <p>Incallajta</p>

        <img src={LaRecoleta} alt="LaRecoleta" />
        <p>LaRecoleta</p>

        <img src={Mizque} alt="Mizque" />
        <p>Mizque</p>

        <img src={Pocona} alt="Pocona" />
        <p>Pocona</p>

        <img src={Quillacollo} alt="Quillacollo" />
        <p>Quillacollo</p>

        <img src={ToroToro} alt="ToroToro" />
        <p>ToroToro</p>

        <img src={Totora} alt="Totora" />
        <p>Totora</p>

        <img src={VillaTunari} alt="VillaTunari" />
        <p>VillaTunari</p>
       
      </div>

    </div>
  );
};
export default CochabambaPage;