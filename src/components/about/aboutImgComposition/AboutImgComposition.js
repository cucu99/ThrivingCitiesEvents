import React from 'react';

// import { AboutImgCompositionItem } from './AboutImgCompositionItem';
import AboutImgCompositionList from './AboutImgCompositionList';
import { Column } from '../../helpers/grid';

export default props => {
  return (
    <Column gutter="6rem" width={1 / 2}>
      <AboutImgCompositionList events={props.events} />
    </Column>
  );
};
