// Container for About section/ImageComposition
// Library imports
import React from 'react';

// Component imports
import AboutImgCompositionList from './AboutImgCompositionList';
// Function imports
import { Column } from '../../helpers/grid';

export default props => {
  return (
    <Column gutter="6rem" width={1 / 2}>
      <AboutImgCompositionList events={props.events} />
    </Column>
  );
};
