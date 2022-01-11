import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import Nav from './components/Nav/Nav'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', 'Sergoe UI', 'Arial';
  }

  body {
    height: 100%;
    width: 100%;
    background-color: #222222;
    color: white;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />

      <Nav />
    </>
  )
}

export default App