import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
    padding: 20px 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Item = styled.a`
    margin-left: 15px;
    color: white;
    font-size: 16px;
    text-decoration: none;
`;

const Heading = styled.h2`
    font-size: 22px;
    text-transform: uppercase;
    font-weight: 600;
`;

const Links = styled.div`
    @media (max-width: 600px) {
        display: none;
    }
`;

const Nav = () => {
    return (
        <StyledWrapper>
            <div>
                <Heading>Past Simple</Heading>
            </div>
            <Links>
                <Item href="./#construction">Construction</Item>
                <Item href="./#examples">Examples</Item>
                <Item href="./#secondformofverb">Second Form Of Verb</Item>
            </Links>
        </StyledWrapper>
    )
}

export default Nav