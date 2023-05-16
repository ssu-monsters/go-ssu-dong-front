import React, { useState } from 'react';
import { authState } from '@/atoms/auth';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/router';

import styles from './Navbar.style';

export interface NavBarProps {
  children: React.ReactNode;
}

const Navbar = ({ children }: NavBarProps) => {
  const [activeTab, setActiveTab] = useState('');
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(authState);

  const router = useRouter();

  const selectTabItem = (item: any) => {
    if (item === '홍보글') {
      setActiveTab('홍보글');
      router.push('/promotion');
    } else if (item === '지원') {
      setActiveTab('지원');
      router.push('/support');
    } else if (item === '모집') {
      setActiveTab('모집');
      router.push('/recruit');
    }
  };

  const SpaceHome = () => {
    setActiveTab('');
    router.push('/');
  };

  const SpaceMypage = () => {
    setIsDropdownOpened(!isDropdownOpened);
  };

  const onLogin = (text: any) => {
    setIsLoggedIn(!isLoggedIn);
  };

  const onLogout = (text: any) => {
    setIsLoggedIn(!isLoggedIn);
    setIsDropdownOpened(!isDropdownOpened);
  };

  return (
    <>
      <div>
        <div className="navbar">
          <div className="left" onClick={SpaceHome}>
            매니저브
          </div>
          <div className="center">
            <li
              className={activeTab === '홍보글' ? 'selected' : ''}
              onClick={() => selectTabItem('홍보글')}
            >
              <p>홍보글 둘러보기</p>
            </li>
            <li
              className={activeTab === '지원' ? 'selected' : ''}
              onClick={() => selectTabItem('지원')}
            >
              <p>조직 지원 관리</p>
            </li>
            <li
              className={activeTab === '모집' ? 'selected' : ''}
              onClick={() => selectTabItem('모집')}
            >
              <p>조직 모집 관리</p>
            </li>
          </div>
          <div className="right">
            {!isLoggedIn ? (
              <div className="login" onClick={onLogin}>
                <div className="text">로그인</div>
              </div>
            ) : (
              <div style={{ display: 'flex', width: '100px' }}>
                <img
                  width={20}
                  src="https://cdn-icons-png.flaticon.com/512/14/14660.png"
                />
                <div className="name" onClick={SpaceMypage}>
                  배현서
                </div>
                {isDropdownOpened ? (
                  <div>
                    <div className="drop-triangle"></div>
                    <div className="drop">
                      <div className="drop-container">
                        <div
                          className="text"
                          style={{ textAlign: 'center', lineHeight: '28px' }}
                        >
                          현서님, 좋은 조직 찾으시길 바랄게요 ^^
                        </div>
                        <div className="control">
                          <div style={{ marginBottom: '10px' }}>설정</div>
                          <div onClick={onLogout}>로그아웃</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ''
                )}
              </div>
            )}
          </div>
        </div>
        {children}
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export default Navbar;
