// Library imports
import React from 'react';
// Function imports
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { injectGlobal } from 'styled-components';
import { ButtonText } from './components/Button';
// Component imports
import App from './App';
import EventDescription from './components/events/eventDescription/EventDescription';
import Booking from './components/events/booking/Booking';

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
  padding: 2%;

  box-sizing: border-box;
  overflow-Y: scroll;
  scroll-behavior: smooth;
}
`;

// Handling 404 error (TODO: Style)
const NoMatch = ({ location }) => (
  <div style={{ textAlign: 'center' }}>
    <h1>Error: 404</h1>
    <h2>
      No match for <code>{location.pathname}</code>
    </h2>
    <ButtonText to="/">&uarr; Home</ButtonText>
  </div>
);

render(
  <BrowserRouter>
    <Switch>
      {/* Landing page */}
      <Route exact path="/" component={App} />
      {/* Description page send props */}
      <Route
        exact
        path="/event/:title"
        render={props => <EventDescription {...props} />}
      />
      {/* Booking page send props */}
      <Route
        exact
        path="/event/:title/booking"
        render={props => <Booking {...props} />}
      />
      {/* 404 site */}
      <Route component={NoMatch} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
