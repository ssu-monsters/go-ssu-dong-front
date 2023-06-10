import css from 'styled-jsx/css';

export default css`
  .container {
    width: 700px;
    height: 300px;
    margin: auto;
    display: flex;
    align-items: center;
    margin-top: 100px;
  }
  .user-image {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: #d9d9d9;
  }

  .user-image img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }

  .user-info {
    width: 300px;
    height: 245px;
    background-color: white;
    margin-left: 100px;

    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
    color: #282828;
  }

  .semi .type {
    width: 100px;
    padding-right: 30px;
  }

  .user-info .name {
    font-size: 25px;
    line-height: 40px;
    color: #101010;
  }

  .user-info .user-semi-info {
    height: 167px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 38px;
  }

  .user-info .semi {
    display: flex;
  }

  .email {
    display: flex;
    align-items: center;
    width: 100px;
  }

  .indentity {
    display: flex;
    width: 100px;
    align-items: center;
  }
  .age {
    display: flex;
    width: 100px;
    align-items: center;
  }

  .user-info .text {
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;

    color: #282828;
  }
`;
