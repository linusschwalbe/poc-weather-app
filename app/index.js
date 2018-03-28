
import React from 'react';
import { render } from 'react-dom';
import { injectGlobal} from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import App from './src';

injectGlobal`
  html {
    box-sizing: border-box;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *:focus {
    outline: none;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    line-height: 1.5;
    font-family: opensans-regular, sans-serif;
    font-weight: normal;
    color: #fff;
    height: 100%;
    background: linear-gradient(#849cb2, #8f9cae);
  }

  h1, h2, h3, h4, h5, h6, p {
    font-size: 1em;
    font-weight: normal;
    padding: 0;
    margin: 0;
  }

  b, strong, em, i {
    font-style: normal;
  }

  a {
    color: #fff;
    text-decoration: none;
  }
`;

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
, document.getElementById('site-root'));
