import React from 'react'
import {Link} from 'react-router-dom';

const CarouselPart:React.FC = () => {
  return (
        <div className="container">
        <section className="slider_section">
        <div className="slider_container">
            <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
            >
            <div className="carousel-inner">
                <div className="carousel-item active">
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-md-7">
                        <div className="detail-box">
                        <h1>
                            Welcome To Our <br />
                            Gift Shop
                        </h1>
                        <p>
                            Sequi perspiciatis nulla reiciendis, rem, tenetur
                            impedit, eveniet non necessitatibus error distinctio
                            mollitia suscipit. Nostrum fugit doloribus consequatur
                            distinctio esse, possimus maiores aliquid repellat
                            beatae cum, perspiciatis enim, accusantium perferendis.
                        </p>
                        <Link to="/contactus">Contact Us</Link>
                        </div>
                    </div>
                    <div className="col-md-5 ">
                        <div className="img-box">
                        <img src="images/slider-img.png" alt="" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="carousel-item ">
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-md-7">
                        <div className="detail-box">
                        <h1>
                            Welcome To Our <br />
                            Gift Shop
                        </h1>
                        <p>
                            Sequi perspiciatis nulla reiciendis, rem, tenetur
                            impedit, eveniet non necessitatibus error distinctio
                            mollitia suscipit. Nostrum fugit doloribus consequatur
                            distinctio esse, possimus maiores aliquid repellat
                            beatae cum, perspiciatis enim, accusantium perferendis.
                        </p>
                        <Link to="/contactus">Contact Us</Link>
                        </div>
                    </div>
                    <div className="col-md-5 ">
                        <div className="img-box">
                        <img src="images/slider-img.png" alt="" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="carousel-item ">
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-md-7">
                        <div className="detail-box">
                        <h1>
                            Welcome To Our <br />
                            Gift Shop
                        </h1>
                        <p>
                            Sequi perspiciatis nulla reiciendis, rem, tenetur
                            impedit, eveniet non necessitatibus error distinctio
                            mollitia suscipit. Nostrum fugit doloribus consequatur
                            distinctio esse, possimus maiores aliquid repellat
                            beatae cum, perspiciatis enim, accusantium perferendis.
                        </p>
                        <Link to="/contactus">Contact Us</Link>
                        </div>
                    </div>
                    <div className="col-md-5 ">
                        <div className="img-box">
                        <img src="images/slider-img.png" alt="" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="carousel_btn-box">
                <Link 
                className="carousel-control-prev"
                to="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
                >
                <i className="fa fa-arrow-left" aria-hidden="true" />
                <span className="sr-only">Previous</span>
                </Link>
                <img src="images/line.png" alt="" />
                <Link 
                className="carousel-control-next"
                to="#carouselExampleIndicators"
                role="button"
                data-slide="next"
                >
                <i className="fa fa-arrow-right" aria-hidden="true" />
                <span className="sr-only">Next</span>
                </Link>
            </div>
            </div>
        </div>
        </section>
        </div>
  )
}

export default CarouselPart;
