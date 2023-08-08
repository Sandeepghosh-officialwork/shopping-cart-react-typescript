import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import useStore from './useStore';
import {CartModel, Rating} from './interface';

type productType = {
  id: number,
  title: string,
  price: number,
  category: string,
  description:string,
  image: string,
  rating: Rating
} | null;

const SingleProductDetails:React.FC = () => {
  const [currentProductDetails, setCurrentProductDetails] = useState<productType>(null);
  const { id } = useParams();

  useEffect(()=>{
    console.log(id);
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then((res)=>{
      setCurrentProductDetails(res.data);
      
    });
  },[id]);

  const addItem = useStore(state => state.addToCart);
  const addItemToCart = (prod: productType | null) => {
      if (prod) {
          const cartProduct: CartModel = {
              id: prod.id,
              title: prod.title,
              price: prod.price,
              description: prod.description,
              category: prod.category,
              image: prod.image,
              rating: prod.rating,
              quantity: 1
          }
          addItem(cartProduct);
      }
  }

  return (
    currentProductDetails ?
    (<>
      <div className='container my-5'>
        <div key={id}>
          <div className="my-5">

            <div className="col-md-6 col-lg-6 mb-3">
              <img src = {currentProductDetails?.image} height="500px" width="400px" alt={currentProductDetails?.title} />
            </div>
            
            <div className="col-md-6 col-lg-6">
              <h4 className="text-uppercase text-black-50">{currentProductDetails?.category}</h4>
              <h1 className="display-5">{currentProductDetails?.title}</h1>
              <p className="lead fw-bolder">
                  Rating {currentProductDetails?.rating.count && currentProductDetails?.rating.rate}
                  <i className="fa fa-star"></i>
              </p>
              <h3 className="display-6 fw-bold my-4">
                  $ {currentProductDetails?.price}
              </h3>
              <p className="lead">{currentProductDetails?.description}</p>
              <div>
              <button type="button" className='btn btn-primary' onClick={() => addItemToCart(currentProductDetails)}>Add to Cart</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>) : null)
}

export default SingleProductDetails;
