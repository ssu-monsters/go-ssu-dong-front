import { COLORS } from '@/constants/styles/color';
import css from 'styled-jsx/css';

export default css`
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;

    > p {
      margin: 0;
      font-weight: 700;
      font-size: 25px;
      line-height: 40px;
      color: ${COLORS.grayscale.gray600};
    }
  }

  .menus-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 76px auto 0px;
  }

  .menu-wrap {
    width: 230px;
    margin: 0px 45px;
  }

  .image-container {
    width: 230px;
    height: 230px;
    border-radius: 115px;
    background-color: #fff6d7;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .intro-test {
    text-align: center;
    margin-top: 30px;
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
  }

  .highlight {
    color: ${COLORS.primary.purple};
  }
`;
