import axios from 'axios';
import React, { useEffect, useState } from 'react'

import './product.css'
import './cate_list.css';

const Product = () => {
    const [data, setData] = useState(['']);

    const [active, setActive] = useState('all');

    useEffect(async () => {
        switch (active) {
            case "all":
                await axios.get('http://127.0.0.1:8000/api/products')
                    .then(res => {
                        setData(res.data)
                    });
                break;

            case "meat":
                await axios.get('http://127.0.0.1:8000/api/products?search=meat')
                    .then(res => {
                        setData(res.data)
                    });
                break;
            case "vegetables":
                await axios.get('http://127.0.0.1:8000/api/products?search=vegetables')
                    .then(res => {
                        setData(res.data)
                    });
                break;
            case "fruit":
                await axios.get('http://127.0.0.1:8000/api/products?search=fruit')
                    .then(res => {
                        setData(res.data)
                    });
                break;
            default:
                await axios.get('http://127.0.0.1:8000/api/products')
                    .then(res => {
                        setData(res.data)
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
                    {data.map((item) => (
                        <div className="product_wrapper col-lg-3 col-md-4 col-sm-6 col-12 m-auto">
                            <div className="product_img">
                                <img src={item.image} />
                            </div>
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
