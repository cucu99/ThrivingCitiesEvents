import React from 'react';
import styled from 'styled-components';

import BGVideo from './BGVideo';

import { FormatText, truncate } from '../../helpers/utility';
import { SecondaryH2, TertiaryH3, Paragraph } from '../../helpers/typography';
import { Row } from '../../helpers/grid';
import { ButtonText, TextLinkExternal } from '../../Button';

const EventListWrapper = styled.section`
  position: relative;
  padding: 15rem 0;
`;

const EventItem = styled.div`
  width: 75%;
  max-height: 27rem;
  margin: 0 auto;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  overflow: hidden;
  transform: skewX(-12deg);
`;

const EventShape = styled.figure`
  position: relative;
  width: 35%;
  height: 27rem;
  float: right;
  transform: skewX(12deg);
`;

const EventIMG = styled.img`
  height: 100%;
  transition: all 0.5s;

  ${EventItem}:hover & {
    filter: grayscale(0.5) brightness(40%);
  }
`;

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

  ${EventItem}:hover & {
    opacity: 1;
    transform: translateX(0%);
  }
`;

const EventProperties = styled.ul`
  list-style: none;
`;

const EventPropertyItem = styled.li``;

const EventDescription = styled.div`
  padding: 4.5rem 1rem 6rem 6rem;
  width: 65%;
  float: left;
  transform: skewX(12deg);
`;

const Text = Paragraph.extend`
  ${truncate()};
  margin-bottom: 0.75rem;
`;

export default ({ events }) => {
  const newEvents = events.slice(-3);
  const eventElement = newEvents.map(item => {
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

  return (
    <EventListWrapper>
      <BGVideo />
      <FormatText textAlign="center" marginBottom="6rem">
        <SecondaryH2>Events in Memphis</SecondaryH2>
      </FormatText>
      {eventElement}
    </EventListWrapper>
  );
};
