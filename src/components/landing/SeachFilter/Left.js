import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';

const Left = (props) => {
    const list = [
        { id: 1, title: 'Fresh meat' },
        { id: 2, title: 'Vegetables' },
        { id: 3, title: 'Fruit & Nut Gifts' },
        { id: 4, title: 'Fresh Berries' },
        { id: 5, title: 'Butter & Eggs' },
        { id: 6, title: 'Fastfood' }
    ]
    return (
        <div className="search_filter_left_wrapper">
            <div className="search_filter_left_active" onClick={() => props.setShow(!props.show)}>
                <MenuIcon style={{ cursor: 'pointer', fontSize: '19px' }} />
                <strong>All department</strong>
            </div>
            <ul className={props.show ? 'list' : 'delete'}>

                {list.map((item) => (
                    <li className="search_filter_left">
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Left
