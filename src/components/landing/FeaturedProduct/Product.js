import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import './product.css'
import './cate_list.css';
import { getFruitCategory, getMeatCategory, getVegetablesCategory } from '../../../Redux/actions/productsActions';
import { CLOSE_LOADING, GET_ALL_PRODUCTS, SET_LOADING } from '../../../Redux/constants/actionTypes';

const Product = () => {
    const dispatch = useDispatch()
    const { products, loading } = useSelector(state => state.productReducer)
    const [active, setActive] = useState('all');

    const url = 'https://djangooawesome.herokuapp.com/api/products'
    const FilterUrl = 'https://djangooawesome.herokuapp.com/api/products?search='
    useEffect(async () => {
        switch (active) {
            case "all":
                dispatch({ type: SET_LOADING })
                axios.get(url)
                    .then(res => {
                        dispatch({ type: GET_ALL_PRODUCTS, payload: res.data })
                        dispatch({ type: CLOSE_LOADING })
                    });
                break;

            case "meat":
                dispatch({ type: SET_LOADING })
                axios.get(`${FilterUrl}meat`)
                    .then(res => {
                        dispatch({ type: GET_ALL_PRODUCTS, payload: res.data })
                        dispatch({ type: CLOSE_LOADING })
                    });
                break;
            case "vegetables":
                dispatch({ type: SET_LOADING })
                axios.get(`${FilterUrl}vegetables`)
                    .then(res => {
                        dispatch({ type: GET_ALL_PRODUCTS, payload: res.data })
                        dispatch({ type: CLOSE_LOADING })
                    });
                break;
            case "fruit":
                dispatch({ type: SET_LOADING })
                axios.get(`${FilterUrl}fruit`)
                    .then(res => {
                        dispatch({ type: GET_ALL_PRODUCTS, payload: res.data })
                        dispatch({ type: CLOSE_LOADING })
                    });
                break;
            default:
                dispatch({ type: SET_LOADING })
                axios.get('https://djangooawesome.herokuapp.com/api/products')
                    .then(res => {
                        dispatch({ type: GET_ALL_PRODUCTS, payload: res.data })
                        dispatch({ type: CLOSE_LOADING })
                    });
        }




    }, [active])




    const list = [
        {
            id: 'all',
            title: "All"
        },
        {
            id: 'fruit',
            title: "Fruit & Drinks "
        },
        {
            id: 'meat',
            title: "Fresh Meat"
        },
        {
            id: 'vegetables',
            title: "Vegetables"
        },
    ];


    return (
        <>
            <div className='cate_list'>
                {list.map((item) => (
                    <ul key={item.id}>
                        <li className={active === item.id ? 'activeClass' : ''} onClick={() => setActive(item.id)}>{item.title}</li>
                    </ul>
                ))}
            </div>
            <div className="product">
                <div className="row">
                    {loading ? <img src="/images/loader.svg" className="loader" />
                        :
                        products.map((item) => (
                            <div className="product_wrapper col-lg-3 col-md-4 col-sm-6 col-12 m-auto" key={item.id}>
                                <Link to={`details/${item.id}`}>
                                    <div className="product_img">
                                        <img src={item.img} />
                                    </div>
                                </Link>
                                <div className="title_price">
                                    <span>{item.title}</span>
                                    <p>${item.price}</p>
                                </div>
                            </div>
                        ))}

                </div>
                <div className="product_banner">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <img src="/images/banner1.webp" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <img src="/images/banner2.webp" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product
