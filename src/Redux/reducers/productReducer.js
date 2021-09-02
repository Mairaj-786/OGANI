import { GET_ALL_PRODUCTS, GET_MEAT_CATEGORY, REMOVE_PRODUCT, GET_VEGETABLES_CATEGORY, GET_FRUIT_CATEGORY, SET_LOADING, CLOSE_LOADING, SINGLE_PRODUCT } from "../constants/actionTypes";

const initState = {
    loading: false,
    products: [],
    product: [],
}

const productReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }

        case SINGLE_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        case REMOVE_PRODUCT:
            return {
                ...state,
                product: ''
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case CLOSE_LOADING:
            return {
                ...state,
                loading: false
            }
        // case GET_MEAT_CATEGORY:
        //     return {
        //         ...state,
        //         meat: action.payload
        //     }
        // case GET_VEGETABLES_CATEGORY:
        //     return {
        //         ...state,
        //         vegetables: action.payload
        //     }

        default:
            return state;
    }
}

export default productReducer
