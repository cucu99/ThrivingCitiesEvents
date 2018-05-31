// Library Imports
import React from 'react';
import styled from 'styled-components';
// Function Imports
import { ButtonPrimary } from '../../Button';
// Card container
const PromotedEventsCardWrapper = styled.div`
  perspective: 150rem;
  position: relative;
  height: 50rem;
`;
// Cardside style
const CardSide = styled.div`
  height: 50rem;
  width: 100%;
  transition: all 0.8s ease;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
`;
// Cardside front style
const CardSideFront = CardSide.extend`
  background-color: #fff;

  ${PromotedEventsCardWrapper}:hover & {
    transform: rotateY(180deg);
  }
`;
// Cardside back style
const CardSideBack = CardSide.extend`
  background-image: linear-gradient(
    to right bottom,
    rgb(${props => props.color1}),
    rgb(${props => props.color2})
  );

  transform: rotateY(-180deg);

  ${PromotedEventsCardWrapper}:hover & {
    transform: rotateY(0deg);
  }
`;
// Front card picture style
const CardPicture = styled.div`
  background-image: linear-gradient(
      to right bottom,
      rgb(${props => props.color1}),
      rgb(${props => props.color2})
    ),
    url(${props => props.events.imgURL});
  background-blend-mode: screen;
  background-size: cover;
  height: 23rem;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;
// Front card header text style
const CardHeading = styled.h4`
  font-size: 2.8rem;
  font-weight: 300;
  text-transform: uppercase;
  text-align: right;
  color: #fff;
  position: absolute;
  top: 12rem;
  right: 2rem;
  width: 75%;
`;

const CardHeadingSpan = styled.span`
  padding: 1rem 1.5rem;
  box-decoration-break: clone;

  background-image: linear-gradient(
    to right bottom,
    rgba(${props => props.color1}, 0.85),
    rgba(${props => props.color2}, 0.85)
  );
`;
// Details unordered list container
const CardDetails = styled.div`
  padding: 3rem;
`;
// Details unordered list stylz
const CardDetailsList = styled.ul`
  list-style: none;
  width: 80%;
  margin: 0 auto;
`;
// Details list item style
const CardDetailsItem = styled.li`
  text-align: center;
  font-size: 1.5rem;
  padding: 1rem;

  &:not(:last-child) {
    border-bottom: 1px solid #eee;
  }
`;
// Call To Action Box style
const CTABox = styled.div`
  position: absolute;
  text-align: center;
  width: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CTABoxDetails = styled.div`
  color: #fff;
  margin-bottom: 8rem;
`;

const PriceTag = styled.p`
  font-size: 1.4rem;
  text-transform: uppercase;
`;

const PriceValue = styled.p`
  font-size: 6rem;
  font-weight: 100;
`;

export default props => {
  // make string from categories. Separate them with comma
  let categories = props.events.category.join(', ');
  return (
    <PromotedEventsCardWrapper>
      <CardSideFront>
        {/* color1, color2: linear-gradient color start-end for CardFront picture */}
        <CardPicture
          color1={props.color1}
          color2={props.color2}
          events={props.events}
        />

        <CardHeading>
          {/* color1, color2: linear-gradient color start-end for title */}
          <CardHeadingSpan color1={props.color1} color2={props.color2}>
            {props.events.title}
          </CardHeadingSpan>
        </CardHeading>

        <CardDetails>
          <CardDetailsList>
            {/* Event Address */}
            <CardDetailsItem>{props.events.address}</CardDetailsItem>
            {/* Event Date */}
            <CardDetailsItem>
              {props.events.from} - {props.events.to}
            </CardDetailsItem>
            {/* Participants */}
            <CardDetailsItem>
              {props.events.participants} people are taking it
            </CardDetailsItem>
            {/* Categories */}
            <CardDetailsItem>{categories}</CardDetailsItem>
          </CardDetailsList>
        </CardDetails>
      </CardSideFront>
      {/* color1, color2: linear-gradient color start-end for CardBack */}
      <CardSideBack color1={props.color1} color2={props.color2}>
        <CTABox>
          <CTABoxDetails>
            <PriceTag>Price</PriceTag>
            <PriceValue>{props.events.price}</PriceValue>
          </CTABoxDetails>
          {/* color: Button text color */}
          <ButtonPrimary
            color="#777"
            to={{
              pathname: `/event/${props.events.title}/booking`,
              state: { event: props.events }
            }}
          >
            Sign up now!
          </ButtonPrimary>
        </CTABox>
      </CardSideBack>
    </PromotedEventsCardWrapper>
  );
};
