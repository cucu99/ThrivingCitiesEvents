import styled, { css } from 'styled-components';

// Media Query Manager:

// 0 - 600px: XPathNSResolver
// 600 - 900px: Tablet portrait
// 900 - 1200px: Tablet landscape
// 1200 - 1800px is where normal styles apply
// 1800px +: Big desktop

const sizes = {
  // desktops
  bigDesktop: 200000,
  desktop: 1800,
  // tablets
  landscape: 1200,
  portrait: 900,
  // phones
  phone: 600
};

// Itarate through the sizes and create a media   template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // Use em in breakpoints to work properly cross-browser and support users
  // Changing their browsers font-size
  const emSize = sizes[label] / 16;

  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

// Format text helper.
export const FormatText = styled.div`
  text-align: ${props => (props.textAlign ? props.textAlign : 'inherit')};

  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : 0)};

  margin-top: ${props => (props.marginTop ? props.marginTop : 0)};

  ${media.portrait`
    margin-bottom: 2rem;
    margin-top: 2rem;
  `};
  ${media.phone`
    margin-bottom: 1rem;
    margin-top: 1rem;
  `};
`;

// Absolute center
export function absCenter() {
  return `
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;
}

// ClearFix
export function clearFix() {
  return `
    &::after {
      content: "";
      display: table;
      clear: both;
    }
  `;
}

// styles for '...'
// max lines = maxHeight / lineHeight
export function truncate(maxHeight = 5.1, lineHeight = 1.7) {
  return `
  /* hide text if it more than N lines  */
  overflow: hidden;
  /* for set '...' in absolute position */
  position: relative; 
  /* use this value to count block height */
  line-height: ${lineHeight}em;
  /* max-height = line-height (1.7) * lines max number (3) = 5.1em (default) */
  max-height: ${maxHeight}em; 
  /* fix problem when last visible word doesn't adjoin right side  */
  text-align: justify;  
  /* place for '...' */
  margin-right: -1rem;
  padding-right: 1rem;
  
  /* create the ... */
  &:before {
    /* points in the end */
  content: '...';
  /* absolute position */
  position: absolute;
  /* set position to right bottom corner of block */
  right: 0;
  bottom: 0;
  }

  /* hide ... if we have text, which is less than or equal to max lines */
  &:after {
    /* points in the end */
  content: '';
  /* absolute position */
  position: absolute;
  /* set position to right bottom corner of text */
  right: 0;
  /* set width and height */
  width: 1rem;
  height: 1rem;
  margin-top: 0.2rem;
  }
  `;
}
