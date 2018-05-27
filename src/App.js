import React, { Component } from 'react';

import Header from './components/header/Header';
import About from './components/about/About';
import Features from './components/features/Features';
import PromotedEvents from './components/events/promotedEvents/PromotedEvents';
import EventList from './components/events/eventList/EventList';

import { events } from './data/events/events';

class App extends Component {
  state = {
    events: events
  };
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <main>
          <About events={this.state.events} />
          <Features />
          <PromotedEvents events={this.state.events} />
          <EventList events={this.state.events} />
        </main>
      </div>
    );
  }
}

export default App;
