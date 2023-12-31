import React from 'react';
import { Link } from 'react-router-dom';

const imageSavings = require("../assets/images/saving-img.png");
const ViewSavings:React.FC = () => {
  return (
        <section className="saving_section ">
        <div className="box">
            <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6">
                <div className="img-box">
                    <img src= {imageSavings} alt="" />
                </div>
                </div>
                <div className="col-lg-6">
                <div className="detail-box">
                    <div className="heading_container">
                    <h2>
                        Best Savings on <br/>
                        new arrivals
                    </h2>
                    </div>
                    <p>
                    Qui ex dolore at repellat, quia neque doloribus omnis adipisci, ipsum eos odio fugit ut eveniet blanditiis praesentium totam non nostrum dignissimos nihil eius facere et eaque. Qui, animi obcaecati.
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

export default ViewSavings;
