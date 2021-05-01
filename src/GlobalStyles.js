import {createGlobalStyle} from 'styled-components';
export const GlobalStyles = createGlobalStyle`

* { margin: 0; 
  padding: 0; 
  list-style: none;  
  box-sizing: border-box; }

  body {
    min-height: 100vh;
    background: #f3f8f9;
    color: #1c1c1c;

  }
html {
  font-size: 24px;
}

@media (max-width: 1921px) {
  html {
    font-size: 22px;
  }
}

@media (max-width: 1441px) {
  html {
    font-size: 20px;
  }
}

@media (max-width: 1025px) {
  html {
    font-size: 18px;
  }
}

  `;
