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

  .react-calendar {
    position: absolute;
    top: 530px;
    left: 730px;
    width: 280px;
    height: 270px;
    border-radius: 10px;
    filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.15));
    border: none;
    float: right;
    margin-right: 16px;
    z-index: 1;
  }

  * {
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
  }

  .slick-dots {
    position: absolute;
    bottom: 15px;
  }
  .slick-dots li button:before {
    font-size: 10px;
  }
`;
