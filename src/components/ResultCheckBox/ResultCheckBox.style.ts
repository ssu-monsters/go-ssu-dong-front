import { COLORS } from '@/constants/styles/color';
import css from 'styled-jsx/css';

export default css`
  .box-wrap {
    width: 570px;
    height: 600px;
    background-color: ${COLORS.grayscale.white};
    box-shadow: 0px 0px 4px #e4e4ff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;

    > svg {
      margin: 16px;
    }
  }
  .title {
    color: #5c59f0;
    margin-top: 25px;
  }

  .selects-wrap {
    margin: 5px auto 18px;
  }

  .selects-wrap label {
    font-size: 13px;
    font-weight: 400;
    color: ${COLORS.grayscale.gray300};
    margin: 0px 7px;
  }

  input,
  button {
    border: none;
    background: none;
  }

  .login-input {
    width: 300px;
    height: 45px;
    background-color: #f8f8f8;
    border-radius: 3px;
    color: ${COLORS.grayscale.gray300};
    font-weight: 400;
    font-size: 13px;
    margin-bottom: 20px;
    padding-left: 10px;
  }

  .login-input:focus {
    outline: none;
  }

  .login-button {
    width: 300px;
    height: 40px;
    background-color: ${COLORS.primary.purple};
    color: ${COLORS.grayscale.white};
    border-radius: 10px;
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 40px;
  }

  .register-section {
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 12px;
    color: ${COLORS.primary.purple};
  }

  .register-button {
    font-weight: 700;
    color: ${COLORS.primary.purple};
  }

  .account {
    display: flex;
  }

  .signForm {
    margin: 0 auto;
    font-size: 16px;
    padding-left: 50px;
  }

  .field {
    position: relative;
    display: flex;
    flex: 1 1 0;
    justify-content: center;
    padding-top: 24px;
  }

  .field div {
    flex-basis: 110px;
    text-align: left;
    margin: auto 0;
  }

  .field input {
    margin: auto;
    padding: 16px;
    flex-basis: 328px;
    width: 528px;
    height: 48px;
    border-radius: 8px;
    border: 1px solid #e3e5e5;
  }

  .field input:focus {
    outline: none;
  }

  .field input::placeholder {
    font-family: 'Pretendard';
    color: #72777a;
  }

  .field button {
    flex-basis: 136px;
    border-radius: 8px;
    border: 0;
    color: white;
    background: var(--challenging-blue);
  }

  button:disabled {
    color: white;
    background: #dddee1;
  }

  .message {
    font-size: 12px;
    padding-left: 105px;
    padding-top: 12px;
    text-align: left;
  }

  .errorMessage {
    color: #ff5247;
  }

  .field .errorBox {
    border: 2px solid #ff5247;
  }

  .field:last-of-type div {
    margin-top: 0;
  }

  .policy {
    flex-grow: 1;
    font-size: 12px;
  }

  .policy div {
    display: flex;
    justify-content: center;
  }

  .policy div span {
    width: 160px;
    margin-left: 16px;
    margin-right: 28px;
  }

  .check {
    padding-bottom: 22px;
  }

  .check span {
    color: #7c8089;
  }

  .check img:hover {
    cursor: pointer;
  }

  .check a {
    color: #7c8089;
    text-decoration: underline;
  }

  .check a:hover {
    color: #7c8089;
    text-decoration: underline;
    cursor: pointer;
  }

  .check:nth-child(1) span {
    color: #000000;
  }

  .signupBtn {
    width: 328px;
    height: 48px;
    border: 0;
    color: white;
    background-color: #5c59f0;
    border-radius: 8px;
    margin-bottom: 23px;
    margin-left: 60px;
    margin-top: 40px;
  }

  .hidden {
    visibility: hidden;
  }

  .none {
    display: none;
  }
`;
