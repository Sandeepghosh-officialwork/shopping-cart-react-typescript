import React from 'react';
import { CartModel } from './interface';
import useStore from './useStore';
import { StateTypes } from './interface';

const CartItems: React.FC<StateTypes> = ({state}) => {
    //Cart state
    const addItemState = useStore(state => state.addToCart);
    const removeItemState = useStore(state => state.removeFromCart);

    //function to add items in cart
    const addItem = (item: CartModel) => {
        addItemState(item);
    }
    //function to remove items from cart
    const removeItem = (item: CartModel) => {
        removeItemState(item);
    }

    return (
        <>
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                {state.map((items) => (
                    <div className="container py-4">
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <img src={items.image} alt={items.title} height="200px" width="180px" />
                            </div>
                            <div className="col-md-4">
                                <h3>{items.title}</h3>
                                <p className="lead fw-bold">
                                     Total Price : $ {items.quantity * items.price}
                                </p>
                                <button className="btn btn-outline-dark me-4" onClick={() => removeItem(items)}>
                                    <i className="fa fa-minus"></i>
                                </button>
                                <span className='ml-2 mr-2'>{items.quantity}</span>
                                <button className="btn btn-outline-dark" onClick={() => addItem(items)}>
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default CartItems;