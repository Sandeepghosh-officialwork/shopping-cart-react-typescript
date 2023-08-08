export interface CartModel {
    id: number;
    image: string;
    title: string;
    price: number;
    description: string;
    category: string;
    rating: Rating;
    quantity: number;
}

export interface Rating {
    rate: number;
    count: number;
}

export interface StoreState {
    cart: CartModel[];
    addToCart: (product: CartModel) => void;
    removeFromCart: (product: CartModel) => void;
}

export interface StateTypes {
    state: CartModel[];
}

export interface ProductModel {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

export interface imageType {
    id: number;
    title: string;
    price: number;
    category: string;
    description:string;
    image: string;
}
