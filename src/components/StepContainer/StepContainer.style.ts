import css from 'styled-jsx/css';

export default css`
  .container {
    width: 980px;
    height: 115px;
    background: rgba(124, 124, 124, 0.05);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #818181;
    margin-bottom: 30px;
  }

  .active {
    background: linear-gradient(
      180deg,
      #6c69ff 58.26%,
      rgba(92, 89, 240, 0) 179.13%
    );
    color: #ffffff;
  }

  .complete {
    background: rgba(92, 89, 240, 0.08);
    color: #202020;
  }

  .inner-container {
    width: 913px;
    height: 73px;
    display: flex;
    justify-content: space-between;
  }

  .left-text {
    font-family: 'NanumSquare Neo';
    font-style: normal;
  }

  .title {
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
    margin-bottom: 13px;
  }

  .content {
    font-weight: 400;
    font-size: 14px;
    line-height: 15px;
  }

  .right-btn {
    position: relative;
    width: 180px;
    cursor: pointer;
  }
  .right-btn button {
    position: absolute;
    bottom: 0;
    width: 180px;
    height: 35px;
    border: 1px solid #818181;
    border-radius: 50px;
    font-family: 'NanumSquare Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 15px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #818181;
  }

  .right-btn div {
    position: absolute;
    bottom: 0;
    right: 0;
    color: #202020;
    font-family: 'NanumSquare Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 15px;
  }

  .active .right-btn button {
    color: #ffffff;
    border: 1px solid #ffffff;
    background-color: transparent;
  }

  .right-btn img {
    margin-left: 3px;
  }
`;
