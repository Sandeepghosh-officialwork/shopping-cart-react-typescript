import { create } from 'zustand';
import { StoreState } from './interface';

const useStore = create<StoreState>((set) => ({
    cart: [],
    addToCart: (product) => {
        set((state) => {
            const exist = state.cart.find((item) => item.id === product.id);
            if (exist) {
                console.log(exist);
                const _state =  {
                    cart: state.cart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                    ),
                    
                
                }
                console.log(_state);
                return _state;
                
            } else {
                return {
                    cart: [...state.cart, {...product, quantity: 1}]
                }
            }
        });
    },

    removeFromCart: (product) => {
        set((state) => {
            const exist = state.cart.find((item) => item.id === product.id);
            if (exist && exist.quantity === 1) {
                return {
                    cart: state.cart.filter((item) => item.id !== exist.id),
                }
            } else {
                return {
                    cart: state.cart.map((item) =>
                        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
                    ),
                }
            }
        });
    }
}));

export default useStore;