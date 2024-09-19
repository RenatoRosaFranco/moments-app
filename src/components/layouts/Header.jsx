import React from 'react';
import {useTranslation} from "react-i18next";
import logo from '../../assets/images/white-logo.png';
import './Header.scss';

export const Header = () => {
    const { i18n } = useTranslation();

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
    };


    return (
        <header id="header">
            <div className="col-md-10">
                <p className="text-center">
                    <img src={logo} className='logo' alt='Moments | Logo'/>
                </p>
            </div>

            <div className="col-md-2">
                <div className="language-selector">
                    <select onChange={handleLanguageChange}>
                        <option value="pt">Português</option>
                        <option value="es">Español</option>
                        <option value="en">English</option>
                    </select>
                </div>
            </div>
        </header>
    );
};