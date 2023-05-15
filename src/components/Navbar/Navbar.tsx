import React, { useState } from 'react';
import styles from './Navbar.style';

export interface NavBarProps {
  children: React.ReactNode;
}

const Navbar = ({ children }: NavBarProps) => {
  const [btn, setBtn] = useState('홍보글');

  const select = (item: any) => {
    if (item === '홍보글') {
      setBtn('홍보글');
    } else if (item === '지원') {
      setBtn('지원');
    } else if (item === '모집') {
      setBtn('모집');
    }
  };

  return (
    <div>
      <div>
        <div className="navbar">
          <div className="left">매니저브</div>
          <div className="center">
            <li
              className={btn === '홍보글' ? 'selected' : ''}
              onClick={() => select('홍보글')}
            >
              <p>홍보글 둘러보기</p>
            </li>
            <li
              className={btn === '지원' ? 'selected' : ''}
              onClick={() => select('지원')}
            >
              <p>조직 지원 관리</p>
            </li>
            <li
              className={btn === '모집' ? 'selected' : ''}
              onClick={() => select('모집')}
            >
              <p>조직 모집 관리</p>
            </li>
          </div>
          <div className="right">
            <img
              width={20}
              src="https://cdn-icons-png.flaticon.com/512/14/14660.png"
            />
            <div className="name">배현서</div>
          </div>
        </div>
        {children}
      </div>

      <style jsx>{styles}</style>
    </div>
  );
};

export default Navbar;
