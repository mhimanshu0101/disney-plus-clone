import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <Container>
            <FooMenu>
                <a href="">
                   <span> About Disney+ Hoststar</span>
                </a>
                <a href="">
                    <span>Terms Of Use</span>
                </a>
                <a href="">
                    <span>Privacy Policy</span>
                </a>
                <a href="">
                    <span>FAQ</span>
                </a>
                <a href="">
                    <span>Feedback</span>
                </a>
                <a href="">
                    <span>Careers</span>
                </a>
                <Copyright>
                    <p>@2021 STAR. All Rights Reserved. HBO, Home Box Office and all 
                        related channel and programming logos are service marks of, 
                        and all related programming visuals and elements are the 
                        property of, Home Box Office, Inc. All rights reserved.
                    </p>
                </Copyright>
            </FooMenu>
            
            <Social>
                <p>Connect with US</p>
                <FBButton>
                    <span>Facebook</span>
                </FBButton>
                <TwitterButton><span>Twitter</span></TwitterButton>
            </Social>
            <AppLink>
                <span>Disney+ Hotstar App</span>
            </AppLink>
        </Container>
    )
}

export default Footer

const Container = styled.div`
    padding: 25px;
    margin: 0;
    max-width: 1170px;
    width: 100%;
    display: flex;
`

const FooMenu = styled.div`
    display: table;

    a {
        color: #FFFFFFCC;
        font-family: "Roboto", "HalveticaNeue-Light", sans-serif;
        font-size: 14px;
        font-weight: 500;
        line-height: 16.0714px;
        padding: 0 25px 0 0;
        text-decoration: none;
    }
    a:hover {
        color: rgb(31, 128, 224);
    }
`

const Copyright = styled.div`
    padding-top: 11px;
    padding-right: 15%;
    font-size: 12px;
    line-height: 1.8;
    color: #dadada;
    font-weight: 400;
    display: block;
    
    p {
        box-sizing: border-box;
        margin: 0;
    }
`

const Social = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    padding-right: 15%;
    width: 60%;
`
const FBButton = styled.button`
    border-radius: 5px;
    display: flex;
    font-size: 15px;
    align-items: center;
    height: 40px;
    background: rgb(249, 249, 249);
    border: none;
    padding: 0px 5px;
    margin: 2px;
    cursor: pointer;
    letter-spacing: 1.8px;

    &:hover {
        background: rgb(198, 198, 198);
    }
`
const TwitterButton = styled(FBButton)``

const AppLink = styled.div``