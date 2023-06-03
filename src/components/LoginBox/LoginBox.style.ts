import { COLORS } from '@/constants/styles/color';
import css from 'styled-jsx/css';

export default css`
  .box-wrap {
    width: 370px;
    height: 421px;
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
`;
