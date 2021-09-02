import { ADD_TO_CART } from "../constants/actionTypes";

const initState = {
    products: [],
    totalPrice: 0,
}

const product = localStorage.getItem('product')
if (product) {
    initState.cart = product
}

export const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                products: action.payload
            }

        default:
            return state;
    }
}