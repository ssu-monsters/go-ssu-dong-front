import Logo from '@/assets/images/loginbox-logo.svg';

import styles from './LoginBox.style';
import { useRouter } from 'next/router';

const LoginBox = () => {
  const router = useRouter();
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
              onChange={() => {}}
            />
            지원자
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="지원자"
              onChange={() => {}}
            />
            관리자
          </label>
        </div>
        <input
          className="login-input"
          name="id"
          placeholder="아이디를 입력해주세요"
          type="text"
        />
        <input
          className="login-input"
          name="password"
          placeholder="비밀번호를 입력해주세요"
          type="password"
        />
        <button className="login-button">로그인하기</button>
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
