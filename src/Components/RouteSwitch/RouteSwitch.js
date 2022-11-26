import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App/App';
import Nav from '../Nav/Nav';
import Shop from '../Shop/Shop';


const RouteSwitch = () => {
    return (
        <BrowserRouter basename={ '/odin-react-shopping-cart' } >
            <Nav /> 
            <Routes>
                <Route path='/' element={ <App />} />
                <Route path='/shop' element={ <Shop /> } />
            </Routes>
        </BrowserRouter>
    )
}


export default RouteSwitch