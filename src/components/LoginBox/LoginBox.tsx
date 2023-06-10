import Logo from '@/assets/images/loginbox-logo.svg';

import styles from './LoginBox.style';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { loginAsync } from '@/api/auth';

import { getAsync } from '@/api/API';

import { useRecoilState } from 'recoil';
import { isLoggedInState, userState } from '@/atoms/auth';

const username = '배현서'; // TODO

const LoginBox = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const [user, setUser] = useRecoilState(userState);
  const [loginInput, setLoginInput] = useState({
    type: '지원자',
    account: '',
    password: '',
  });

  const { type, account, password } = loginInput;

  const loginInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginInput({ ...loginInput, [name]: value });
  };

  const loginHandler = async () => {
    const accountType = type === '지원자' ? 'general' : 'organization';
    const response = await loginAsync(accountType, account, password);

    // console.log(response);
    // const response = await getAsync<any>('/user/get?account=20192995');

    console.log(response.result);
    setUser(response);

    if (response.isSuccess) {
      setIsLoggedIn(true);
      localStorage.setItem('type', accountType);
      localStorage.setItem('IsLoggedIn', 'true');
      localStorage.setItem('userInfo', JSON.stringify(response.result));
    }
  };

  const spaceRegister = async () => {
    // const res = await getAsync('/user/get?account=20192995');

    // console.log(res);
    // setUser(res);
    router.push('/register');
  };

  const spaceLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('IsLoggedIn');
    localStorage.removeItem('userInfo');
    localStorage.removeItem('type');
  };

  useEffect(() => {
    if (localStorage) {
      setIsLoggedIn(
        localStorage.getItem('IsLoggedIn') === 'true' ? true : false,
      );
    }
  }, []);

  return (
    <>
      <div className="box-wrap">
        {isLoggedIn ? (
          <div className="user-info">
            <div className="user-image"></div>
            <div className="user-name">
              안녕하세요,{' '}
              <span className="hl">
                {JSON.parse(localStorage.getItem('userInfo') ?? '').name}
              </span>
              님!
            </div>
            <button
              className="login-button apply-button"
              onClick={loginHandler}
            >
              내 지원현황 보러가기
            </button>
            <button className="register-button" onClick={spaceLogout}>
              로그아웃
            </button>
          </div>
        ) : (
          <>
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
                  name="type"
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
          </>
        )}
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export default LoginBox;
