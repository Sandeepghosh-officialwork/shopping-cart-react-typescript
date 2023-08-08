import React from 'react';
import useStore from './useStore';
import CartItems from './CartItems';
import CartIsEmpty from './CartIsEmpty';

const Cart: React.FC = () => {
    const state = useStore(state => state.cart);

    return (
        <div>
            {state.length ? <CartItems state={state} /> : <CartIsEmpty /> }
        </div>
    );
};

export default Cart;
