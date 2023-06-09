import css from 'styled-jsx/css';

export default css`
  .container {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .main {
    position: relative;
    height: 430px;
    padding: 0 160px;
    display: flex;
  }
  .SSBC {
    background: linear-gradient(
        180.85deg,
        rgba(175, 69, 65, 0.2) -1.52%,
        rgba(11, 6, 240, 0.2) -1.52%,
        rgba(220, 0, 8, 0.2) -1.51%,
        rgba(242, 114, 110, 0.088) 99.27%
      ),
      #ffffff;
  }
  .SSC {
    background: linear-gradient(
        180deg,
        rgba(56, 175, 0, 0.35) 0%,
        rgba(193, 234, 135, 0.35) 100%
      ),
      #ffffff;
  }
  .GDSC {
    background-color: #ffffff;
  }

  .text {
    position: absolute;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'NanumSquare Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #000000;
    width: 318px;
  }
  .content {
    width: fit-content;
    font-weight: 800;
    font-size: 40px;
    line-height: 44px;
    margin-bottom: 30px;
  }

  .thumnail {
    height: 100%;
    float: right;
    display: flex;
    align-items: center;
  }
`;
