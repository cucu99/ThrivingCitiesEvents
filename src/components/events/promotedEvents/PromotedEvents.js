// Library Imports
import React from 'react';
import styled from 'styled-components';
import ScrollableAnchor from 'react-scrollable-anchor';
// Component Imports
import PromotedEventsCard from './PromotedEventsCard';
// Function Imports
import { SecondaryH2 } from '../../helpers/typography';
import { FormatText, media } from '../../helpers/utility';
import { Row, Column } from '../../helpers/grid';
import { ButtonPrimary } from '../../Button';
// Section container style
const PromotedEventsWrapper = styled.section`
  background-color: #f7f7f7;
  padding: 25rem 0 15rem 0;
  margin-top: -10rem;

  ${media.portrait`
    padding: 20rem 0 5rem 0;
  `};
`;

export default ({ events }) => {
  let sortedByParticipants = [];
  // Sort events by participants
  sortedByParticipants = events.sort(function(a, b) {
    return b.participants - a.participants;
  });

  return (
    <PromotedEventsWrapper>
      <FormatText textAlign="center" marginBottom="6rem">
        <ScrollableAnchor id={'PopularEvents'}>
          <SecondaryH2>Most popular events</SecondaryH2>
        </ScrollableAnchor>
      </FormatText>

      <Row marginBottom="6rem">
        <Column gutter="6rem" width={1 / 3}>
          {/* Call PromotedEventsCard component and pass props */}
          <PromotedEventsCard
            events={sortedByParticipants[0]}
            color1="255, 185, 0"
            color2="255, 119, 48"
          />
        </Column>
        <Column gutter="6rem" width={1 / 3}>
          {/* Call PromotedEventsCard component and pass props */}
          <PromotedEventsCard
            events={sortedByParticipants[1]}
            color1="41, 152, 255"
            color2="86, 67, 250"
          />
        </Column>
        <Column gutter="6rem" width={1 / 3}>
          {/* Call PromotedEventsCard component and pass props */}
          <PromotedEventsCard
            events={sortedByParticipants[2]}
            color1="126, 213, 111"
            color2="40, 180, 133"
          />
        </Column>
      </Row>
      <FormatText textAlign="center">
        <ButtonPrimary
          color1="41, 152, 255"
          color2="86, 67, 250"
          color="#fff"
          bs="rgba(86, 67, 250, 0.3)"
          to="#EventList"
          target="_self"
        >
          Discover More Events
        </ButtonPrimary>
      </FormatText>
    </PromotedEventsWrapper>
  );
};
