import React from 'react'
import styled from 'styled-components'

function Movies() {
    return (
        <Container>
            <h4>Recommended for you</h4>
            <Content>
                <Wrap>
                    <img src="/images/logo.svg"/>
                </Wrap>
                <Wrap>
                    <img src="/images/logo.svg"/>
                </Wrap>
                <Wrap>
                    <img src="/images/logo.svg"/>
                </Wrap>
                <Wrap>
                    <img src="/images/logo.svg"/>
                </Wrap>
                <Wrap>
                    <img src="/images/logo.svg"/>
                </Wrap>
                <Wrap>
                    <img src="/images/logo.svg"/>
                </Wrap>
                <Wrap>
                    <img src="/images/logo.svg"/>
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies
const Container = styled.div`
    margin-bottom: 10px;
`

const Content = styled.div`
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(6, minmax(0, 4fr));
`

const Wrap = styled.div`
    overflow: hidden;
    cursor: pointer;
    border: 1px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.2);
        // box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, 
        // rgb(0 0 0 / 73%) 0px 30px 22px -10px;
        border-color: rgba(249, 249, 249, 0.8);
    }
`