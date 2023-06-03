import { COLORS } from '@/constants/styles/color';
import css from 'styled-jsx/css';

export default css`
  .tag-wrapper {
    background-color: ${COLORS.grayscale.white};
    padding: 5px 12px;
    border-radius: 5px;
    border: 1px solid ${COLORS.primary.purple};
    font-weight: 400;
    font-size: 18px;
    color: ${COLORS.primary.purple};
  }
`;
