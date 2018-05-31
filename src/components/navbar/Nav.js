import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../data/Logo/HeaderLogo';

import { NavButton, LogoButton } from '../Button';

const NavbarList = styled.ul`
  background-color: #333;
  position: fixed;
  top: 0;

  margin: 0 auto;
  padding: 1.5rem 0;
  width: 96%;
  list-style: none;
  text-align: center;
  z-index: 1000;
`;

const NavbarItem = styled.li`
  position: relative;
  font-size: 1.6rem;
  display: inline-block;
  list-style: none;
  color: #fff;
  margin-left: 3.5%;

  &:not(:last-child) {
    margin-right: 5rem;
  }
`;

const NavLogo = styled.div`
  position: absolute;
  top: -3rem;
  transform: translateX(-50%);
`;

export default React.forwardRef((props, EventList) => {
  return (
    <nav>
      <NavbarList>
        <NavbarItem>
          <a href="#About">
            <NavButton>About</NavButton>
          </a>
        </NavbarItem>
        <NavbarItem>
          <a href="#Features">
            <NavButton>Features</NavButton>
          </a>
        </NavbarItem>
        <NavbarItem>
          <NavLogo>
            <a href="#Home">
              <LogoButton>
                <Logo />
              </LogoButton>
            </a>
          </NavLogo>
        </NavbarItem>
        <NavbarItem>
          <a href="#PopularEvents">
            <NavButton>Popular Events</NavButton>
          </a>
        </NavbarItem>
        <NavbarItem>
          <a href="#EventList">
            <NavButton>Events</NavButton>
          </a>
        </NavbarItem>
      </NavbarList>
    </nav>
  );
});
