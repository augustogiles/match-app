import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    margin: 0px;
    background-color: #f2f2f2;

    scroll-behavior: smooth;

    a { 
      color: inherit; 
      text-decoration: none;
    } 

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
    }

    h1 {
      margin: 0;
    }

  }
`