import React from 'react';
import Cardd from '../components/Card';
// import Lista from '../components/List';
import Carrusel from '../components/Carrusel';
import NavbarBlock from '../components/Navbar';

const List = () => {
  return (
        <div>
            <NavbarBlock/>
            <Carrusel/>
            <Cardd/>
            {/* <Lista/> */}
            
        </div>)
};

export default List;
