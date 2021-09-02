import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import './single_product.css'
import { ADD_TO_CART, CLOSE_LOADING, SET_LOADING, SINGLE_PRODUCT, REMOVE_PRODUCT } from '../../Redux/constants/actionTypes';

const SingleProduct = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const { product, loading } = useSelector(state => state.productReducer)


    useEffect(() => {
        dispatch({ type: SET_LOADING })
        fetch(`https://djangooawesome.herokuapp.com/api/product/${id}`)
            .then(response => response.json())
            .then(data => dispatch({ type: SINGLE_PRODUCT, payload: data }));
        dispatch({ type: CLOSE_LOADING })
        return () => {
            dispatch({ type: REMOVE_PRODUCT })
        }

    }, [])

    const handleAddToCart = (e) => {
        e.preventDefault();
        dispatch({ type: ADD_TO_CART, payload: product })
    }
    return (
        <>
            {loading ? <h1>Loading...</h1>
                :
                <div className="single_product">
                    <div className="single_product_img">
                        <img src={product.img} />
                    </div>
                    <div className="single_product_text">
                        <h3>{product.title}</h3>
                        <p>${product.price}.00</p>
                        <small>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.
                        </small>
                        <button onClick={handleAddToCart}>add to cart</button>

                    </div>
                </div>}

        </>

    )
}

export default SingleProduct
