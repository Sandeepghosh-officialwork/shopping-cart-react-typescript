import React from 'react';
import { Link, Routes, Route, BrowserRouter as Router } from 'react-router-dom';

const Navbar:React.FC = () => {
  return (
        <div className="container">
            <div className="hero_area">
                <header className="header_section">
                <nav className="navbar navbar-expand-lg custom_nav-container ">
                    <Link className="navbar-brand" to="index.html">
                    <span>Giftos</span>
                    </Link>
                    <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <span className="" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav  ">
                        <li className="nav-item active">
                        <Link className="nav-link" to="/">
                            Home <span className="sr-only">(current)</span>
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/shop">
                            Shop
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/whyus">
                            Why Us
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/testimonial">
                            Testimonial
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/contactus">
                            Contact Us
                        </Link>
                        </li>
                    </ul>
                    <div className="user_option">
                        <Link to="/login">
                        <i className="fa fa-user" aria-hidden="true" />
                        <span>Login</span>
                        </Link>
                        <Link to="/cart">
                        <i className="fa fa-shopping-bag" aria-hidden="true" />
                        </Link>
                        <form className="form-inline ">
                        <button className="btn nav_search-btn" type="submit">
                            <i className="fa fa-search" aria-hidden="true" />
                        </button>
                        </form>
                    </div>
                    </div>
                </nav>
            </header>
        </div>       
    </div>
  )
}

export default Navbar;
