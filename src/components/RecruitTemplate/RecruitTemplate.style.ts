import { COLORS } from '@/constants/styles/color';
import css from 'styled-jsx/css';

export default css`
  .container {
    max-width: 1280px;
    margin: auto;
    height: 1000px;
    margin-top: 66px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background-color: red;
  }

  .title {
    font-size: 18px;
    font-weight: 400;
    line-height: 40px;
    margin-bottom: 30px;
  }

  .group-name {
    font-weight: 700;
    font-size: 25px;
    line-height: 40px;
    color: ${COLORS.grayscale.gray400};
  }
`;
