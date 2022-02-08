import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Carrusel from '../components/Carrusel';
import NavbarBlock from '../components/Navbar';
import Login from '../components/Login';
import {Registro} from '../components/Registro';

const Approuter = () => {
  return <div>
      <BrowserRouter>
        <NavbarBlock />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/carrusel" element={<Carrusel />} />
                <Route path="/registro" element={<Registro />} />
            </Routes>
  </BrowserRouter>
  </div>;
};

export default Approuter;
