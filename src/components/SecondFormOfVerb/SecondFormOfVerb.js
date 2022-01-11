import React, { useState } from 'react';
import styled from 'styled-components'

const StyledWrapper = styled.div`
    background-color: #2F2F2F;
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

const Card = styled.div`
    width: 80%;
    margin: 0 5px;
    margin-bottom: 30px;
`;

const CardHeading = styled.div`
    padding: 10px;
    background-color: #7C00B7;
    margin-bottom: 20px;
    border-radius: 5px;
`;

const OrangeHighlight = styled.span`
    color: #FFA41B;
`;

const CardsWrapper = styled.div`
    display: flex;
    width: 80%;
`;

const Input = styled.input`
    padding: 10px;
    border: none;
    border-radius: 5px;
    color: black;
    border: 1px solid white;
    width: 50%;
`;

const Button = styled.button`
    padding: 10px;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: #5667FF;
    margin-left: 5px;
    cursor: pointer;
`;

const RedHighlight = styled.span`
     color: #FF0000;
`;

const SecondFormOfVerb = () => {
    const [verb, setVerb] = useState("");

    const generateVerb = () => {
        const tab = verb.split("");
        
        if (tab.pop() == "e") {
            setVerb(verb + "d")  
        } else {
            setVerb(verb + "ed")
        }

    }

    return (
        <StyledWrapper>
            <Title>Second Form Of Verb</Title>

            <CardsWrapper>
                <Card>
                    <CardHeading>Basic 2nd form</CardHeading>
                    <p>This is a past simple form of verb.<br />Construction: <OrangeHighlight>first form</OrangeHighlight> + <OrangeHighlight>-ed</OrangeHighlight> or <OrangeHighlight>-d</OrangeHighlight><br />Ex. <span>started</span>, <OrangeHighlight>watched</OrangeHighlight>, <OrangeHighlight>worked</OrangeHighlight></p>
                </Card>
                <Card>
                    <CardHeading>Second Form of Verb Generator</CardHeading>
                    <Input 
                        type="text" 
                        placeholder="Enter your verb ex. work"
                        onChange={(e) => setVerb(e.target.value)}
                        value={verb}
                        />
                    <Button onClick={generateVerb}>Generate</Button>
                </Card>
            </CardsWrapper>

            <Card>
                <CardHeading>Exceptions</CardHeading>
                <p>1. The verb ends with the letter <RedHighlight>-y</RedHighlight> after the consonant (e.g. -dy, -ry)<br/>Construction: first form without <RedHighlight>-y</RedHighlight> + <RedHighlight>i</RedHighlight> + <OrangeHighlight>-ed</OrangeHighlight><br/><br/>Examples:<br/>study » stud<RedHighlight>i</RedHighlight><OrangeHighlight>ed</OrangeHighlight></p>

                <p style={{marginTop: 30}}>2. The verb consists of one syllable and has a consonant + vowel + consonant at the end<br/>Construction: first form + <RedHighlight>double last letter</RedHighlight> + <OrangeHighlight>-ed</OrangeHighlight>

                <br /><br />Examples: <br />
                stop » stop<RedHighlight>p</RedHighlight><OrangeHighlight>ed</OrangeHighlight></p>
            </Card>
        </StyledWrapper>
    )
}

export default SecondFormOfVerb