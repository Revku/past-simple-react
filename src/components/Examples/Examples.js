import React from 'react';
import styled from 'styled-components'

const StyledWrapper = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    padding: 80px 0;
    align-items: center;
    flex-direction: column;
    `; 

const Title = styled.h2`
    font-size: 30px;
    text-transform: uppercase;
    margin-bottom: 80px;
    `;

const ColorHighlight = styled.span`
    color: #FFA41B;
    `;

const ExamplesContainer = styled.div`
    width: 80%;
    display: flex;
    @media (max-width: 750px) {
        flex-direction: column;
    }
`;
const Column = styled.div`
    margin: 0 5px;
    width: 100%;
`;
const Item = styled.div`
    background-color: #53557E;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;
    width: 100%;
`;

const Examples = () => {
    return (
        <StyledWrapper>
            <Title>Examples</Title>

            <ExamplesContainer>
                <Column>
                    <Item>Yesterday <ColorHighlight>I worked</ColorHighlight> very hard.</Item>
                    <Item>She <ColorHighlight>was</ColorHighlight> very tired after work.</Item>
                    <Item>We <ColorHighlight>were</ColorHighlight> at home all day yesterday.</Item>
                </Column>
                <Column>
                    <Item>I <ColorHighlight>could</ColorHighlight> swim when I <ColorHighlight>was</ColorHighlight> 5 years old.</Item>
                    <Item>She <ColorHighlight>spoke</ColorHighlight> to Mary two days ago.</Item>
                    <Item>We <ColorHighlight>went</ColorHighlight> to the station and bought the tickets.</Item>
                </Column>
            </ExamplesContainer>
        </StyledWrapper>
    )
}

export default Examples