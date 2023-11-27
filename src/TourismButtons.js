import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const TourismButtons = ({ showOptions, toggleOptions }) => {
  const [isHovered, setIsHovered] = useState(false);


  return (
    <div className={`button-container ${isHovered ? 'hovered' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <button className="main-button" onClick={toggleOptions}>Turismo</button>
      {(showOptions || isHovered) && (
        <div className="options-container">
          <Link to="/la-paz">
            <button>La Paz</button>
          </Link>
          <Link to="/Beni">
          <button>Beni</button>
          </Link>
          <Link to="/Santa-Cruz">
          <button >Santa Cruz</button>
          </Link>
          <Link to="/Cochabamba">
          <button >Cochabamba</button>
          </Link>
          <Link to="/Tarija">
          <button >Tarija</button>
          </Link>
          <Link to="/Pando">
          <button >Pando</button>
          </Link>
          <Link to="/Chuquisaca">
          <button>Chuquisaca</button>
          </Link>
          <Link to="/Oruro">
          <button >Oruro</button>
          </Link>
          <Link to="/Potosi">
          <button >Potosi</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TourismButtons;

