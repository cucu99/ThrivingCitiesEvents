import styled from 'styled-components';

import heroIMG from './img/hero.jpg';

const Wrapper = styled.div`
  height: 95vh;
  /* Linear gradient over hero img left-right bottom*/
  background-image: linear-gradient(
      to right bottom,
      rgba(126, 194, 226, 0.8),
      rgba(21, 84, 156, 0.8)
    ),
    url(${heroIMG});
  background-size: cover;
  background-position: top;
  position: relative;
  /* Clip the header */
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
`;

export default Wrapper;
