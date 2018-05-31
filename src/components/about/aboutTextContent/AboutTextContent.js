// Library Imports
import React from 'react';
// Function Imports
import { ButtonText } from '../../Button';
import { TertiaryH3, Paragraph } from '../../helpers/typography';
import { FormatText } from '../../helpers/utility';
import { Column } from '../../helpers/grid';

export default () => {
  return (
    <Column gutter="6rem" width={1 / 2}>
      <FormatText marginBottom="1.5rem">
        <TertiaryH3>
          <strong>Thriving Cities</strong> offers local and regional events!
        </TertiaryH3>
      </FormatText>

      <FormatText marginBottom="3rem">
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          cum hic dicta magnam soluta maxime sit doloremque minima, reiciendis
          quidem fugiat repellat atque at quia culpa vel dolore odio quae.
        </Paragraph>
      </FormatText>

      <FormatText marginBottom="1.5rem">
        <TertiaryH3>Find and book your program today! </TertiaryH3>
      </FormatText>

      <FormatText marginBottom="2rem">
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          perferendis voluptatibus quis odit officiis quidem minus sit.
        </Paragraph>
      </FormatText>

      <ButtonText to="http://www.thrivingcities.com/" target="_blank">
        Learn More &rarr;
      </ButtonText>
    </Column>
  );
};
