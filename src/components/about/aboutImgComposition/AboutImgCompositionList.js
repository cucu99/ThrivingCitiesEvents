// Library Imports
import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';

// Container for images
const CompositionWrapper = styled.div`
  position: relative;
`;

// Image style
const AboutImgCompositionItem = styled.img`
  width: 55%;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);
  border-radius: 2px;
  position: absolute;
  z-index: 10;
  transition: all 0.2s;
  /* outline reactangle */
  outline-offset: 2rem;
  /* Positions with dynamic properties */
  left: ${props => (props.left ? props.left : 'auto')};

  right: ${props => (props.right ? props.right : 'auto')};

  top: ${props => (props.top ? props.top : 'auto')};

  /* Scale up image on hover */
  &:hover {
    outline: 1.5rem solid rgba(86, 67, 250, 0.8);
    transform: scale(1.05) translateY(-0.5rem);
    box-shadow: 0 2.5rem 4rem rgba(0, 0, 0, 0.5);
    z-index: 20;
  }
  /* Scale down images what not hovered when one other hovered */
  ${CompositionWrapper}:hover &:not(:hover) {
    transform: scale(0.95);
  }
`;
// events: array
// itemCount: number
// multiplier: number
const getEvents = (events, itemCount, multiplier = 0) => {
  multiplier = itemCount * multiplier;

  // Get the last 3 * multiplier element from array
  if (events.length - multiplier > itemCount + multiplier) {
    return events.slice(
      events.length - multiplier - itemCount,
      events.length - multiplier
    );
    // Return the original array
  } else {
    return events;
  }
};

export default ({ events }) => {
  // Sort events by start time and save first 3 element to array
  const sortedEvents = getEvents(_.sortBy(events, 'from'), 3, 0);

  let count = 0;
  // iterate through sortedEvents get the correct properties and positions. Save it to CompositionItem
  const CompositionItem = sortedEvents.map(item => {
    switch (count) {
      case 0:
        count++;
        return (
          <AboutImgCompositionItem
            src={item.imgURL}
            alt={item.alt}
            key={item.id}
            left="0"
            top="-2rem"
          />
        );
      case 1:
        count++;
        return (
          <AboutImgCompositionItem
            src={item.imgURL}
            alt={item.alt}
            key={item.id}
            right="0"
            top="2rem"
          />
        );
      case 2:
        count++;
        return (
          <AboutImgCompositionItem
            src={item.imgURL}
            alt={item.alt}
            key={item.id}
            left="20%"
            top="10rem"
          />
        );
      default:
        return null;
    }
  });
  // Render compositionItem
  return <CompositionWrapper>{CompositionItem}</CompositionWrapper>;
};
