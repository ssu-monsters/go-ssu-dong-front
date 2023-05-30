import css from 'styled-jsx/css';

export default css`
  .container {
    width: 500px;
    height: 40px;
    display: flex;
    justify-content: center;
    border: 1px solid #5c59f0;
    box-shadow: 0px 0px 6px #d0cfff;
    border-radius: 40px;
    margin: auto;
    margin-top: 30px;
    font-family: 'NanumSquare Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 15px;

    color: #5c59f0;
  }
  .content {
    width: 317px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .content-item {
    cursor: pointer;
  }

  .content-item-active {
    font-weight: 700;
    cursor: pointer;
  }

  .content-item:hover {
    font-weight: 700;
  }
`;
