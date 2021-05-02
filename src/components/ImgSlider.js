import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        SlidesToScroll: 1,
        autoplay: true
    }


    return (
        <Carousel {...settings}>
            <Wrap>
                <img src="/images/slider-badging.jpg" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-badag.jpg" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-scale.jpg" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-scales.jpg" />
            </Wrap>
        </Carousel>
    )
}

export default ImgSlider
const Carousel = styled(Slider)`
    margin-top: 20px transparent;

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
            // opacity: 0;
        }
    }
    li.slick-active button:before {
        color: white;
        // opacity: 0;
    }
    .slick-list {
        overflow: visible;
    }
    button {
        z-index: 1;
    }
    .slick-slider {
        position: relative;
        display: block;
        user-select: none;
    }
`
const Wrap = styled.div`
    cursor: pointer;
    margin: 1px;
    
    img {
        border: 2px solid transparent;
        width: 100%;
        height: 100%;
        border-radius: 9px;
        // box-shadow: rgb(0 0 0 / 69%) 0px 25px 30px -10px, 
        // rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 500ms;
        margin-top: 15px;

        &:hover {
            border: 2px solid rgba(249, 249, 249, 0.7);
        }
    }
    
`