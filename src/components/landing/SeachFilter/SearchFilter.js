import React, { useState } from 'react';
import './search_filter.css';

import Left from './Left';
import Right from './Right';

const SearchFilter = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="search_filter">
            {/* <div className="search_filter_left">
                <Left setShow={setShow} show={show} />
            </div> */}
            <div className="search_filter_right">
                <Right />
            </div>
        </div>
    )
}

export default SearchFilter
