import React from 'react';
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Select from 'react-select';
import './Header.scss';

// Flags import
import ptFlag from '../../assets/images/flags/pt-BR.png';
import esFlag from '../../assets/images/flags/es.png';
import frFlag from '../../assets/images/flags/fr.png';
import enFlag from '../../assets/images/flags/en.png';
import deFlag from '../../assets/images/flags/de.png';
import itFlag from '../../assets/images/flags/it.png';
import ruFlag from '../../assets/images/flags/ru.png';
import plFlag from '../../assets/images/flags/pl.png';
import jpFlag from '../../assets/images/flags/jp.png';

const LanguageOption = ({ flagSrc, altText, label }) => {
    return (
        <div>
            <img src={flagSrc} alt={altText} style={{ width: '20px', marginRight: '10px' }} />
            {label}
        </div>
    );
};

const options = [
    { value: 'pt', label: <LanguageOption flagSrc={ptFlag} altText="Português" label="Português" /> },
    { value: 'es', label: <LanguageOption flagSrc={esFlag} altText="Español" label="Español" /> },
    { value: 'fr', label: <LanguageOption flagSrc={frFlag} altText="French" label="French" /> },
    { value: 'it', label: <LanguageOption flagSrc={itFlag} altText="Italian" label="Italian" /> },
    { value: 'en', label: <LanguageOption flagSrc={enFlag} altText="English" label="English" /> },
    { value: 'de', label: <LanguageOption flagSrc={deFlag} altText="Deutsch" label="Deutsch" /> },
    { value: 'ru', label: <LanguageOption flagSrc={ruFlag} altText="Russian" label="Russian" /> },
    { value: 'pl', label: <LanguageOption flagSrc={plFlag} altText="Polish" label="Polish" /> },
    { value: 'jp', label: <LanguageOption flagSrc={jpFlag} altText="Japanese" label="Japanese" /> },
];

export const Header = () => {
    const { i18n } = useTranslation();
    const navigate = useNavigate();

    const handleLanguageChange = (selectedOption) => {
        const selectedLanguage = selectedOption.value;
        const currentPath = window.location.pathname.split('/').slice(2).join('/');
        i18n.changeLanguage(selectedLanguage);

        navigate(`/${selectedLanguage}/${currentPath}`);
    };

    return (
        <header id="header">
            <Select
                defaultValue={options.find(option => option.value === i18n.language)}
                options={options}
                onChange={handleLanguageChange}
                className='header-select'
            />
        </header>
    );
};