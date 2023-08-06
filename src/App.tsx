import React from 'react';
import { Link, Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import Testimonial from './components/Testimonial';
import WhyUs from './components/WhyUs';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Profile from './components/Profile';
import Login from './components/Login';
import Information from './components/Information';

// import './assets/css/font-awesome.min.css';
import '../src/assets/css/bootstrap.css';
import '../src/assets/css/responsive.css';
import '../src/assets/css/style.css';
import '../src/assets/css/bootstrap.css';
import  './assets/images/free.svg';




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/whyus" element={<WhyUs />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Information />
    </Router>
  );
}

export default App;
