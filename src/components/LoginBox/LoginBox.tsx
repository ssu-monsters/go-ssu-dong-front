import Logo from '@/assets/images/loginbox-logo.svg';

import styles from './LoginBox.style';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { loginAsync } from '@/api/auth';

const LoginBox = () => {
  const router = useRouter();
  const [loginInput, setLoginInput] = useState({
    type: '지원자',
    account: '',
    password: '',
  });

  console.log(loginInput);

  const { type, account, password } = loginInput;

  const loginInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginInput({ ...loginInput, [name]: value });
  };

  const loginHandler = async () => {
    const accountType = type === '지원자' ? 'general' : 'organization';
    const response = await loginAsync(accountType, account, password);
    console.log(response);
  };

  const spaceRegister = () => {
    router.push('/register');
  };
  return (
    <>
      <div className="box-wrap">
        <Logo />
        <div className="selects-wrap">
          <label>
            <input
              type="radio"
              name="type"
              value="지원자"
              onChange={loginInputHandler}
            />
            지원자
          </label>
          <label>
            <input
              type="radio"
              name="type  "
              value="관리자"
              onChange={loginInputHandler}
            />
            관리자
          </label>
        </div>
        <input
          className="login-input"
          placeholder="아이디를 입력해주세요"
          type="text"
          name="account"
          value={account}
          onChange={loginInputHandler}
        />
        <input
          className="login-input"
          placeholder="비밀번호를 입력해주세요"
          type="password"
          name="password"
          value={password}
          onChange={loginInputHandler}
        />
        <button className="login-button" onClick={loginHandler}>
          로그인하기
        </button>
        <div className="register-section">
          <p>매니저브 계정이 아직 없다면?</p>
          <button className="register-button" onClick={spaceRegister}>
            가입하기
          </button>
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export default LoginBox;
