import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: inherit;
    font-size: 100%;
    font-weight: inherit;
    transition: all 0.15s ease-in-out;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: Helvetica, Sans-Serif;
    background-color: #f1f2f3;
  }
  a
  {
    text-decoration:none; 
    color:inherit; 
    cursor:pointer;
    }
  button {
    background-color:transparent; 
    color:inherit; 
    border-width:0; 
    padding:0; 
    cursor:pointer;
    }
    li {
      list-style: none;
    }

`;
