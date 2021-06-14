import React from 'react'
import './from_the_blog.css';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
const FromTheBlog = () => {
    return (
        <div className='from_the_blog'>
            <strong className="text-center">
                From The Blog
            </strong>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="from_the_blog_card">
                        <div className="from_the_blog_card_img">
                            <img src="/images/banner1.webp" />
                        </div>
                        <div className="date_tittle">
                            <span><DateRangeIcon style={{ fontSize: '22px' }} />May 4,2019</span>
                            <span><ChatBubbleOutlineIcon style={{ fontSize: '22px' }} />5</span>
                            <h4>Cooking tips make cooking simple</h4>
                            <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="from_the_blog_card">
                        <div className="from_the_blog_card_img">
                            <img src="/images/banner2.webp" />
                        </div>
                        <div className="date_tittle">
                            <span><DateRangeIcon style={{ fontSize: '22px' }} />May 4,2019</span>
                            <span><ChatBubbleOutlineIcon style={{ fontSize: '22px' }} />5</span>
                            <h4>Cooking tips make cooking simple</h4>
                            <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="from_the_blog_card">
                        <div className="from_the_blog_card_img">
                            <img src="/images/banner1.webp" />
                        </div>
                        <div className="date_tittle">
                            <span><DateRangeIcon style={{ fontSize: '22px' }} />May 4,2019</span>
                            <span><ChatBubbleOutlineIcon style={{ fontSize: '22px' }} />5</span>
                            <h4>Cooking tips make cooking simple</h4>
                            <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FromTheBlog
