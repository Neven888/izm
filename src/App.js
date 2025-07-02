import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Slider from 'react-slick';
import Footer from './components/sections/Footer';
import Header from './components/sections/Header';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/pages/Home';
import Many from './components/pages/Many';
import Some from './components/pages/Some';
import Edukacije from './components/pages/Edukacije';
import VariousVersion from './components/pages/VariousVersion';
import Majorit from './components/pages/Majorit';
import BlogSingle from './components/pages/BlogSingle';
import Error from './components/parts/Error';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import CommodUs from './components/pages/CommodUs';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/many" element={<Many />} />
        <Route path="/some" element={<Some />} />
        <Route path="/edukacije" element={<Edukacije />} />
        <Route path="/variousversion" element={<VariousVersion />} />
        <Route path="/majorit" element={<Majorit />} />
        <Route path="/pivarski-blog/:slug" element={<BlogSingle />} />
        <Route path="*" element={<Error />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/commodus" element={<CommodUs />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
