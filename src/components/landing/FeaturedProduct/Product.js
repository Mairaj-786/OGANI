import React, { useEffect, useState } from 'react'
import { all, meat, orange, vegetables, product } from '../../../data';
import './product.css'


const Product = () => {
    const [data, setData] = useState([]);
    const [active, setActive] = useState('all');

    useEffect(() => {
        switch (active) {
            case "all":
                setData(all)
                break;
            case "orange":
                setData(orange)
                break;
            case "meat":
                setData(meat)
                break;
            case "vegetables":
                setData(vegetables)
                break;

            default:
                setData(all)
        }
    }, [active])


    const list = [
        {
            id: 'all',
            title: "All"
        },
        {
            id: 'orange',
            title: "Orange "
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
                        <div className=" col-md-3 col-6 mx-auto">
                            <div className="product_wrapper" key={item.id}>
                                <img src={`/images/${item.img}`} />
                                <span>Crab Pool Security</span>
                                <p>$30.00</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Product
