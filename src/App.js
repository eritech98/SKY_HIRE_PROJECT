import React, { useEffect, useRef, useContext } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

// Import routes
import Home from './components/Home';
import AuthForm from './components/AuthForm';
import Dest from './components/Dest';
import PlanePhotos from './components/PlanePhotos';
import CessnaCitationX from './components/videos/Vid1';
import GulfstreamG650 from './components/videos/Vid2';
import EmbraerPhenom300 from './components/videos/Vid3';
import BombardierChallenger650 from './components/videos/Vid4';
import PiperM600 from './components/videos/Vid5';
import SikorskyS76 from './components/videos/Vid6';
import RobinsonR44Specifications from './components/videos/Vid7';
import CameronA400Specifications from './components/videos/Vid8';
import AirbusH160Specifications from './components/videos/Vid9';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/dest" element={<Dest />} />
        <Route path="/photos" element={<PlanePhotos />} />
        <Route path="/videos/cessna-citation-x" element={<CessnaCitationX />} />
        <Route path="/videos/gulfstream-g650" element={<GulfstreamG650 />} />
        <Route path="/videos/embraer-phenom-300" element={<EmbraerPhenom300 />} />
        <Route path="/videos/bombardier-challenger-650" element={<BombardierChallenger650 />} />
        <Route path="/videos/piper-m600" element={<PiperM600 />} />
        <Route path="/videos/sikorsky-s76" element={<SikorskyS76 />} />
        <Route path="/videos/robinson-r44-specifications" element={<RobinsonR44Specifications />} />
        <Route path="/videos/cameron-a400-specifications" element={<CameronA400Specifications />} />
        <Route path="/videos/airbus-h160-specifications" element={<AirbusH160Specifications />} />
      </Routes>
    </div>
  );
};

export default App;
