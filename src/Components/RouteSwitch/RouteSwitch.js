import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import App from '../App/App';
import Nav from '../Nav/Nav';
import Shop from '../Shop/Shop';


const RouteSwitch = () => {
    return (
        <BrowserRouter >
            <Nav /> 
            <Routes>
                <Route path='/' element={ <App />} />
                <Route path='/shop' element={ <Shop /> } />
            </Routes>
        </BrowserRouter>
    )
}


export default RouteSwitch