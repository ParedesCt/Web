import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TourismButtons from './TourismButtons';
import DeportesButtons from './DeportesButtons';
import LaPazPage from './LaPazPage'; 
import BeniPage from './BeniPage';
import SantaCruzPage from './SantaCruzPage';
import CochabambaPage from './CochabambaPage';
import TarijaPage from './TarijaPage';
import PandoPage from './PandoPage';
import ChuquisacaPage from './ChuquisacaPage';
import OruroPage from './OruroPage';
import PotosiPage from './PotosiPage';
import FutbolPage from './FutbolPage'; 
import VoleibolPage from './VoleibolPage';
import AtletismoPage from './AtletismoPage';
import './App.css';
import InicioPage from './InicioPage'; 

const App = () => {
  const [showTourism, setShowTourism] = useState(false);
  const [showDeportes, setShowDeportes] = useState(false);

  const toggleTourism = () => {
    setShowTourism(!showTourism);
    setShowDeportes(false);
  };

  const toggleDeportes = () => {
    setShowDeportes(!showDeportes);
    setShowTourism(false);
  };

  return (
    
    <Router>
      <div>
        <div className="buttons-container">
          <TourismButtons showOptions={showTourism} toggleOptions={toggleTourism} />
          <DeportesButtons showOptions={showDeportes} toggleOptions={toggleDeportes} />
        </div>
          <Routes>
          <Route path="/" element={<InicioPage />} />
          <Route path="/la-paz" element={<LaPazPage />} />
          <Route path="/Beni" element={<BeniPage />} />
          <Route path="/Santa-Cruz" element={<SantaCruzPage />} />
          <Route path="/Cochabamba" element={<CochabambaPage />} />
          <Route path="/Tarija" element={<TarijaPage />} />
          <Route path="/Pando" element={<PandoPage />} />
          <Route path="/Chuquisaca" element={<ChuquisacaPage />} />
          <Route path="/Oruro" element={<OruroPage />} />
          <Route path="/Potosi" element={<PotosiPage />} />
          <Route path="/Futbol" element={<FutbolPage />} />
          <Route path="/Voleibol" element={<VoleibolPage />} />
          <Route path="/Atletismo" element={<AtletismoPage />} />
        </Routes>
         </div>
    </Router>
    
  );
};

export default App;