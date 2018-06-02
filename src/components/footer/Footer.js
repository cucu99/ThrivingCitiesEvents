// Import Libraries
import React from 'react';
import styled from 'styled-components';
// Import Logo
import { Logo } from '../../data/Logo/mainLogo';
// Import Functions
import { Row, Column } from '../helpers/grid';
import { Paragraph } from '../helpers/typography';
import { TextLinkExternal } from '../Button';
import { media } from '../helpers/utility';

// Stle FooterContainer
const FooterContainer = styled.div`
  background-color: #333;
  padding: 10rem 0;
  font-size: 1.4rem;

  ${media.portrait`
    padding: 8rem 0;
  `};
`;

// Style LogoBox
const LogoBox = styled.div`
  text-align: center;
  margin-bottom: 8rem;

  ${media.portrait`
    margin-bottom: 6rem;
  `};
`;

// Style FooterNavigation
const FooterNavigation = styled.div`
  border-top: 1px solid #777;
  padding-top: 2rem;
  display: inline-block;

  ${media.portrait`
    width: 100%;
    text-align: center;
  `};
`;

// Style FooterList
const FooterList = styled.ul`
  list-style: none;
`;

// Style FooterItems
const FooterItem = styled.li`
  display: inline-block;

  &:not(:last-child) {
    margin-right: 1.5rem;
  }
`;

// Style Copyright
const Copyright = styled(Paragraph)`
  color: #f7f7f7;
  border-top: 1px solid #777;
  padding-top: 2rem;
  width: 75%;
  float: right;

  ${media.portrait`
    width: 100%;
    float: none;
  `};
`;

// Style FooterLinks
const FooterLink = TextLinkExternal.extend`
  &:link,
  &:visited {
    background-color: #333;
    text-transform: uppercase;
    display: inline-block;
    transition: all 0.2s;
  }

  &:hover,
  &:active {
    transform: rotate(5deg) scale(1.3);
  }
`;

export default () => {
  return (
    <FooterContainer>
      <LogoBox>
        <Logo />
      </LogoBox>
      <Row>
        <Column gutter="6rem" width={1 / 2}>
          <FooterNavigation>
            <FooterList>
              <FooterItem>
                <FooterLink target="_blank" href="#">
                  Company
                </FooterLink>
              </FooterItem>
              <FooterItem>
                <FooterLink target="_blank" href="#">
                  Contact us
                </FooterLink>
              </FooterItem>
              <FooterItem>
                <FooterLink target="_blank" href="#">
                  Carriers
                </FooterLink>
              </FooterItem>
              <FooterItem>
                <FooterLink target="_blank" href="#">
                  Privacy
                </FooterLink>
              </FooterItem>
              <FooterItem>
                <FooterLink target="_blank" href="#">
                  Terms
                </FooterLink>
              </FooterItem>
            </FooterList>
          </FooterNavigation>
        </Column>
        <Column gutter="6rem" width={1 / 2}>
          <Copyright>
            Built by{' '}
            <FooterLink target="_blank" href="#">
              Daniel Kirchner
            </FooterLink>{' '}
            for{' '}
            <FooterLink target="_blank" href="http://www.thrivingcities.com/">
              Thriving Cities website{' '}
            </FooterLink>{' '}
            challange.<br /> Copyright &copy; by Daniel Kirchner. You are 100%
            allowed to use this webpage for both personal and commercial use.
            Some design elements inspired by{' '}
            <FooterLink target="_blank" href="http://www.codingheroes.io/">
              Jonas Schmedtmann.
            </FooterLink>
          </Copyright>
        </Column>
      </Row>
    </FooterContainer>
  );
};
