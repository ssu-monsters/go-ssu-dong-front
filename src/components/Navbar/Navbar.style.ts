import { COLORS } from '@/constants/styles/color';
import css from 'styled-jsx/css';

export default css`
  .navbar {
    width: 100%;
    background-color: white;
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${COLORS.grayscale.white};
    box-shadow: 0px 0px 4px rgba(177, 177, 177, 0.25);

    position: fixed;
    top: 0;
    left: 0;
  }
  .left {
    margin-left: 20px;
    font-size: 18px;
    line-height: 20px;
    color: ${COLORS.primary.purple};
    cursor: pointer;
  }

  .center {
    display: flex;
    list-style: none;
    width: 394px;
    justify-content: space-between;
  }
  .center li {
    height: 55px;
    display: flex;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
    color: #656565;
  }
  .center li:hover {
    color: ${COLORS.primary.purple};
  }
  .center .selected {
    border-bottom: 1px solid #656565;
  }
  .center li p {
    margin-left: 7px;
    margin-right: 7px;
  }
  .right {
    display: flex;
    margin-right: 30px;
  }
  .right .name {
    margin-left: 8px;
    color: #656565;
  }
`;
