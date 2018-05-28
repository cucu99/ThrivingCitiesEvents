// Library imports
import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';

// Component imports
import BGVideo from './BGVideo';

// Function imports
import { FormatText, truncate } from '../../helpers/utility';
import { SecondaryH2, TertiaryH3, Paragraph } from '../../helpers/typography';
import { Row } from '../../helpers/grid';
import { ButtonPrimary, ButtonText, TextLinkExternal } from '../../Button';

// Section container style
const EventListWrapper = styled.section`
  position: relative;
  padding: 15rem 0;
`;

// Event container style
const EventItem = styled.div`
  width: 94%;
  max-height: 27rem;
  margin: 0 auto;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  overflow: hidden;
  transform: skewX(-12deg);
`;

// Image container style
const EventShape = styled.figure`
  position: relative;
  width: 35%;
  height: 27rem;
  float: right;
  transform: skewX(12deg);
`;

// Image style
const EventIMG = styled.img`
  height: 100%;
  transition: all 0.5s;

  /* Aplly filter on image when hover EventItem */
  ${EventItem}:hover & {
    filter: grayscale(0.5) brightness(40%);
  }
`;

// Text style (over image)
const EventCaption = styled.figcaption`
  margin: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  font-size: 1.6rem;
  text-align: left;
  transform: translateX(-100%);
  opacity: 0;
  transition: all 0.5s;

  /* Animation on image when over EventItem */
  ${EventItem}:hover & {
    opacity: 1;
    transform: translateX(0%);
  }
`;

// Unordered List style
const EventProperties = styled.ul`
  list-style: none;
`;

// Rename list item for better readability
const EventPropertyItem = styled.li``;

// Event text container
const EventDescription = styled.div`
  padding: 4.5rem 1rem 6rem 6rem;
  width: 65%;
  float: left;
  transform: skewX(12deg);
`;

// Formatted text (cut after 3 lines)
const Text = Paragraph.extend`
  ${truncate()};
  margin-bottom: 0.75rem;
`;
// EventItem Container
const EventScroller = styled.div`
  margin: 0 auto;
  height: 60rem;
  width: 65%;
  overflow: auto;
  border: 1px solid #eee;
`;

export default ({ events }) => {
  // Sort events by id and save reversed order to array
  const sortedEvents = _.reverse(_.sortBy(events, 'id'));
  // List sortedEvents
  const eventElement = sortedEvents.map(item => {
    let categories = item.category.join(', ');
    return (
      <Row key={item.id} marginBottom="6rem">
        <EventItem>
          <EventShape>
            <EventIMG src={item.imgURL} alt={item.imgALT} />
            <EventCaption>
              <EventProperties>
                <EventPropertyItem>Categories: {categories}</EventPropertyItem>

                <EventPropertyItem>
                  <TextLinkExternal target="_blank" href={item.homepage}>
                    Homepage &rarr;
                  </TextLinkExternal>
                </EventPropertyItem>

                <EventPropertyItem>Start: {item.from}</EventPropertyItem>

                <EventPropertyItem>End: {item.to}</EventPropertyItem>

                <EventPropertyItem>
                  Participants: {item.participants}
                </EventPropertyItem>

                <EventPropertyItem>Price: {item.price}</EventPropertyItem>
              </EventProperties>
            </EventCaption>
          </EventShape>
          <EventDescription>
            <FormatText marginBottom="1.5rem">
              <TertiaryH3 fontSize="2.5rem">{item.title}</TertiaryH3>
              <TertiaryH3>{item.address}</TertiaryH3>
            </FormatText>
            <Text>{item.description}</Text>
            <ButtonText float="right" to="#">
              Read more &rarr;
            </ButtonText>
          </EventDescription>
        </EventItem>
      </Row>
    );
  });
  // Render component
  return (
    <EventListWrapper>
      {/* Background Video component */}
      <BGVideo />

      <FormatText textAlign="center" marginBottom="6rem">
        <SecondaryH2>Events in Memphis</SecondaryH2>
      </FormatText>
      <EventScroller>
        {/* Call eventElements */}
        {eventElement}
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
};
