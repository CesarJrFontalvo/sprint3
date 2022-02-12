import {
    Routes, Route,
    Navigate
} from 'react-router-dom';
import Home from '../containers/Home'

export const DashboardRoutes = () => {
    return ( 
        <>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='*' element={<Navigate to="/" />} />
                    
                </Routes>
            </div>

        </>
    )
}
