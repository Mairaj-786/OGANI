import React from 'react'
import './mobile_nav.css'
import CloseIcon from '@material-ui/icons/Close';
const MobileNav = () => {
    return (
        <div className='mobile_nav'>

            <ul>
                <li><a className="active" href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Pages</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    )
}

export default MobileNav
