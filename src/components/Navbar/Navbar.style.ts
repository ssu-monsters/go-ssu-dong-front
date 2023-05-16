import css from 'styled-jsx/css';

export default css`
  .navbar {
    width: 100%;
    background-color: white;
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(251, 251, 255, 0.3);
    box-shadow: 0px 0px 4px rgba(177, 177, 177, 0.25);
  }
  .left {
    margin-left: 20px;
    font-size: 18px;
    line-height: 20px;
    color: #5c59f0;
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
    color: red;
  }
  .center .selected {
    border-bottom: 1px solid #6c6c6c;
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
