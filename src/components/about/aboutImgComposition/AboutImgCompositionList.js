import React from 'react';
import styled from 'styled-components';

const CompositionWrapper = styled.div`
  position: relative;
`;

const AboutImgCompositionItem = styled.img`
  width: 55%;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);
  border-radius: 2px;
  position: absolute;
  z-index: 10;
  transition: all 0.2s;
  outline-offset: 2rem;

  left: ${props => (props.left ? props.left : 'auto')};

  right: ${props => (props.right ? props.right : 'auto')};

  top: ${props => (props.top ? props.top : 'auto')};

  &:hover {
    outline: 1.5rem solid rgba(86, 67, 250, 0.8);
    transform: scale(1.05) translateY(-0.5rem);
    box-shadow: 0 2.5rem 4rem rgba(0, 0, 0, 0.5);
    z-index: 20;
  }

  ${CompositionWrapper}:hover &:not(:hover) {
    transform: scale(0.95);
  }
`;

export default ({ events }) => {
  const lastEvents = events.slice(-3);
  let count = 0;

  const CompositionItem = lastEvents.map(item => {
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

  return <CompositionWrapper>{CompositionItem}</CompositionWrapper>;
};
