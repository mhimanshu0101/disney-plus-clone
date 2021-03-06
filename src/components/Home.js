import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Movies from './Movies'
import Viewers from './Viewers'
import Footer from './Footer'
import LatestTrending from './LatestTrending'

function Home() {
    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <LatestTrending />
            <Movies />
            <Movies />
            <Movies />
            <Movies />
            <Movies />
            <Movies />
            <Footer />
        </Container>
    )
}

export default Home

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
    
    &:before {
        background: url("/images/home-background.png") center center / cover 
        no-repeat fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
        position: absolute;
        content: "";
    }
`