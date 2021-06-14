import React from 'react'
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct'
import FromTheBlog from '../FromTheBlog/FromTheBlog'
import SearchFilter from '../SeachFilter/SearchFilter'
import ImgSlider from '../Slider/ImgSlider'
const Home = () => {
    return (
        <div className="home" >
            <SearchFilter />
            <ImgSlider />
            <FeaturedProduct />
            <FromTheBlog />
        </div>
    )
}

export default Home
