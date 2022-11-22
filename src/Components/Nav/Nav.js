import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <nav>
            <img src={ `${process.env.PUBLIC_URL}/ilg128.png` } alt='Logo'></img> 
            <ul>
                <Link to='/' className='link'>
                    <li>Home</li>
                </Link>
                <Link to='/shop' className='link'>
                    <li>Shop</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;