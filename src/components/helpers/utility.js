import styled from 'styled-components';

export const FormatText = styled.div`
  text-align: ${props => (props.textAlign ? props.textAlign : 'inherit')};

  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : 0)};

  margin-top: ${props => (props.marginTop ? props.marginTop : 0)};
`;

export function clearFix() {
  return `
    &::after {
      content: "";
      display: table;
      clear: both;
    }
  `;
}

export function truncate() {
  return `
  overflow: hidden;
  position: relative; 
  line-height: 1.7;
  max-height: 8.1rem; 
  text-align: justify;
  
  margin-right: -1rem;
  padding-right: 1rem;
  
  &:before {
    content: '...';
    position: absolute;
    right: 0;
    bottom: 0;
  }
  &:after {
    content: '';
    position: absolute;
    right: 0;
    width: 1rem;
    height: 1rem;
    margin-top: 0.2rem;
  }
  `;
}
