import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducer";
import productReducer from "./reducers/productReducer";


const rootReducer = combineReducers({
    productReducer,
    cartReducer
})

const middleware = [thunk];
const Store = createStore(rootReducer, (composeWithDevTools(applyMiddleware(...middleware))))

export default Store