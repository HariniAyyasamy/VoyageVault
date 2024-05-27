import React from 'react';
import './app.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Main from './Components/Packages/Main';
import Footer from './Components/Footer/Footer';
import ShopPage from './Components/shop/Shop';
import AboutUsPage from './Components/About/About';
import Contact from './Components/Contact/Contact';

const App = () => {
    return (
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/packages" element={<Main />} /> 
            <Route path="/shop" element={<ShopPage/>}/>
            <Route path="/about" element={<AboutUsPage/>} />
            <Route path="/contact" element={<Contact/>} />


          </Routes>
          <Footer/>
        </div>
      );
}
export default App