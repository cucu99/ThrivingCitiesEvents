import styled from 'styled-components';

import { moveInBottom } from './helpers/keyframes';
import { Link } from 'react-router-dom';

export const ButtonPrimary = styled(Link)`
  background-image: linear-gradient(
    to right bottom,
    rgb(${props => (props.color1 ? props.color1 : '255,255,255')}),
    rgb(${props => (props.color2 ? props.color2 : '255,255,255')})
  );
  border: 0.2rem solid #fff;
  color: ${props => props.color};

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
    box-shadow: ${props =>
      props.bs
        ? `0 1rem 2rem ${props.bs}`
        : '0 1rem 2rem rgba(255, 255, 255, 0.3)'};
  }

  &:active {
    transform: translateY(-0.1rem);
    box-shadow: ${props =>
      props.bs
        ? `0 1rem 2rem ${props.bs}`
        : '0 1rem 2rem rgba(255, 255, 255, 0.3)'};
  }
`;

export const ButtonPrimaryAnimated = ButtonPrimary.extend`
  background-image: none;
  background-color: transparent;
  color: #fff;
  animation: ${moveInBottom} 0.5s ease-out 0.75s;
  animation-fill-mode: backwards;
`;

export const ButtonText = styled(Link)`
  float: ${props => (props.float ? props.float : 'none')};

  &:link,
  &:visited {
    font-size: 1.6rem;
    color: ${props => (props.color ? props.color : 'rgba(86, 67, 250, 0.8);')};
    display: inline-block;
    text-decoration: none;
    border-bottom: 1px solid rgba(86, 67, 250, 0.8);
    padding: 3px;
    transition: all 0.2s;
  }

  &:hover {
    background-image: linear-gradient(
      to right bottom,
      rgba(41, 152, 255, 0.8),
      rgba(86, 67, 250, 0.8)
    );
    color: #fff;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    transform: translateY(0);
  }
`;

export const TextLinkExternal = styled.a`
  &:link,
  &:visited {
    font-size: 1.6rem;
    text-decoration: none;
    border-bottom: 1px dotted;
    color: #fff;
  }

  &:hover {
    color: rgb(41, 152, 255);
  }
`;
