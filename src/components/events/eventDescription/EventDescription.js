// Library imports
import React from 'react';
import styled from 'styled-components';
// Function imports
import { ButtonText, TextLinkExternal, ButtonPrimary } from '../../Button';
import { SecondaryH2, Paragraph, TertiaryH3 } from '../../helpers/typography';
import { FormatText } from '../../helpers/utility';
import { Row, Column } from '../../helpers/grid';
// Wrapper style
const EventDescriptionWrapper = styled.div`
  text-align: center;
  width: 100%;
  height: 95vh;
  margin: 0 auto;
  padding: 5rem 0;
  background-image: linear-gradient(
    to right bottom,
    rgba(41, 152, 255, 0.8),
    rgba(86, 67, 250, 0.8)
  );
`;
// Left column style
const PropertiesContainer = styled.div`
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  height: 55rem;
  background-color: #f7f7f7;
`;
// Left column image style
const DescriptionImage = styled.img`
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  width: 100%;
  background-size: cover;
`;
// container of list properties style (left column)
const EventProperties = styled.ul`
  padding: 1rem;
  list-style: none;
  text-align: left;
`;
// Container of description style (right column)
const DescriptionContainer = styled.div`
  height: 55rem;
  padding: 3rem;
  border-radius: 5px;
  background-color: #f7f7f7;
  /* show scrollbar if needed */
  overflow-y: auto;
`;
// properties style (left column)
const PropertiesListItem = styled.li`
  font-size: 1.5rem;
  padding: 0.75rem;
  text-align: center;

  &:not(:last-child) {
    border-bottom: 1px solid #eee;
  }
`;

export default props => {
  // get events from react router (index.js)
  const event = props.location.state.event;
  // comma separated categories string
  let categories = event.category.join(', ');
  return (
    <EventDescriptionWrapper>
      <Row marginBottom="4rem">
        <Column gutter="6rem" width={1 / 3}>
          <PropertiesContainer>
            <DescriptionImage src={event.imgURL} alt={`${event.title}`} />

            <EventProperties>
              <PropertiesListItem>
                <b>Address:</b> {event.address}
              </PropertiesListItem>

              <PropertiesListItem>
                <b>Date:</b> {event.from} - {event.to}
              </PropertiesListItem>

              <PropertiesListItem>
                <b>Ticket price:</b> {event.price}
              </PropertiesListItem>

              <PropertiesListItem>
                <TextLinkExternal
                  bS="none"
                  color="#777"
                  target="_blank"
                  href={event.homepage}
                >
                  <b>Website</b> &rarr;
                </TextLinkExternal>
              </PropertiesListItem>

              <PropertiesListItem>
                {event.participants} people already bought a ticket.
              </PropertiesListItem>

              <PropertiesListItem>
                <b>Tags:</b> {categories}
              </PropertiesListItem>
            </EventProperties>
          </PropertiesContainer>
        </Column>

        <Column gutter="6rem" width={2 / 3}>
          <DescriptionContainer>
            <FormatText textAlign="center" marginBottom="4rem">
              <SecondaryH2>{event.title}</SecondaryH2>
            </FormatText>

            <FormatText textAlign="left" marginBottom="1.5rem">
              <TertiaryH3>
                <b>Description:</b>
              </TertiaryH3>
            </FormatText>

            <FormatText textAlign="left" marginBottom="8rem">
              <Paragraph>{event.description}</Paragraph>
            </FormatText>

            {/* Button for sign up page */}
            <FormatText textAlign="center">
              <ButtonPrimary
                color1="41, 152, 255"
                color2="86, 67, 250"
                color="#fff"
                bs="rgba(86, 67, 250, 0.3)"
                to={{
                  pathname: `/event/${event.title}/booking`,
                  state: { event: event }
                }}
              >
                Sign up now!
              </ButtonPrimary>
            </FormatText>
          </DescriptionContainer>
        </Column>
      </Row>
      {/* Button for go back */}
      <ButtonText color="#f7f7f7" float="center" to="/">
        &larr; Go Back
      </ButtonText>
    </EventDescriptionWrapper>
  );
};
