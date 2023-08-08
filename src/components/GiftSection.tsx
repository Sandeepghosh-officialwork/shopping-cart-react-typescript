import React from 'react';
import{ Link } from 'react-router-dom';

const imageGifts = require("../assets/images/gifts.png");

const GiftSection:React.FC = () => {
  return (
    <section className="gift_section layout_padding-bottom">
    <div className="box ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <div className="img_container">
              <div className="img-box">
                <img src={imageGifts} alt="imageGifts" />
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="detail-box">
              <div className="heading_container">
                <h2>
                  Gifts for your <br/>
                  loved ones
                </h2>
              </div>
              <p>
                Omnis ex nam laudantium odit illum harum, excepturi accusamus at corrupti, velit blanditiis unde perspiciatis, vitae minus culpa? Beatae at aut consequuntur porro adipisci aliquam eaque iste ducimus expedita accusantium?
              </p>
              <div className="btn-box">
                <Link to="#" className="btn1">
                  Buy Now
                </Link>
                <Link to="#" className="btn2">
                  See More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default GiftSection
