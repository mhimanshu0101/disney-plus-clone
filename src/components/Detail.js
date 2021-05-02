import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
        <Container>
            <Background>
                <img src="/images/detail-deadpool.jpg" />
            </Background>
            <ImageTitle>
                <img src="" />
                <h4>Deadpool</h4>
            </ImageTitle>
            <Control>
                <PlayButton>
                    <img src="/images/play-icon-black.png" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" />
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchedButton>
                <img src="/images/group-icon.png" />
                </GroupWatchedButton>
            </Control>
            <SubTitle>
                1 hr 54 min · 2018 · Superhero · 15+ · English
            </SubTitle>
            <Description>
            Mutant mercenary Wade Wilson aka. Deadpool brings together a team of rogue mercenaries to protect a young boy from the brutal time-travelling cyborg, Cable.
            </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vv + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vv

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    h4 {
        margin-left: 150px;
        font-size: 4rem;
        font-family: Georgia;
    }
`

const Control = styled.div`
    display: flex;
    align-items: center;
`
const PlayButton = styled.button`
    border-radius: 5px;
    display: flex;
    font-size: 15px;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    padding: 0px 24px;
    margin: 22px;
    cursor: pointer;
    letter-spacing: 1.8px;

    &:hover {
        background: rgb(198, 198, 198);
    }
`

const TrailerButton = styled(PlayButton)`
    background: rgb(0,0,0,0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;
`

const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0,0,0.6);
    cursor: pointer;
    span {
        font-size: 50px;
        color: white;
    }
    &:hover {
        background: rgb(198, 198, 198);
    }
`

const GroupWatchedButton = styled(AddButton)`
    background-color: black;
    &:hover {
        background: rgb(198, 198, 198);
    }
`
const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-left: 26px;
`
const Description = styled.div`
    min-height: 20px;
    margin-left: 26px;
    line-height: 1.4;
    font-size: 18px;
    margin-top:16px;
    width: 50%;
`