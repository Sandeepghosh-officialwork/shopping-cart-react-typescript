import React from 'react';
import { Link } from 'react-router-dom';

const Information:React.FC = () => {
  return (
    <section className="info_section  layout_padding2-top">
    <div className="social_container">
      <div className="social_box">
        <Link to="">
          <i className="fa-brands fa-facebook-f" style={{color: "#ffffff"}}></i>
        </Link>
        <Link to="">
        <i className="fa-brands fa-x-twitter" style={{color: "#ffffff"}}></i>
        </Link>
        <Link to="">
        <i className="fa-brands fa-instagram" style={{color: "#ffffff"}}></i>
        </Link>
        <Link to="">
        <i className="fa-brands fa-youtube" style={{color: "#ffffff"}}></i>
        </Link>
      </div>
    </div>
    <div className="info_container ">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <h6>ABOUT US</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum
              dolor sit amet,
            </p>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="info_form ">
              <h5>Newsletter</h5>
              <form action="#">
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
              </form>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <h6>NEED HELP</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum
              dolor sit amet,
            </p>
          </div>
          <div className="col-md-6 col-lg-3">
            <h6>CONTACT US</h6>
            <div className="info_link-box">
              <Link to="">
                <i className="fa fa-map-marker" aria-hidden="true" />
                <span> Gol Park, Kolkata, West Bengal. </span>
              </Link>
              <Link to="">
                <i className="fa fa-phone" aria-hidden="true" />
                <span>+91 9876543210</span>
              </Link>
              <Link to="">
                <i className="fa fa-envelope" aria-hidden="true" />
                <span> sandeepghosh@gmail.com</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer className=" footer_section">
      <div className="container">
        <p>
          © <span id="displayYear" /> All Rights Reserved By
          <Link to="#">Free Html Templates</Link>
        </p>
      </div>
    </footer>
  </section>  
  )
}

export default Information;
