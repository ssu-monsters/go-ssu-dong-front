import { COLORS } from '@/constants/styles/color';
import css from 'styled-jsx/css';

export default css.global`
  html {
    scroll-snap-type: y mandatory;
  }

  body {
    margin: 0;
    font-family: 'NanumSquareNeo';
    background-color: ${COLORS.background};
    width: 100%;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  * {
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
  }
`;
