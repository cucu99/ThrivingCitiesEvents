import React from 'react';
import styled from 'styled-components';

import heroIMG from './img/hero.jpg';

import { ButtonPrimaryAnimated } from '../Button';
import { PrimaryH1, PrimaryH2 } from '../helpers/typography';
import { FormatText } from '../helpers/utility';

const HeaderContentWapper = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, 0); /* Center text */
  text-align: center;
`;

const HeaderWrapper = styled.div`
  height: 95vh;
  background-image: linear-gradient(
      to right bottom,
      rgba(41, 152, 255, 0.8),
      rgba(86, 67, 250, 0.8)
    ),
    url(${heroIMG});
  background-size: cover;
  background-position: top;
  position: relative;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContentWapper>
        <FormatText margin="4rem">
          <PrimaryH1>Memphis In Action</PrimaryH1>
          <PrimaryH2>Community affairs and integrated events</PrimaryH2>
        </FormatText>

        <ButtonPrimaryAnimated to="#">Discover</ButtonPrimaryAnimated>
      </HeaderContentWapper>
    </HeaderWrapper>
  );
};

export default Header;
