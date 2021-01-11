import React from 'react';
import './Navbar.css'
import logo from '../../aze.png'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <img className='navbar__img'
            src={logo} alt='tour logo'/>
            <ul className='nav-link'>
                <li>
                    <a href='/Home' className='nav--link__home'>Home</a>
                </li>
                <li>
                    <a href='/About' className='nav--link__about'>About</a>
                </li>
                <li>
                    <a href='/Tours' className='nav--link__tours active'>Tours</a>
                </li>
            </ul>
        </nav>
    );
}