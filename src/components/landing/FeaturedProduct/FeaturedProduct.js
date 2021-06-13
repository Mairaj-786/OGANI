import React from 'react'
import CateList from './CateList'
import './featured_product.css'
import Product from './Product'
const FeaturedProduct = () => {
    return (<>
        <div className='featured_product'>
            <strong>Featured Product</strong>

            <Product />
        </div>
    </>
    )
}

export default FeaturedProduct
