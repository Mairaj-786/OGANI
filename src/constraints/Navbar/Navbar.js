import React, { useState } from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import MenuIcon from '@material-ui/icons/Menu';

import './navbar.css'
import MobileNav from './MobileNav';
import { useSelector } from 'react-redux';
const Navbar = () => {
    const { cart } = useSelector(state => state.cartReducer)
    const [state, setState] = useState(false);
    return (
        <div className="navbar">
            <div className="navbar_wrapper">
                <div className="logo">
                    <img src="/images/logo.jpg" />
                    <div className="ham" onClick={() => setState(!state)}>
                        <MenuIcon style={{ fontSize: '24px' }} />
                    </div>
                    <MobileNav />
                </div>
                <div className="nav_list">
                    <ul>
                        <li><a className="active" href="#">Home</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Page</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="cart">
                    <div className="material_icon">
                        <FavoriteIcon style={{ fontSize: '18px', cursor: 'pointer' }} className="icons" />
                        <LocalMallIcon style={{ fontSize: '18px', cursor: 'pointer' }} />
                        <span>{cart ? cart.id : ''}</span>
                    </div>
                    <div className="item">
                        <span>item:<strong> $150.00</strong></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
