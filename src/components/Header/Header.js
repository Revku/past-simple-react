import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
    height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
`;

const Title = styled.h1`
    font-size: 50px;
    text-transform: uppercase;

    @media (max-width: 600px) {
        font-size: 35px;   
    }
`;

const Example = styled.div`
    background-color: #53557E;
    padding: 10px;
    width: 450px;
    text-align: center;
    border-radius: 5px;
    margin: 15px 0;

    @media (max-width: 600px) {
        width: 300px;
        font-size: 14px;  
    }
`;

const ColorHighlight = styled.span`
    color: #FFA41B;
    
`;

const SubTitle = styled.p`
    width: 450px;

    @media (max-width: 600px) {
        width: 300px;
        font-size: 14px;  
    }
`;

const CTA = styled.button`
    padding: 10px 30px;
    background-color: #5667FF;
    color: white;
    border-radius: 5px;
    margin-top: 22px;
    border: none;
    cursor: pointer;
`;

const Header = () => {
    return (
        <StyledWrapper>
            <Title>Past Simple</Title>
            <Example>
                <ColorHighlight>We watched</ColorHighlight> the news last night.
            </Example>
            <SubTitle>The simple past is a verb tense that is used to talk about things that happened or existed before now. </SubTitle>
            <CTA>Read More</CTA>
        </StyledWrapper>
    )
}

export default Header