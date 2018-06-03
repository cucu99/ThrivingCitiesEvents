import React, { Component } from 'react';
import _ from 'lodash';
import styled from 'styled-components';

// Function imports
import { FormatText, truncate, media } from '../../helpers/utility';
import { TertiaryH3, Paragraph } from '../../helpers/typography';
import { Row } from '../../helpers/grid';
import { ButtonText, TextLinkExternal } from '../../Button';

// Event container style
const EventItem = Row.extend`
  width: 93.5%;
  max-height: 27rem;
  margin: 0 auto;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  overflow: hidden;
  transform: skewX(-12deg);

  ${media.portrait`
    overflow: auto;
  `};
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

  ${media.portrait`
  font-size: 1.4rem;
  `};

  ${media.portrait`
  font-size: 1rem;
  `};

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
const EventContent = styled.div`
  padding: 4.5rem 1rem 6rem 6rem;
  width: 65%;
  float: left;
  transform: skewX(12deg);
`;

// Formatted text (cut after 3 lines)
const Text = Paragraph.extend`
  ${truncate()};
  margin-bottom: 0.75rem;

  ${media.portrait`
    font-size: 1.3rem;
  `};

  ${media.phone`
    font-size: 1rem;
  `};
`;

const TextH3 = TertiaryH3.extend`
  font-size: 1.5rem;
  ${media.phone`
    font-size: 1.2rem;
  `};
`;
class EventElement extends Component {
  state = {
    events: this.props.events
  };

  render() {
    // Sort events by id and save reversed order to array
    const sortedEvents = _.reverse(_.sortBy(this.state.events, 'id'));
    // List sortedEvents
    return sortedEvents.map(item => {
      let categories = item.category.join(', ');
      return (
        <EventItem key={item.id} marginBottom="6rem">
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
          <EventContent>
            <FormatText marginBottom="1rem">
              <TextH3 fontSize="2.5rem">{item.title}</TextH3>
              <TextH3>{item.address}</TextH3>
            </FormatText>
            <Text>{item.description}</Text>
            <ButtonText
              float="right"
              to={{
                pathname: `/event/${item.title}`,
                state: { event: item }
              }}
            >
              Read more &rarr;
            </ButtonText>
          </EventContent>
        </EventItem>
      );
    });
  }
}
export default EventElement;
