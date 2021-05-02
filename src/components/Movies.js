import React from 'react'
import styled from 'styled-components'

function Movies() {
    return (
        <Container>
            <h4>Movies Recommended For You</h4>
            <Content>
                <Wrap>
                    <img src="/images/camerica.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="/images/thor-1.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="/images/cmarvel.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="/images/avenger-infinity-war.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="/images/bpanther.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="/images/dark-phonix.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="/images/deadpool-2.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="/images/tanhaji.jpg"/>
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies
const Container = styled.div`
    margin-bottom: 10px;
    cursor: pointer;
    h4 {
        font-size: 20px;
        color: #FFFFFFCC;
        font-family: "Roboto", "HalveticaNeue-Light", sans-serif;
        font-weight: 600;
    }
    h4:hover {
        color: rgb(31, 128, 224);
    }
`

const Content = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(8, minmax(0, 4fr));
`

const Wrap = styled.div`
    overflow: hidden;
    
    border: 1px solid rgba(249, 249, 249, 0.1);
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    width: 100%;
    height: auto;
    display: inline-block;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        verticle-align: middle;
    }

    &:hover {
        transform: scale(1.2);
        // box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, 
        // rgb(0 0 0 / 73%) 0px 30px 22px -10px;
        border-color: rgba(249, 249, 249, 0.8);
    }
`