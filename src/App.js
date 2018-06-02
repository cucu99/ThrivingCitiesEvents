// Import Libraries
import React, { Component } from 'react';
import styled from 'styled-components';
import ScrollableAnchor from 'react-scrollable-anchor';

// Import Components
import Nav from './components/navbar/Nav';
import Header from './components/header/Header';
import About from './components/about/About';
import Features from './components/features/Features';
import PromotedEvents from './components/events/promotedEvents/PromotedEvents';
import EventList from './components/events/eventList/EventList';
import Footer from './components/footer/Footer';
// Import events data
import { events } from './data/events/events';

// const ScrollingBox = styled.div`
//   overflow-y: scroll;
//   scroll-behavior: smooth;
// `;
const ScrollingBox = styled.div``;

class App extends Component {
  // initialize state
  state = {
    events: events
  };
  // render components
  render() {
    return (
      <ScrollingBox>
        <Nav />
        <ScrollableAnchor id={'Home'}>
          <header>
            <Header />
          </header>
        </ScrollableAnchor>
        <main>
          <About events={this.state.events} />
          <Features />
          <PromotedEvents events={this.state.events} />
          <EventList events={this.state.events} />
        </main>
        <footer>
          <Footer />
        </footer>
      </ScrollingBox>
    );
  }
}

export default App;
