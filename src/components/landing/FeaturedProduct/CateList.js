import React, { useEffect, useState } from 'react'
import { meat, orange, vegetables, all, product } from '../../../data';
import './cate_list.css';


const CateList = () => {
    const [active, setActive] = useState('all');
    const [data, setData] = useState([]);

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

        </>
    )
}

export default CateList
