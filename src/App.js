import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Features from './Components/Features';
import CTA from './Components/CTA';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <h1 className="Landing"> Landing Page Web </h1>
        <Header />
         <Routes>
          <Route path="/" exact element={<Hero />} />
          <Route path="/features" element={<Features />} />
          <Route path="/cta" element={<CTA />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
