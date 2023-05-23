import styles from './LoginBox.style';

const LoginBox = () => (
  <>
    <div className="box-wrap">
      <div className="logo">logo</div>
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
        <button className="register-button">가입하기</button>
      </div>
    </div>
    <style jsx>{styles}</style>
  </>
);

export default LoginBox;
