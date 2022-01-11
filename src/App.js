import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import Construction from './components/Construction/Construction'
import Examples from './components/Examples/Examples'
import SecondFormOfVerb from './components/SecondFormOfVerb/SecondFormOfVerb'
import Footer from './components/Footer/Footer'

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
      <Header />
      <Construction />
      <Examples />
      <SecondFormOfVerb />
      <Footer />
    </>
  )
}

export default App