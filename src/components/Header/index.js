import {Link} from 'react-router-dom'
import { FaUser, FaShoppingCart } from "react-icons/fa"
import './index.css'

const Header = () => (
    <nav className='navbar'>
        <Link to="/" className='navigation-link'>
            <h3 className='header-heading'>Karo Abhyaas</h3>
        </Link>
        <ul className='routes-list'>
            <li className='route-item'>
                <button className='join-us-btn'>JOIN US</button>
            </li>
            <li className='route-item'>
                <Link to="classes" className='navigation-link'>
                    <p className='route-name'>Classes</p>
                </Link>
            </li>
            <li className='route-item'>
                <Link to="products" className='navigation-link'>
                <p className='route-name'>Products</p>
                </Link>
            </li>
            <li className='route-item'>
                <Link to="about-us" className='navigation-link'>
                <p className='route-name'>About Us</p>
                </Link>
            </li>
            <li className='route-item'>
                <Link to="login" className='navigation-link'>
                    <FaUser className='icon-styles'/>
                </Link>
            </li>
            <li className='route-item'>
                <Link to="cart" className='navigation-link'>
                    <FaShoppingCart className='icon-styles' />
                </Link>
            </li>
        </ul>
    </nav>
)

export default Header
