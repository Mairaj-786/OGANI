import React from 'react'
import './slider.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const ImgSlider = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const slideList = [
        { id: 1, img: '/images/meat.jpg', title: 'fresh meat' },
        { id: 2, img: '/images/dry_fruit.jpg', title: 'dry fruit' },
        { id: 3, img: '/images/drink_fruit.jpg', title: 'fresh fruit' },
        { id: 4, img: '/images/slide1.webp', title: 'fresh meat' },
        { id: 5, img: '/images/slide2.webp', title: 'dry drink fruit' },
    ]
    return (
        <div className="slider">
            <Slider {...settings}>
                {slideList.map((item) => (
                    <div className="slides">
                        <div className="slides_img">
                            <img src={item.img} />;
                            </div>
                        <div className="slides_text">
                            <strong>{item.title}</strong>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>

    )
}

export default ImgSlider
