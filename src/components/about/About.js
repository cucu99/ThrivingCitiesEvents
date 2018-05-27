// Library Imports
import React from 'react';
import styled from 'styled-components';
// Component Imports
import AboutTextContent from './aboutTextContent/AboutTextContent';
import AboutImgComposition from './aboutImgComposition/AboutImgComposition';
// Function Imports
import { SecondaryH2 } from '../helpers/typography';
import { FormatText } from '../helpers/utility';
import { Row } from '../helpers/grid';
// Section container style
const AboutWrapper = styled.section`
  background-color: #f7f7f7;
  padding: 25rem 0;
  margin-top: -20vh;
`;

export default ({ events }) => {
  return (
    <AboutWrapper>
      <FormatText textAlign="center" marginBottom="8rem">
        <SecondaryH2>The best events in Memphis, Tennesse!</SecondaryH2>
      </FormatText>

      <Row marginBottom="8rem">
        <AboutTextContent />
        <AboutImgComposition events={events} />
      </Row>
    </AboutWrapper>
  );
};
