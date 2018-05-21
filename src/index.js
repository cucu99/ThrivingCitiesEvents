import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';

// import injectGlobal helper
import { injectGlobal } from 'styled-components';

// Global style
injectGlobal`

/* Reset */
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

/* Root font-size */
html {
  font-size: 62.5%;
}

body {
  /* Font properties */
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  /* font-size: 16px; */
  line-height: 1.7;
  color: #777;
  /* Padding around body */
  padding: 3rem;

  box-sizing: border-box;
}
`;

render(
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>,
  document.getElementById('root')
);
