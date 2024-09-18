import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';

// Components
import { Header } from './components/layouts/Header';
import { Footer } from "./components/layouts/Footer";

// Pages
import HomePage from "./pages/home/Index";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
