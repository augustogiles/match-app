import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    margin: 0px;
    background-color: #f2f2f2;

    a { 
      color: inherit; 
      text-decoration: none;
    } 

    ul {
      list-style-type: none;
    }

  }
`