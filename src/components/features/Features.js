import React from 'react';
import styled from 'styled-components';

import {
  SportIcon,
  ArtIcon,
  MusicIcon,
  DanceIcon
} from '../../data/Icons/icons';
import { TertiaryH3, Paragraph } from '../helpers/typography';
import { Row, Column } from '../helpers/grid';
import { FormatText } from '../helpers/utility';

import featureIMG from '../../data/img/features-img.jpg';

const FeatureWapper = styled.section`
  margin-top: -10rem;
  padding: 20rem 0;
  background-image: linear-gradient(
      to right bottom,
      rgba(41, 152, 255, 0.8),
      rgba(86, 67, 250, 0.8)
    ),
    url(${featureIMG});
  background-size: cover;

  transform: skewY(-7deg);

  & > * {
    transform: skewY(7deg);
  }
`;

const FeatureBox = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 1.5rem;
  padding: 2.5rem;
  text-align: center;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-1.5rem) scale(1.03);
  }
`;

export default () => {
  return (
    <FeatureWapper>
      <Row marginBottom="8rem">
        <Column gutter="6rem" width={1 / 4}>
          <FeatureBox>
            <SportIcon />
            <FormatText marginBottom="1.5rem" marginTop="0.5rem">
              <TertiaryH3>Sport</TertiaryH3>
            </FormatText>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              totam maxime explicabo qui?
            </Paragraph>
          </FeatureBox>
        </Column>

        <Column gutter="6rem" width={1 / 4}>
          <FeatureBox>
            <ArtIcon />
            <FormatText marginBottom="1.5rem" marginTop="0.5rem">
              <TertiaryH3>Art</TertiaryH3>
            </FormatText>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              tempora quisquam veniam.
            </Paragraph>
          </FeatureBox>
        </Column>

        <Column gutter="6rem" width={1 / 4}>
          <FeatureBox>
            <MusicIcon />
            <FormatText marginBottom="1.5rem" marginTop="0.5rem">
              <TertiaryH3>Music</TertiaryH3>
            </FormatText>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
              explicabo ea.
            </Paragraph>
          </FeatureBox>
        </Column>

        <Column gutter="6rem" width={1 / 4}>
          <FeatureBox>
            <DanceIcon />
            <FormatText marginBottom="1.5rem" marginTop="0.5rem">
              <TertiaryH3>Dance</TertiaryH3>
            </FormatText>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              omnis. Sit incidunt at fugiat.
            </Paragraph>
          </FeatureBox>
        </Column>
      </Row>
    </FeatureWapper>
  );
};
