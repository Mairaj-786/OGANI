import React from 'react'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import PhoneIcon from '@material-ui/icons/Phone';
import Hero from './Hero';

const Right = () => {
    return (
        <div className="search_filter_right_wrapper">
            <div className="row">
                <div className="col-lg-9 col-md-9 col-12">
                    <div className="search">
                        <div className="search_text">
                            <strong>All Categories</strong>
                            <KeyboardArrowDownIcon />
                        </div>
                        <div className="search_input">
                            <input placeholder="What do u want to need" />
                            <button>search</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-6">
                    <div className="contact">
                        <div className="phone_icon">
                            <PhoneIcon className="phone_icon_wrapper" style={{ fontSize: '30px' }} />
                        </div>
                        <div className="number">
                            <strong> +92 315.997.833</strong>
                            <p>support 24/7 time</p>
                        </div>

                    </div>
                </div>

                <div className="col-lg-12">
                    <Hero />
                </div>

            </div>
        </div>
    )
}

export default Right
