import React, { useState } from 'react'
export interface NavBarProps {
  children: React.ReactNode
}

const Navbar = ({ children }: NavBarProps) => {
  const [btn, setBtn] = useState('홍보글')

  const select = (item: any) => {
    if (item === '홍보글') {
      setBtn('홍보글')
    } else if (item === '지원') {
      setBtn('지원')
    } else if (item === '모집') {
      setBtn('모집')
    }
  }

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

      <style jsx>{`
        .navbar {
          width: 100%;
          background-color: white;
          height: 55px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(251, 251, 255, 0.3);
          box-shadow: 0px 0px 4px rgba(177, 177, 177, 0.25);
        }
        .left {
          margin-left: 20px;
          font-size: 18px;
          line-height: 20px;
          color: #5c59f0;
        }

        .center {
          display: flex;
          list-style: none;
          width: 394px;
          justify-content: space-between;
        }
        .center li {
          height: 55px;
          display: flex;
          align-items: center;
          font-size: 14px;
          cursor: pointer;
          color: #656565;
        }
        .center li:hover {
          color: red;
        }
        .center .selected {
          border-bottom: 1px solid #6c6c6c;
        }
        .center li p {
          margin-left: 7px;
          margin-right: 7px;
        }
        .right {
          display: flex;
          margin-right: 30px;
        }
        .right .name {
          margin-left: 8px;
          color: #656565;
        }
      `}</style>
    </div>
  )
}

export default Navbar
