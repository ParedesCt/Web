import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const DeportesButtons = ({ showOptions, toggleOptions }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`button-container ${isHovered ? 'hovered' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <button className="main-button" onClick={toggleOptions}>Deportes</button>
      {(showOptions || isHovered) && (
        <div className="options-container">
          <Link to="/Futbol">
            <button>Futbol</button>
          </Link>
          <Link to="/Voleibol">
          <button>Voleibol</button>
          </Link>
          <Link to="/Atletismo">
          <button>Atletismo</button>
          </Link>
          
          
        </div>
      )}
    </div>
  );
};

export default DeportesButtons;

