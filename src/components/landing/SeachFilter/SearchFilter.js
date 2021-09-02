import React, { useState } from 'react';
import './search_filter.css';

import Right from './Right';

const SearchFilter = () => {
    return (
        <div className="search_filter">
            <div className="search_filter_right">
                <Right />
            </div>
        </div>
    )
}

export default SearchFilter
