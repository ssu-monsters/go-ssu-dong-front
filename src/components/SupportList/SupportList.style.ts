import css from 'styled-jsx/css';

export default css`
  .container {
    width: 1000px;
    height: 500px;
    margin: auto;
    background-color: white;
  }

  .title {
    font-family: 'NanumSquare Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    color: #181818;
    display: flex;
    align-items: center;
    margin-bottom: 18px;
  }
  .user-name {
    font-weight: 700;
    font-size: 25px;
    line-height: 40px;
    color: #101010;
    margin-right: 10px;
  }

  .list {
    margin-top: 18px;
  }

  .list .category {
    width: 938px;
    height: 45px;
    display: flex;

    font-family: 'NanumSquare Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 15px;
    color: #5c59f0;
    margin: auto;
    align-items: center;
  }

  .category :nth-child(1) {
    margin-right: 40px;
  }
  .category :nth-child(2) {
    margin-right: 206px;
  }
  .category :nth-child(3) {
    margin-right: 290px;
  }
  .category :nth-child(4) {
    margin-right: 62px;
  }
  .category :nth-child(5) {
    margin-right: 57px;
  }

  .list-item {
    font-family: 'NanumSquare Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 15px;
    color: #282828;
  }

  li {
    list-style: none;

    width: 1000px;
    height: 46px;
    margin-bottom: 10px;
    border: 1px solid rgba(92, 89, 240, 0.3);
    border-radius: 5px;
  }
  .list-in {
    list-style: none;
    display: flex;
    width: 938px;
    height: 46px;
    margin: auto;
    align-items: center;
  }
  .list-in :nth-child(1) {
    margin-left: 7px;
    margin-right: 48px;
  }
  .list-in :nth-child(2) {
    width: 200px;
    margin-right: 63px;
  }
  .list-in :nth-child(3) {
    width: 223px;
    margin-right: 96px;
  }
  .list-in :nth-child(4) {
    margin-right: 62px;
  }
  .list-in :nth-child(5) {
    margin-right: 57px;
  }
`;
