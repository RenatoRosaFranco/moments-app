import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import './App.scss';

// Components
import { Header } from './components/layouts/Header';
import { Footer } from "./components/layouts/Footer";

// Pages
import HomePage from "./pages/home/Index";

function App() {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    const currentLanguage = i18n.language || 'en';

    useEffect(() => {
        const pathParts = location.pathname.split('/');
        const langFromURL = pathParts[1];

        if (i18n.languages.includes(langFromURL) && langFromURL !== currentLanguage) {
            i18n.changeLanguage(langFromURL);
        } else if (!i18n.languages.includes(langFromURL)) {
            navigate(`/${currentLanguage}${location.pathname}`);
        }
    }, [location.pathname, currentLanguage, i18n, navigate]);

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path={`/${currentLanguage}`} element={<HomePage />} />
                <Route path={`/${currentLanguage}/${t('app.routes.termsOfUse')}`} element={<HomePage />} />
                <Route path={`/${currentLanguage}/${t('app.routes.policyPrivacy')}`} element={<HomePage />} />
            </Routes>
            <Footer />
        </div>
    );
}

const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper;
