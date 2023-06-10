import Logo from '@/assets/images/loginbox-logo.svg';
import { useState } from 'react';
import { registerAsync } from '@/api/auth';
import styles from './RegisterBox.style';
import { useRouter } from 'next/router';

const RegisterBox = () => {
  const router = useRouter();
  const [type, setType] = useState('');
  const [userId, setUserId] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password1Error, setPassword1Error] = useState(false);
  const [password2Error, setPassword2Error] = useState(false);
  const LoginSubmit = async (e: any) => {
    e.preventDefault();
    if (type === 'general') {
      const response = await registerAsync(
        type,
        userId,
        password2,
        email,
        username,
        '',
      );
      if (response.isSuccess) {
        alert('회원가입 완료되었습니다.');
      }
    } else if (type === 'organization') {
      const response = await registerAsync(
        type,
        userId,
        password2,
        email,
        username,
        '',
      );
      if (response.isSuccess) {
        alert('회원가입 완료되었습니다.');
      }
    }

    router.push('/');
  };

  const handleIdChange = (e: any) => {
    const value = e.target.value;
    setUserId(value);
  };

  const handlePassword1Change = (e: any) => {
    const value = e.target.value;
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\[\]\/\\\.,<>?;':"{}|\-_+~!@#$%^&*()=\`\[\]])[A-Za-z\d\[\]\/\\\.,<>?;':"{}|\-_+~!@#$%^&*()=\`\[\]]{8,}$/;
    setPassword1(value);

    if (!regex.test(value)) {
      setPassword1Error(true);
    } else {
      setPassword1Error(false);
    }
  };

  const handlePassword2Change = (e: any) => {
    const value = e.target.value;
    setPassword2(value);
    if (password1 !== value) {
      setPassword2Error(true);
    } else {
      setPassword2Error(false);
    }
  };

  const handleUsernameChange = (e: any) => {
    if (username.length <= 8) {
      setUsername(e.target.value);
    }
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <div className="box-wrap">
        <h2 className="title">회원가입</h2>
        <div className="selects-wrap">
          <label>
            <input
              type="radio"
              name="type"
              value="general"
              onChange={(e) => {
                setType(e.target.value);
              }}
            />
            지원자
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="organization"
              onChange={(e) => {
                setType(e.target.value);
              }}
            />
            관리자
          </label>
        </div>
        <div className="signForm">
          <div className="field">
            <div>아이디</div>
            <input
              type="text"
              placeholder="영문, 숫자 5-11자"
              value={userId}
              onChange={handleIdChange}
            />
            <button className="hidden" />
          </div>
          <div className="field">
            <div>비밀번호</div>
            <input
              type="password"
              className={password1Error ? 'errorBox' : ''}
              placeholder="숫자, 영문, 특수문자 조합 최소 8자"
              value={password1}
              onChange={handlePassword1Change}
            />
            <button className="hidden" />
          </div>
          {password1Error ? (
            <div className="message">
              <span className="errorMessage">
                비밀번호를 확인해주세요. (숫자, 영문, 특수문자 조합 최소 8자)
              </span>
            </div>
          ) : (
            ''
          )}

          <div className="field">
            <div>비밀번호 확인</div>
            <input
              type="password"
              className={password2Error ? 'errorBox' : ''}
              placeholder="비밀번호 재입력"
              value={password2}
              onChange={handlePassword2Change}
            />
            <button className="hidden" />
          </div>
          {password2Error ? (
            <div className="message">
              <span className="errorMessage">
                비밀번호가 일치하지 않습니다.
              </span>
            </div>
          ) : (
            ''
          )}

          <div className="field">
            <div>이름</div>
            <input
              type="text"
              placeholder="닉네임을 입력해주세요 (8자 제한)"
              value={username}
              onChange={handleUsernameChange}
            />
            <button className="hidden" />
          </div>

          <div className="field">
            <div>이메일</div>
            <input
              type="text"
              placeholder="이메일을 입력해주세요"
              value={email}
              onChange={handleEmailChange}
            />
            <button className="hidden" />
          </div>

          <button className="signupBtn" onClick={LoginSubmit}>
            가입하기
          </button>
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export default RegisterBox;
