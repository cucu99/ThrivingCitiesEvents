import styled from 'styled-components';
import { moveInBottom } from './helpers/keyframes';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  background: transparent;
  border: 0.2rem solid #fff;
  color: #fff;
  animation: ${moveInBottom} 0.5s ease-out 0.75s;
  animation-fill-mode: backwards;

  &:link,
  &:visited {
    font-size: 1.6rem;
    text-transform: uppercase;
    text-decoration: none;
    padding: 1rem 3rem;
    display: inline-block;
    border-radius: 10rem;
    transition: all 0.2s;
    position: relative;
  }

  &:hover {
    transform: translateY(-0.3rem);
    box-shadow: 0 1rem 2rem rgba(255, 255, 255, 0.3);
  }

  &:active {
    transform: translateY(-0.1rem);
    box-shadow: 0 0.5rem 1rem rgba(255, 255, 255, 0.3);
  }
`;
