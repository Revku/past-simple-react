import { enumDefaultedMember } from '@babel/types';
import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
    background-color: #2F2F2F;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .positive {
        background-color: #1EBC54;
    }

    .negative {
        background-color: #D04848;
    }

    .question {
        background-color: #128DD2;
    }
`;

const ConstructionContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 80%;

    @media (max-width: 750px) {
        flex-direction: column;
    }
`;

const Card = styled.div`
    text-align: center;
    width: 100%;
    margin: 0 10px;
    margin-bottom: 80px;
`;

const CardHeading = styled.div`
    padding: 10px;
    width: 100%;
    margin-bottom: 15px;
    border-radius: 5px; 
`;

const Table = styled.table`
    background: #012B39;
    border-radius: 0.25em;
    border-collapse: collapse;
    margin: 1em;
    width: 80%;
    overflow-x: scroll;


    th {
        border-bottom: 1px solid #364043;
        color: #E2B842;
        font-size: 0.85em;
        font-weight: 600;
        padding: 0.5em 1em;
        text-align: center;
    }

    td {
        color: #fff;
        font-weight: 400;
        padding: 0.65em 1em;
    }

    .disabled td {
        color: #4F5F64;
    }

    tbody tr {
        transition: background 0.25s ease;
    }

    tbody tr:hover {
        background: #014055;
    }


`;

const Title = styled.h2`
    font-size: 30px;
    margin: 80px 0;
    text-transform: uppercase;
`;

const Construction = () => {
    return (
        <StyledWrapper>
            <Title>Construction</Title>
            <ConstructionContainer>
                <Card>
                    <CardHeading className="positive">Poisitive Form (+)</CardHeading>
                    <p>Subject + second form of verb</p>
                </Card>
                <Card>
                    <CardHeading className="negative">Negative Form (-)</CardHeading>
                    <p>Subject + did not + first form of verb</p>
                </Card>
                <Card>
                    <CardHeading className="question">Question Form (?)</CardHeading>
                    <p>Did + subject + first form of verb</p>
                </Card>
            </ConstructionContainer>

            <Table>
                <thead>
                    <tr>
                        <th>Positive Form (+)</th>
                        <th>Negative Form (-)</th>
                        <th>Question Form (?)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>I started</td>
                        <td>I did not (didn’t) start</td>
                        <td>Did I start</td>
                    </tr>
                    <tr>
                        <td>You started</td>
                        <td>You did not (didn’t) start</td>
                        <td>Did you start</td>
                    </tr>
                    <tr>
                        <td>He started</td>
                        <td>He did not (didn’t) start</td>
                        <td>Did he start</td>
                    </tr>
                    <tr>
                        <td>She started</td>
                        <td>She did not (didn’t) start</td>
                        <td>Did she start</td>
                    </tr>
                    <tr>
                        <td>It started</td>
                        <td>It did not (didn’t) start</td>
                        <td>Did it start</td>
                    </tr>
                    <tr>
                        <td>We started</td>
                        <td>We did not (didn’t) start</td>
                        <td>Did we start</td>
                    </tr>
                    <tr>
                        <td>You started</td>
                        <td>You did not (didn’t) start</td>
                        <td>Did you start</td>
                    </tr>
                    <tr>
                        <td>They started</td>
                        <td>They did not (didn’t) start</td>
                        <td>Did they start</td>
                    </tr>
                </tbody>
            </Table>
        </StyledWrapper>
    )
}

export default Construction