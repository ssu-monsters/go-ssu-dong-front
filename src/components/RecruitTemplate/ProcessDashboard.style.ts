import { COLORS } from '@/constants/styles/color';
import css from 'styled-jsx/css';

export default css`
  .container {
    margin: auto;
    width: 980px;
    margin-top: 66px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
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
