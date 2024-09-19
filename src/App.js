import React from 'react';
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';

// Components
import { Header } from './components/layouts/Header';
import { Footer } from "./components/layouts/Footer";

// Pages
import HomePage from "./pages/home/Index";

function App() {
    const { t } = useTranslation();

    return (
        <div className="App">
          <Router>
              <Header />
              <Routes>
                <Route path="/" element={<HomePage />} />

                <Route path={`/${t('app.routes.termsOfUse')}`} element={<HomePage />} />
                <Route path={`/${t('app.routes.policyPrivacy')}`} element={<HomePage />} />
              </Routes>
              <Footer />
          </Router>
        </div>
    );
}

export default App;
