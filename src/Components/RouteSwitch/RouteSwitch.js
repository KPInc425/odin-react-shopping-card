import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import App from '../App/App';
import Nav from '../Nav/Nav';
import ShoppingCart from '../ShoppinCart/ShoppingCart';


const RouteSwitch = () => {
    return (
        <BrowserRouter >
            <Nav /> 
            <Routes>
                <Route path='/' element={ <App />} />
                <Route path='/shoppingcart' element={ <ShoppingCart /> } />
            </Routes>
        </BrowserRouter>
    )
}


export default RouteSwitch