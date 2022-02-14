import {
    Routes, Route,
    Navigate
} from 'react-router-dom';
import Home from '../containers/Home'
import RegistroPeliculas from '../components/RegistroPeliculas'
import RegistroPeliculaSlider from '../components/RegistroPeliculaSlider';
import NavbarBlock from '../components/Navbar';

export const DashboardRoutes = () => {
    return ( 
        <>
            <div>
            <NavbarBlock/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/registro-pelicula" element={<RegistroPeliculas />} />
                    <Route path="/registro-slider" element={<RegistroPeliculaSlider />} />
                    <Route path='*' element={<Navigate to="/" />} />
                    
                </Routes>
            </div>

        </>
    )
}
