// Library imports
import React, { Component } from 'react';
import styled from 'styled-components';
import ScrollableAnchor from 'react-scrollable-anchor';

// Component imports
import BGVideo from './BGVideo';
import EventElement from './EventElement';

// Function imports
import { FormatText, media } from '../../helpers/utility';
import { SecondaryH2 } from '../../helpers/typography';
import { ButtonPrimary } from '../../Button';

// Section container style
const EventListWrapper = styled.section`
  position: relative;
  padding: 15rem 0;

  ${media.portrait`
    padding: 5rem 0;
  `};
`;

// EventItem Container
const EventScroller = styled.div`
  margin: 0 auto;
  height: 65rem;
  width: 65%;
  overflow: auto;
  border: 1px solid #f7f7f7;

  ${media.portrait`
    width: 85%;
  `} ${media.phone`
    width: 100%;
  `};
`;

class EventList extends Component {
  state = {
    events: this.props.events
  };

  // Render component
  render() {
    return (
      <EventListWrapper>
        {/* Background Video component */}
        <BGVideo />

        <FormatText textAlign="center" marginBottom="6rem">
          <ScrollableAnchor id={'EventList'}>
            <SecondaryH2>Events in Memphis</SecondaryH2>
          </ScrollableAnchor>
        </FormatText>
        <EventScroller>
          <EventElement events={this.state.events} />
        </EventScroller>
        <FormatText textAlign="center" marginTop="6rem">
          <ButtonPrimary
            // linear-gradient color1
            color1="41, 152, 255"
            // linear-gradient color2
            color2="86, 67, 250"
            // text of button color
            color="#fff"
            // box-shadow
            bs="rgba(86, 67, 250, 0.3)"
            to="#"
          >
            Get More
          </ButtonPrimary>
        </FormatText>
      </EventListWrapper>
    );
  }
}

export default EventList;
