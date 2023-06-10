import css from 'styled-jsx/css';

export default css`
  .container {
    width: 1000px;
    height: 500px;
    margin: auto;
    background-color: white;
    margin-top: 100px;
  }

  .title {
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

  .btn {
    width: 350px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 150px;
  }

  .btn .okay {
    background: #5c59f0;
    color: #ffffff;
    width: 160px;
    height: 35px;
    border-radius: 50px;
    border: 0;
    cursor: pointer;
  }
  .btn .no {
    border: 1px solid #5c59f0;
    color: #5c59f0;
    width: 160px;
    height: 35px;
    border-radius: 50px;
    border: 0;
    cursor: pointer;
  }
`;
