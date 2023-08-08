import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import Testimonial from './components/Testimonial';
import WhyUs from './components/WhyUs';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Login from './components/Login';
import Information from './components/Information';
import SingleProductDetails from './components/SingleProductDetails';
import ErrorPage from './components/ErrorPage';

//css
import '../src/assets/css/bootstrap.css';
import '../src/assets/css/responsive.css';
import '../src/assets/css/style.css';
import '../src/assets/css/bootstrap.css';
import  './assets/images/free.svg';



// const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');

// console.log(cartFromLocalStorage);

function App() {

  // const [cartItemState, setCartItemState] = useState(cartFromLocalStorage);

  // useEffect(() => {
  //   localStorage.setItem('cart', JSON.stringify(cartItemState));
  // }, [cartItemState]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/singleproductdetails/:id" element={<SingleProductDetails />} />
        <Route path="/whyus" element={<WhyUs />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Information />
    </Router>
  );
}

export default App;
