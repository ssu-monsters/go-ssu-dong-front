import { COLORS } from '@/constants/styles/color';
import css from 'styled-jsx/css';

export default css`
  .post-wrap {
    width: fit-content;
    margin: 0 25px;
    cursor: pointer;
  }

  .title {
    font-weight: 900;
    font-size: 25px;
    line-height: 40px;
    margin-top: 10px;
    color: ${COLORS.grayscale.gray800};
  }

  .introduce {
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    color: ${COLORS.grayscale.gray600};
    width: 330px;
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
