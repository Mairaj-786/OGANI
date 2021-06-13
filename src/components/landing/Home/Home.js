import React from 'react'
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct'
import SearchFilter from '../SeachFilter/SearchFilter'
import ImgSlider from '../Slider/ImgSlider'
const Home = () => {
    return (
        <>
            <SearchFilter />
            <ImgSlider />
            <FeaturedProduct />
        </>
    )
}

export default Home
