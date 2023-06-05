import css from 'styled-jsx/css';
import { COLORS } from '@/constants/styles/color';

export default css`
  .background {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 190px;
    font-family: 'NanumSquare Neo';
    font-style: normal;
  }
  .container {
    width: 896px;
  }

  .main {
    height: 550px;

    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-bottom: 100px;
  }
  .inner-info {
    height: 485px;
    display: flex;
    justify-content: space-between;
  }

  .inner-left {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  .tag-wrapper {
    background-color: ${COLORS.grayscale.white};
    padding: 10px 15px 8px;
    border-radius: 5px;
    border: 1px solid ${COLORS.primary.purple};
    font-weight: 400;
    font-size: 18px;
    color: ${COLORS.primary.purple};

    width: fit-content;
    height: 39px;
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    text-align: center;
  }
  .title {
    font-weight: 800;
    font-size: 40px;
    line-height: 44px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  .introduce {
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    color: #636363;
  }

  .date {
    height: 191px;
  }
  .inner-date {
    display: flex;
    margin-bottom: 30px;
  }
  .inner-date-last {
    display: flex;
  }

  .date .type {
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
    width: 120px;
    color: #282828;
  }

  .type-result {
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    color: #464646;
  }

  .btn {
    height: 65px;
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
    position: relative;
  }
  .btn button {
    width: 300px;
    height: 41.25px;
    background: #5c59f0;
    border-radius: 50px;
    border: none;
    color: #ffffff;
    position: absolute;
    right: 0;
    bottom: 0;
    margin-right: 50px;
    text-align: center;
  }

  .detail-text {
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    color: #3b3d3b;
    margin-bottom: 80px;
  }
`;
