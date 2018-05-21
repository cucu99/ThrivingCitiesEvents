import React, { Component } from 'react';
import Wrapper from './Wrapper';
import TextWrapper from './TextWrapper';
import { AnimatedH1, AnimatedH2 } from './helpers/typography';
import { StyledLink } from './StyledLink';

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <TextWrapper>
          <AnimatedH1>Memphis In Action</AnimatedH1>
          <AnimatedH2>Community affairs and integrated events</AnimatedH2>
          <StyledLink to="#">Discover</StyledLink>
        </TextWrapper>
      </Wrapper>
    );
  }
}

export default Header;
