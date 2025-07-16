import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Footer from './components/sections/Footer';
import Header from './components/sections/Header';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/pages/Home';
import ONama from './components/pages/ONama';
import Edukacije from './components/pages/Edukacije';
import Eventi from './components/pages/Eventi';
import PivarskiBlog from './components/pages/PivarskiBlog';
import BlogSingle from './components/pages/BlogSingle';
import Error from './components/parts/Error';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import UclaniSe from './components/pages/UclaniSe';
import KuhanjeSingle from './components/pages/KuhanjeSingle';
import Kontakt from './components/pages/Kontakt';
import PIKliga from './components/pages/PIKliga';
import MojProfil from './components/pages/MojProfil';
function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/o-nama" element={<ONama />} />
        <Route path="/edukacije" element={<Edukacije />} />
        <Route path="/pivarska-zbivanja" element={<Eventi />} />
        <Route path="/pivarski-blog" element={<PivarskiBlog />} />
        <Route path="/pivarski-blog/:slug" element={<BlogSingle />} />
        <Route path="*" element={<Error />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/prijava-za-clanstvo" element={<UclaniSe />} />
        <Route path="/edukacije/skolica-kuhanja-piva" element={<KuhanjeSingle />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/pik-liga" element={<PIKliga />} />
        <Route path="/moj-profil" element={<MojProfil />} />
        <Route path="/edukacije/prijava" element={<KuhanjeSingle />} />
      </Routes>
      </main>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
