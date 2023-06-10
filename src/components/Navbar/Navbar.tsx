import React, { useEffect, useState } from 'react';
import { isLoggedInState } from '@/atoms/auth';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/router';

import styles from './Navbar.style';

export interface NavBarProps {
  children: React.ReactNode;
}

const Navbar = ({ children }: NavBarProps) => {
  const [activeTab, setActiveTab] = useState('');
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const [type, setType] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (localStorage) {
      setIsLoggedIn(
        localStorage.getItem('IsLoggedIn') === 'true' ? true : false,
      );
      setType(localStorage.getItem('type') === 'general' ? '지원자' : '관리자');
    }
  }, []);

  const selectTabItem = (item: string) => {
    if (isLoggedIn) {
      if (item === '홍보글') {
        setActiveTab('홍보글');
        router.push('/promotion');
      } else if (item === '지원') {
        setActiveTab('지원');
        router.push('/apply');
      } else if (item === '모집') {
        if (type === '지원자') {
          alert('관리자만 접근 가능합니다.');
        } else {
          setActiveTab('모집');
          router.push('/recruit');
        }
      }
    } else {
      alert('로그인을 해주세요!');
    }
  };

  const SpaceHome = () => {
    setActiveTab('');
    router.push('/');
  };

  const SpaceMypage = () => {
    setIsDropdownOpened(!isDropdownOpened);
  };

  const onLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const onLogout = () => {
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
              <div style={{ display: 'flex', width: '100px' }}></div>
            ) : (
              <div style={{ display: 'flex', width: '100px' }}>
                <img
                  width={20}
                  src="https://cdn-icons-png.flaticon.com/512/14/14660.png"
                />
                <div className="name" onClick={SpaceMypage}>
                  배현서
                </div>
              </div>
            )}
          </div>
        </div>
        <div style={{ marginTop: 55 }}>{children}</div>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export default Navbar;
