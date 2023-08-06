import React from 'react'
import {Link} from 'react-router-dom';




// function* imageNumFunc(){
//   let imageNum = 1;
//   while(imageNum){
//     yield imageNum++;
//   }
// }

// let pathImage = require(`../../public/assets/images/p${imageNum++}.png`);

const LatestProducts:React.FC = () => {
  return (
    <section className="shop_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>Latest Products</h2>
      </div>
      <div className="row">
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <Link to="">
              <div className="img-box">
                <img src="" alt="" />
              </div>
              <div className="detail-box">
                <h6>Ring</h6>
                <h6>
                  Price
                  <span>$200</span>
                </h6>
              </div>
              <div className="new">
                <span>New</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <Link to="">
              <div className="img-box">
                <img src={`../../public/assets/images/p3.png`} alt="" />
              </div>
              <div className="detail-box">
                <h6>Watch</h6>
                <h6>
                  Price
                  <span>$300</span>
                </h6>
              </div>
              <div className="new">
                <span>New</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <Link to="">
              <div className="img-box">
                <img src="" alt="" />
              </div>
              <div className="detail-box">
                <h6>Teddy Bear</h6>
                <h6>
                  Price
                  <span>$110</span>
                </h6>
              </div>
              <div className="new">
                <span>New</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <Link to="">
              <div className="img-box">
                <img src="../../public/assets/images/p4.png" alt="" />
              </div>
              <div className="detail-box">
                <h6>Flower Bouquet</h6>
                <h6>
                  Price
                  <span>$45</span>
                </h6>
              </div>
              <div className="new">
                <span>New</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <Link to="">
              <div className="img-box">
                <img src=".." alt="" />
              </div>
              <div className="detail-box">
                <h6>Teddy Bear</h6>
                <h6>
                  Price
                  <span>$95</span>
                </h6>
              </div>
              <div className="new">
                <span>New</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <Link to="">
              <div className="img-box">
                <img src="../../public/assets/images/p6.png" alt="" />
              </div>
              <div className="detail-box">
                <h6>Flower Bouquet</h6>
                <h6>
                  Price
                  <span>$70</span>
                </h6>
              </div>
              <div className="new">
                <span>New</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <Link to="">
              <div className="img-box">
                <img src="../../public/assets/images/p7.png" alt="" />
              </div>
              <div className="detail-box">
                <h6>Watch</h6>
                <h6>
                  Price
                  <span>$400</span>
                </h6>
              </div>
              <div className="new">
                <span>New</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <Link to="">
              <div className="img-box">
                <img src="../../public/assets/images/p8.png" alt="" />
              </div>
              <div className="detail-box">
                <h6>Ring</h6>
                <h6>
                  Price
                  <span>$450</span>
                </h6>
              </div>
              <div className="new">
                <span>New</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="btn-box">
        <Link to="">View All Products</Link>
      </div>
    </div>
  </section>
  )
}

export default LatestProducts;
