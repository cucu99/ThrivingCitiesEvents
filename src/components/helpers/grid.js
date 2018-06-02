import styled from 'styled-components';

import { clearFix, media } from './utility';
// Float-grid layout

/*-----------------------------------------------------------
Example of use:

<Row maxWidth="114rem" margin="0 auto" marginBottom="8rem">
  <Column gutter="6rem" width={1 / 4}>
    Col 1 of 4
  </Column>
  <Column gutter="6rem" width={1 / 4}>
    Col 1 of 4
  </Column>
  <Column gutter="6rem" width={2 / 4} float="left">
    Col 2 of 4
  </Column>
</Row>

'gutter' has to be the same for all 'Column' in same 'Row'!
-----------------------------------------------------------*/

const gutter = props => (props.gutter ? props.gutter : '0rem');
const colRatio = props => (props.width ? props.width : 1 / 1);

export const Row = styled.div`
  max-width: ${props => (props.maxWidth ? props.maxWidth : '114rem')};
  margin: ${props => (props.margin ? props.margin : '0 auto')};
  &:not(:last-child) {
    margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '0')};

    ${media.portrait`margin-bottom: 6rem;`};
  }

  ${media.portrait`
    max-width: 50rem;
    padding: 0 3rem;
  `};

  ${clearFix()};
`;

export const Column = styled.div`
  width: calc((100% - (1 / ${colRatio} - 1) * ${gutter}) * ${colRatio});
  float: ${props => (props.float ? props.float : 'left')};
  &:not(:last-child) {
    margin-right: ${gutter};

    ${media.portrait`
      margin-right: 0;
      margin-bottom: 6rem;
      `};
  }

  ${media.portrait`width: 100% !important;`};
`;
