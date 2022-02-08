import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Carrusel from '../components/Carrusel';
import NavbarBlock from '../components/Navbar';

const Approuter = () => {
  return <div>
      <BrowserRouter>
        <NavbarBlock />
            <Routes>
                <Route path="/" element={<Carrusel />} />
            </Routes>
  </BrowserRouter>
  </div>;
};

export default Approuter;
