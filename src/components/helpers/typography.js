import styled from 'styled-components';

import { moveInLeft, moveInRight } from './keyframes';

export const PrimaryH1 = styled.h1`
  color: #fff;
  text-transform: uppercase;
  display: block;
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 1.5rem;
  animation: ${moveInLeft} 1s ease-out;
`;

export const PrimaryH2 = styled.h2`
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 3rem;
  display: block;
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.5rem;
  padding-right: 1rem;
  animation: ${moveInRight} 1s ease-out;
`;

export const SecondaryH2 = styled.h2`
  font-size: 3.5rem;
  text-transform: uppercase;
  font-weight: 700;
  display: inline-block;
  background-image: linear-gradient(
    to right,
    rgba(41, 152, 255, 0.8),
    rgba(86, 67, 250, 0.8)
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: 2px;
  transition: all 0.2s;

  &:hover {
    transform: skewY(2deg) skewX(15deg) scale(1.01);
    text-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.2);
  }
`;

export const TertiaryH3 = styled.h3`
  font-size: ${props => (props.fontSize ? props.fontSize : '1.6rem')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '700')};
  text-transform: uppercase;
  display: block;
`;
export const Paragraph = styled.p`
  font-size: ${props => (props.fontSize ? props.fontSize : '1.6rem')};
`;
