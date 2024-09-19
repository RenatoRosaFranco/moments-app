import React from 'react';
import logo from '../../assets/images/white-logo.png';
import './Header.scss';

export const Header = () => {
    return(
        <header id="header">
            <p className="text-center">
                <img src={logo} className='logo' alt='Moments | Logo' />
            </p>
        </header>
    );
};