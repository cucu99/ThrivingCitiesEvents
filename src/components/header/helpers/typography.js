import styled from 'styled-components';
import { moveInLeft, moveInRight } from './keyframes';

export const AnimatedH1 = styled.h1`
  color: #fff;
  text-transform: uppercase;
  /* Animation shaking fix */
  backface-visibility: hidden;
  display: block;
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 1.5rem;
  animation: ${moveInLeft} 1s ease-out;
`;

export const AnimatedH2 = styled.h2`
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 3rem;
  /* Animation shaking fix */
  backface-visibility: hidden;
  display: block;
  animation: ${moveInRight};
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.5rem;
  padding-right: 1rem;
  animation: ${moveInRight} 1s ease-out;
`;
