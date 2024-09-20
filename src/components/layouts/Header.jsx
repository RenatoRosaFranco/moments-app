import React from 'react';
import {useTranslation} from "react-i18next";
import Select from 'react-select';
import logo from '../../assets/images/white-logo.png';
import './Header.scss';

import ptFlag from '../../assets/images/flags/pt-BR.png';
import esFlag from '../../assets/images/flags/es.png';
import enFlag from '../../assets/images/flags/en.png';

const options = [
    { value: 'pt', label: <div><img src={ptFlag} alt="Português" style={{ width: '20px', marginRight: '10px' }} />Português</div> },
    { value: 'es', label: <div><img src={esFlag} alt="Español" style={{ width: '20px', marginRight: '10px' }} />Español</div> },
    { value: 'en', label: <div><img src={enFlag} alt="English" style={{ width: '20px', marginRight: '10px' }} />English</div> },
]

export const Header = () => {
    const { i18n } = useTranslation();

    const handleLanguageChange = (selectedOption) => {
        i18n.changeLanguage(selectedOption.value);
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
                    <Select
                        options={options}
                        onChange={handleLanguageChange}
                        placeholder="Selecione o idioma"
                        classNamePrefix="react-select"
                    />
                </div>
            </div>
        </header>
    );
};