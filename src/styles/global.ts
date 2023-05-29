import css from 'styled-jsx/css';

export default css.global`
  /* @font-face {
    font-family: 'NanumSquare Neo';
    font-style: normal;
    font-weight: 350;
    src: url('../assets/fonts/NanumSquareNeoTTF-cBd.woff2') format('woff2');
  }
  @font-face {
    font-family: 'NanumSquare Neo';
    font-weight: 400;
    font-style: normal;
    src: url('../assets/fonts/NanumSquareNeoTTF-bRg.woff2') format('woff2');
  }

  @font-face {
    font-family: 'NanumSquare Neo';
    font-style: normal;
    font-weight: 700;
    src: url('../assets/fonts/NanumSquareNeoTTF-cBd.woff2') format('woff2');
  }
  @font-face {
    font-family: 'NanumSquare Neo';
    font-style: normal;
    font-weight: 800;
    src: url('../assets/fonts/NanumSquareNeoTTF-dEb.woff2') format('woff2');
  } */

  body {
    margin: auto;
    font-family: 'NanumSquareNeo';
    color: #2f384a;
    width: 100%;
    box-sizing: border-box;
    min-width: 900px;
    overflow-x: hidden;
  }

  .react-calendar {
    position: absolute;
    top: 530px;
    left: 730px;
    width: 280px;
    height: 270px;
    border-radius: 10px;
    filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.15));
    border: none;
    float: right;
    margin-right: 16px;
    z-index: 1;
  }
`;
