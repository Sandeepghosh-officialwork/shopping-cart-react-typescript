import axios from 'axios';
import React, { useState ,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { imageType } from './interface';

const LatestProducts:React.FC = () => {

  const [currentData, setCurrentData] = useState<imageType[]>([]);

  const navigate = useNavigate();
  useEffect(() =>{
  
    axios.get('https://fakestoreapi.com/products')
    .then((response) => {
      console.log(response.data)
      setCurrentData(response.data);
      });

  }, []);

  return (
    <section className="shop_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>Latest Products</h2>
      </div>
      <div className="row">

        {currentData.map((post) => {
          const {id, title, price, image} = post;

          return (
            <div key={id} className="col-sm-6 col-md-4 col-lg-3" onClick={ ()=> navigate(`/singleproductdetails/${id}`)}>
            <div className="box">
              <Link to="">
                <div className="img-box">
                  <img src={image} alt="" />
                </div>
                <div className="detail-box">
                  <h6>{title}</h6>
                  <h6>
                    Price
                    <span>${price}</span>
                  </h6>
                </div>
                <div className="new">
                  <span>New</span>
                </div>
              </Link>
            </div>
          </div>
          )
        })}
      </div>
      <div className="btn-box">
        <Link to="#">View All Products</Link>
      </div>
    </div>
  </section>
  )
}

export default LatestProducts;
